class SurveyManager {
    constructor() {
        this.currentQuestionIndex = 0;
        this.answers = [];
        this.startTime = Date.now();
        
        this.initializeElements();
        this.loadQuestion();
        this.updateProgress();
    }
    
    initializeElements() {
        this.questionNumberEl = document.getElementById('questionNumber');
        this.questionCategoryEl = document.getElementById('questionCategory');
        this.questionTextEl = document.getElementById('questionText');
        this.questionDescriptionEl = document.getElementById('questionDescription');
        this.currentQuestionEl = document.getElementById('currentQuestion');
        this.totalQuestionsEl = document.getElementById('totalQuestions');
        this.progressFillEl = document.getElementById('progressFill');
        this.prevBtnEl = document.getElementById('prevBtn');
        this.nextBtnEl = document.getElementById('nextBtn');
        this.completionModalEl = document.getElementById('completionModal');
        
        // Set total questions
        this.totalQuestionsEl.textContent = SURVEY_QUESTIONS.length;
        
        // Load existing answers if any
        const savedAnswers = localStorage.getItem('surveyAnswers');
        if (savedAnswers) {
            this.answers = JSON.parse(savedAnswers);
        } else {
            // Initialize empty answers array
            this.answers = new Array(SURVEY_QUESTIONS.length).fill(null);
        }
        
        // Load current question index
        const savedIndex = localStorage.getItem('currentQuestionIndex');
        if (savedIndex !== null) {
            this.currentQuestionIndex = parseInt(savedIndex);
        }
    }
    
    loadQuestion() {
        const question = SURVEY_QUESTIONS[this.currentQuestionIndex];
        
        this.questionNumberEl.textContent = this.currentQuestionIndex + 1;
        this.questionCategoryEl.textContent = POLICY_CATEGORIES[question.category];
        this.questionTextEl.textContent = question.question;
        this.questionDescriptionEl.textContent = question.description;
        
        // Update progress
        this.currentQuestionEl.textContent = this.currentQuestionIndex + 1;
        
        // Clear previous selection
        this.clearAnswerSelection();
        
        // Load existing answer if any
        const existingAnswer = this.answers[this.currentQuestionIndex];
        if (existingAnswer !== null) {
            this.showAnswerSelection(existingAnswer);
        }
        
        // Update navigation buttons
        this.updateNavigationButtons();
    }
    
    clearAnswerSelection() {
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
    }
    
    showAnswerSelection(answer) {
        const buttons = document.querySelectorAll('.answer-btn');
        if (answer === true) {
            buttons[0].classList.add('selected'); // Agree button
        } else {
            buttons[1].classList.add('selected'); // Disagree button
        }
        
        // Enable next button
        this.nextBtnEl.disabled = false;
    }
    
    updateNavigationButtons() {
        // Previous button
        this.prevBtnEl.disabled = this.currentQuestionIndex === 0;
        
        // Next button
        const hasAnswer = this.answers[this.currentQuestionIndex] !== null;
        this.nextBtnEl.disabled = !hasAnswer;
        
        // Update next button text for last question
        if (this.currentQuestionIndex === SURVEY_QUESTIONS.length - 1) {
            this.nextBtnEl.innerHTML = `
                완료
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"/>
                </svg>
            `;
        } else {
            this.nextBtnEl.innerHTML = `
                다음
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            `;
        }
    }
    
    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / SURVEY_QUESTIONS.length) * 100;
        this.progressFillEl.style.width = `${progress}%`;
    }
    
    selectAnswer(isAgree) {
        // Save answer
        this.answers[this.currentQuestionIndex] = isAgree;
        
        // Save to localStorage
        localStorage.setItem('surveyAnswers', JSON.stringify(this.answers));
        localStorage.setItem('currentQuestionIndex', this.currentQuestionIndex);
        
        // Update UI
        this.showAnswerSelection(isAgree);
        
        // Auto-advance after short delay for better UX
        setTimeout(() => {
            if (this.currentQuestionIndex < SURVEY_QUESTIONS.length - 1) {
                this.nextQuestion();
            } else {
                this.completeSurvey();
            }
        }, 500);
    }
    
    nextQuestion() {
        if (this.currentQuestionIndex < SURVEY_QUESTIONS.length - 1) {
            this.currentQuestionIndex++;
            
            // 진행 중간 광고 표시 (10문제, 20문제 완료 시)
            if (this.currentQuestionIndex === 10 || this.currentQuestionIndex === 20) {
                this.showProgressAd();
                return;
            }
            
            this.loadQuestion();
            this.updateProgress();
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            this.completeSurvey();
        }
    }
    
    showProgressAd() {
        const progressAd = document.getElementById('progressAd');
        if (progressAd) {
            progressAd.style.display = 'flex';
            
            // 3초 후 자동으로 계속 버튼 활성화
            setTimeout(() => {
                const continueBtn = progressAd.querySelector('.continue-btn');
                if (continueBtn) {
                    continueBtn.style.display = 'block';
                }
            }, 3000);
        }
    }
    
    hideProgressAd() {
        const progressAd = document.getElementById('progressAd');
        if (progressAd) {
            progressAd.style.display = 'none';
        }
        
        // 광고를 닫은 후 다음 질문 로드
        this.loadQuestion();
        this.updateProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.loadQuestion();
            this.updateProgress();
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    completeSurvey() {
        // Check if all questions are answered
        const allAnswered = this.answers.every(answer => answer !== null);
        
        if (allAnswered) {
            // Calculate results and save
            const results = this.calculateResults();
            localStorage.setItem('surveyResults', JSON.stringify(results));
            localStorage.setItem('surveyCompletedTime', Date.now());
            
            // Show completion modal
            this.showCompletionModal();
        } else {
            alert('모든 질문에 답변해주세요.');
        }
    }
    
    calculateResults() {
        const partyScores = {};
        const categoryScores = {};
        
        // Initialize scores
        Object.keys(PARTIES).forEach(party => {
            partyScores[party] = { total: 0, matches: 0, questions: 0 };
        });
        
        Object.keys(POLICY_CATEGORIES).forEach(category => {
            categoryScores[category] = {};
            Object.keys(PARTIES).forEach(party => {
                categoryScores[category][party] = { matches: 0, questions: 0 };
            });
        });
        
        // Calculate scores based on answers
        SURVEY_QUESTIONS.forEach((question, index) => {
            const userAnswer = this.answers[index];
            const category = question.category;
            
            Object.keys(PARTIES).forEach(party => {
                const partyAgrees = question.agree.includes(party);
                const isMatch = (userAnswer === true && partyAgrees) || (userAnswer === false && !partyAgrees);
                
                // Update party scores
                partyScores[party].questions++;
                if (isMatch) {
                    partyScores[party].matches++;
                    partyScores[party].total += POLICY_WEIGHTS[category][party] || 1;
                }
                
                // Update category scores
                categoryScores[category][party].questions++;
                if (isMatch) {
                    categoryScores[category][party].matches++;
                }
            });
        });
        
        // Calculate percentages
        Object.keys(partyScores).forEach(party => {
            partyScores[party].percentage = Math.round(
                (partyScores[party].matches / partyScores[party].questions) * 100
            );
        });
        
        Object.keys(categoryScores).forEach(category => {
            Object.keys(categoryScores[category]).forEach(party => {
                const data = categoryScores[category][party];
                data.percentage = data.questions > 0 ? Math.round((data.matches / data.questions) * 100) : 0;
            });
        });
        
        // Find top party
        const topParty = Object.keys(partyScores).reduce((a, b) => 
            partyScores[a].percentage > partyScores[b].percentage ? a : b
        );
        
        return {
            partyScores,
            categoryScores,
            topParty,
            totalQuestions: SURVEY_QUESTIONS.length,
            completionTime: Date.now() - this.startTime,
            answers: this.answers
        };
    }
    
    showCompletionModal() {
        this.completionModalEl.style.display = 'flex';
    }
    
    reviewAnswers() {
        this.completionModalEl.style.display = 'none';
        // Could implement a review mode here
        alert('답변 검토 기능은 추후 제공됩니다. 현재는 결과 확인만 가능합니다.');
        this.showCompletionModal();
    }
    
    showResults() {
        window.location.href = 'results.html';
    }
}

// Global functions for HTML onclick handlers
function selectAnswer(isAgree) {
    if (window.surveyManager) {
        window.surveyManager.selectAnswer(isAgree);
    }
}

function nextQuestion() {
    if (window.surveyManager) {
        window.surveyManager.nextQuestion();
    }
}

function previousQuestion() {
    if (window.surveyManager) {
        window.surveyManager.previousQuestion();
    }
}

function reviewAnswers() {
    if (window.surveyManager) {
        window.surveyManager.reviewAnswers();
    }
}

function showResults() {
    if (window.surveyManager) {
        window.surveyManager.showResults();
    }
}

// Initialize survey when page loads
document.addEventListener('DOMContentLoaded', function() {
    window.surveyManager = new SurveyManager();
    // 전역 변수로도 설정
    window.survey = window.surveyManager;
});

// Handle page visibility change (for mobile users switching apps)
document.addEventListener('visibilitychange', function() {
    if (window.surveyManager && !document.hidden) {
        // Save current state when user returns to page
        localStorage.setItem('surveyAnswers', JSON.stringify(window.surveyManager.answers));
        localStorage.setItem('currentQuestionIndex', window.surveyManager.currentQuestionIndex);
    }
});

// Prevent accidental page refresh
window.addEventListener('beforeunload', function(e) {
    if (window.surveyManager) {
        const answered = window.surveyManager.answers.filter(a => a !== null).length;
        if (answered > 0) {
            e.preventDefault();
            e.returnValue = '설문 진행 중입니다. 페이지를 떠나시겠습니까?';
        }
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (!window.surveyManager) return;
    
    switch(e.key) {
        case '1':
            selectAnswer(true);
            break;
        case '2':
            selectAnswer(false);
            break;
        case 'ArrowLeft':
            if (!window.surveyManager.prevBtnEl.disabled) {
                previousQuestion();
            }
            break;
        case 'ArrowRight':
            if (!window.surveyManager.nextBtnEl.disabled) {
                nextQuestion();
            }
            break;
    }
});
