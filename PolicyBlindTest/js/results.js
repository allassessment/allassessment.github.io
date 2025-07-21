class ResultsManager {
    constructor() {
        this.results = null;
        this.loadResults();
        this.displayResults();
    }
    
    loadResults() {
        const savedResults = localStorage.getItem('surveyResults');
        if (!savedResults) {
            // Redirect to home if no results found
            alert('설문 결과를 찾을 수 없습니다. 설문을 먼저 완료해주세요.');
            window.location.href = 'index.html';
            return;
        }
        
        this.results = JSON.parse(savedResults);
    }
    
    displayResults() {
        this.displayPrimaryResult();
        this.displayPolicyAreas();
        this.displayAllParties();
        this.displayKeyPositions();
    }
    
    displayPrimaryResult() {
        const topParty = this.results.topParty;
        const topPartyData = PARTIES[topParty];
        const score = this.results.partyScores[topParty];
        
        document.getElementById('primaryPartyName').textContent = topPartyData.name;
        document.getElementById('primaryPartyMatch').textContent = `${score.percentage}%`;
        document.getElementById('primaryPartyDescription').textContent = topPartyData.detailedDescription;
        
        // Update document title for sharing
        document.title = `나의 정치 성향: ${topPartyData.name} ${score.percentage}% 일치 - 블라인드 정책 선호 확인지`;
    }
    
    displayPolicyAreas() {
        const container = document.getElementById('policyAreas');
        const topParty = this.results.topParty;
        
        Object.entries(POLICY_CATEGORIES).forEach(([categoryKey, categoryName]) => {
            const categoryData = this.results.categoryScores[categoryKey];
            const topPartyScore = categoryData[topParty];
            
            const areaElement = document.createElement('div');
            areaElement.className = 'policy-area';
            areaElement.innerHTML = `
                <div class="area-name">${categoryName}</div>
                <div class="area-match">${topPartyScore.percentage}%</div>
                <div class="area-description">
                    ${topPartyScore.questions}개 질문 중 ${topPartyScore.matches}개 일치
                </div>
            `;
            container.appendChild(areaElement);
        });
    }
    
    displayAllParties() {
        const container = document.getElementById('partiesGrid');
        const topParty = this.results.topParty;
        
        // Sort parties by score
        const sortedParties = Object.entries(this.results.partyScores)
            .sort(([,a], [,b]) => b.percentage - a.percentage);
        
        sortedParties.forEach(([partyKey, score]) => {
            const partyData = PARTIES[partyKey];
            const isTop = partyKey === topParty;
            
            const partyElement = document.createElement('div');
            partyElement.className = `party-card ${isTop ? 'primary' : ''}`;
            partyElement.innerHTML = `
                <div class="party-header">
                    <div class="party-name">${partyData.name}</div>
                    <div class="party-match">${score.percentage}%</div>
                </div>
                <div class="party-summary">${partyData.description}</div>
            `;
            container.appendChild(partyElement);
        });
    }
    
    displayKeyPositions() {
        const container = document.getElementById('keyPositions');
        const topParty = this.results.topParty;
        
        // Find key questions where user's stance differs from other parties
        const keyQuestions = this.findKeyQuestions();
        
        keyQuestions.slice(0, 6).forEach(questionData => {
            const question = SURVEY_QUESTIONS[questionData.index];
            const userAnswer = this.results.answers[questionData.index];
            const topPartyAgrees = question.agree.includes(topParty);
            
            const positionElement = document.createElement('div');
            positionElement.className = 'position-card';
            positionElement.innerHTML = `
                <div class="position-title">${question.question}</div>
                <div class="position-stance">
                    <div class="stance-indicator ${userAnswer ? 'agree' : 'disagree'}">
                        ${userAnswer ? '✓' : '✗'}
                    </div>
                    <div class="stance-text">
                        당신과 ${PARTIES[topParty].name}: ${userAnswer ? '찬성' : '반대'}
                    </div>
                </div>
                <div class="position-explanation">
                    ${question.description}
                </div>
            `;
            container.appendChild(positionElement);
        });
    }
    
    findKeyQuestions() {
        const topParty = this.results.topParty;
        const questionScores = [];
        
        SURVEY_QUESTIONS.forEach((question, index) => {
            const userAnswer = this.results.answers[index];
            const topPartyAgrees = question.agree.includes(topParty);
            const isMatch = (userAnswer === true && topPartyAgrees) || (userAnswer === false && !topPartyAgrees);
            
            // Calculate how much this question differentiates the top party from others
            let differentiationScore = 0;
            Object.keys(PARTIES).forEach(party => {
                if (party !== topParty) {
                    const partyAgrees = question.agree.includes(party);
                    const partyMatch = (userAnswer === true && partyAgrees) || (userAnswer === false && !partyAgrees);
                    if (isMatch && !partyMatch) {
                        differentiationScore++;
                    }
                }
            });
            
            questionScores.push({
                index,
                differentiationScore,
                isMatch
            });
        });
        
        // Sort by differentiation score and whether it matches top party
        return questionScores
            .filter(q => q.isMatch)
            .sort((a, b) => b.differentiationScore - a.differentiationScore);
    }
    
    shareToTwitter() {
        const topParty = PARTIES[this.results.topParty];
        const score = this.results.partyScores[this.results.topParty];
        const text = `블라인드 정책 선호 테스트 결과: ${topParty.name} ${score.percentage}% 일치! 정치 성향은 정책으로 이루어져야 합니다.`;
        const url = window.location.href;
        
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    }
    
    shareToFacebook() {
        const url = window.location.href;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    }
    
    shareToKakao() {
        const topParty = PARTIES[this.results.topParty];
        const score = this.results.partyScores[this.results.topParty];
        
        // KakaoLink would need to be initialized with actual app key
        // For now, we'll copy the text
        const text = `블라인드 정책 선호 테스트 결과: ${topParty.name} ${score.percentage}% 일치!\n정치 성향은 정책으로 이루어져야 합니다.\n\n${window.location.href}`;
        
        if (navigator.share) {
            navigator.share({
                title: '블라인드 정책 선호 확인지 결과',
                text: text,
                url: window.location.href
            });
        } else {
            this.copyToClipboard(text);
            alert('결과가 클립보드에 복사되었습니다.');
        }
    }
    
    copyLink() {
        this.copyToClipboard(window.location.href);
        alert('링크가 클립보드에 복사되었습니다.');
    }
    
    copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
    }
    
    retakeTest() {
        if (confirm('새로운 테스트를 시작하시겠습니까? 현재 결과는 삭제됩니다.')) {
            localStorage.removeItem('surveyAnswers');
            localStorage.removeItem('surveyResults');
            localStorage.removeItem('currentQuestionIndex');
            localStorage.removeItem('surveyStartTime');
            localStorage.removeItem('surveyCompletedTime');
            window.location.href = 'survey.html';
        }
    }
    
    goHome() {
        window.location.href = 'index.html';
    }
}

// Global functions for HTML onclick handlers
function shareToTwitter() {
    if (window.resultsManager) {
        window.resultsManager.shareToTwitter();
    }
}

function shareToFacebook() {
    if (window.resultsManager) {
        window.resultsManager.shareToFacebook();
    }
}

function shareToKakao() {
    if (window.resultsManager) {
        window.resultsManager.shareToKakao();
    }
}

function copyLink() {
    if (window.resultsManager) {
        window.resultsManager.copyLink();
    }
}

function retakeTest() {
    if (window.resultsManager) {
        window.resultsManager.retakeTest();
    }
}

function goHome() {
    if (window.resultsManager) {
        window.resultsManager.goHome();
    }
}

// Initialize results when page loads
document.addEventListener('DOMContentLoaded', function() {
    window.resultsManager = new ResultsManager();
});

// Analytics tracking (if needed)
document.addEventListener('DOMContentLoaded', function() {
    // Track result view
    if (typeof gtag !== 'undefined') {
        gtag('event', 'survey_completed', {
            'event_category': 'engagement',
            'event_label': 'political_assessment'
        });
    }
});

// Print functionality
function printResults() {
    window.print();
}

// Add print button to page
document.addEventListener('DOMContentLoaded', function() {
    const actionButtons = document.querySelector('.action-buttons');
    if (actionButtons) {
        const printBtn = document.createElement('button');
        printBtn.className = 'action-btn secondary';
        printBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 9V2h12v7"/>
                <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
                <rect x="6" y="14" width="12" height="8"/>
            </svg>
            결과 인쇄
        `;
        printBtn.onclick = printResults;
        actionButtons.insertBefore(printBtn, actionButtons.firstChild);
    }
});
