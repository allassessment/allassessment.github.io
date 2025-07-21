// Main application logic for ORV Personality Quiz
let currentLanguage = 'ko';
let currentQuestionIndex = -1;
let userAnswers = [];
let quizStartTime = null;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
        document.getElementById('languageSelect').value = savedLanguage;
    }
    
    // Initialize UI
    updateUILanguage();
    displayCharacterPreview();
    
    // Add event listeners
    setupEventListeners();
    
    // Initialize AdSense
    initializeAdSense();
});

// Setup event listeners
function setupEventListeners() {
    // Start quiz button
    document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
    
    // Retake quiz button
    document.getElementById('retakeBtn').addEventListener('click', resetQuiz);
    
    // Share button
    document.getElementById('shareBtn').addEventListener('click', shareResult);
    
    // Language selector
    document.getElementById('languageSelect').addEventListener('change', function(e) {
        changeLanguage(e.target.value);
    });
}

// Display character preview on home screen
function displayCharacterPreview() {
    const characterGrid = document.getElementById('characterGrid');
    const charactersData = getAllCharacters(currentLanguage);
    
    characterGrid.innerHTML = charactersData.map(character => `
        <div class="character-item">
            <div class="character-avatar">${character.avatar}</div>
            <div class="character-name">${character.name}</div>
            <div class="character-trait">${character.shortTrait}</div>
        </div>
    `).join('');
}

// Start the quiz
function startQuiz() {
    quizStartTime = Date.now();
    currentQuestionIndex = 0;
    userAnswers = [];
    
    // Hide home screen, show quiz screen
    document.getElementById('homeScreen').classList.remove('active');
    document.getElementById('quizScreen').classList.add('active');
    
    // Display first question
    displayQuestion(0);
}

// Display a question
function displayQuestion(questionIndex) {
    const question = quizData[questionIndex];
    const questionData = question[currentLanguage];
    
    // Update progress
    const progress = ((questionIndex + 1) / quizData.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `${questionIndex + 1} ${getTranslation('progressOf', currentLanguage)} ${quizData.length}`;
    
    // Update question content
    document.getElementById('questionNumber').textContent = `${getTranslation('questionPrefix', currentLanguage)} ${questionIndex + 1}`;
    document.getElementById('questionTitle').textContent = questionData.question;
    
    // Display answer options
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = questionData.answers.map((answer, index) => `
        <div class="answer-option" data-answer="${index}" onclick="selectAnswer(${index})">
            <div class="answer-letter">${String.fromCharCode(65 + index)}</div>
            <span>${answer.text}</span>
        </div>
    `).join('');
}

// Select an answer
function selectAnswer(answerIndex) {
    // Remove previous selection
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Mark selected answer
    document.querySelector(`[data-answer="${answerIndex}"]`).classList.add('selected');
    
    // Store answer and proceed after delay
    setTimeout(() => {
        storeAnswer(answerIndex);
        nextQuestion();
    }, 500);
}

// Store the user's answer
function storeAnswer(answerIndex) {
    const question = quizData[currentQuestionIndex];
    const answer = question[currentLanguage].answers[answerIndex];
    
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        answerIndex: answerIndex,
        traits: answer.traits
    });
}

// Move to next question or show results
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        showLoadingScreen();
        setTimeout(() => {
            calculateAndShowResult();
        }, 2000); // Show loading for 2 seconds
    }
}

// Show loading screen
function showLoadingScreen() {
    document.getElementById('quizScreen').classList.remove('active');
    document.getElementById('loadingScreen').classList.add('active');
}

// Calculate quiz result and show result screen
function calculateAndShowResult() {
    const result = calculateCharacterMatch();
    displayResult(result);
    
    // Hide loading screen, show result screen
    document.getElementById('loadingScreen').classList.remove('active');
    document.getElementById('resultScreen').classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Calculate which character the user matches
function calculateCharacterMatch() {
    const traitScores = {};
    
    // Initialize scores for all characters
    Object.keys(characters).forEach(characterId => {
        traitScores[characterId] = 0;
    });
    
    // Calculate scores based on user answers
    userAnswers.forEach(answer => {
        Object.keys(answer.traits).forEach(characterId => {
            if (traitScores.hasOwnProperty(characterId)) {
                traitScores[characterId] += answer.traits[characterId];
            }
        });
    });
    
    // Find the character with highest score
    let maxScore = -1;
    let matchedCharacter = 'kimDokja'; // default fallback
    
    Object.keys(traitScores).forEach(characterId => {
        if (traitScores[characterId] > maxScore) {
            maxScore = traitScores[characterId];
            matchedCharacter = characterId;
        }
    });
    
    // Calculate percentage match
    const totalPossibleScore = userAnswers.length * 3; // Assuming max trait score is 3
    const matchPercentage = Math.round((maxScore / totalPossibleScore) * 100);
    
    return {
        characterId: matchedCharacter,
        score: maxScore,
        percentage: Math.min(matchPercentage, 95), // Cap at 95% for realism
        allScores: traitScores
    };
}

// Display the quiz result
function displayResult(result) {
    const characterData = getCharacterData(result.characterId, currentLanguage);
    
    // Display character result
    const resultCharacter = document.getElementById('resultCharacter');
    resultCharacter.innerHTML = `
        <div class="result-avatar">${characterData.avatar}</div>
        <div class="result-character-name">${characterData.name}</div>
        <div class="result-character-trait">${characterData.shortTrait}</div>
        <div class="result-character-description">${characterData.description}</div>
        <div class="match-percentage">${result.percentage}% ${getTranslation('match', currentLanguage) || '일치'}</div>
    `;
    
    // Display detailed results
    const resultDetails = document.getElementById('resultDetails');
    resultDetails.innerHTML = `
        <div class="detail-section">
            <h3 class="detail-title">
                <i class="fas fa-user"></i>
                ${getTranslation('personalityTitle', currentLanguage)}
            </h3>
            <div class="detail-content">
                <ul>
                    ${characterData.personality.map(trait => `<li>${trait}</li>`).join('')}
                </ul>
                <div class="trait-list">
                    ${characterData.personality.slice(0, 4).map(trait => `<span class="trait-tag">${trait.split(' ')[0]}</span>`).join('')}
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <h3 class="detail-title">
                <i class="fas fa-star"></i>
                ${getTranslation('strengthsTitle', currentLanguage)}
            </h3>
            <div class="detail-content">
                <ul>
                    ${characterData.strengths.map(strength => `<li>${strength}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="detail-section">
            <h3 class="detail-title">
                <i class="fas fa-exclamation-triangle"></i>
                ${getTranslation('weaknessesTitle', currentLanguage)}
            </h3>
            <div class="detail-content">
                <ul>
                    ${characterData.weaknesses.map(weakness => `<li>${weakness}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="detail-section">
            <h3 class="detail-title">
                <i class="fas fa-heart"></i>
                ${getTranslation('relationshipsTitle', currentLanguage)}
            </h3>
            <div class="detail-content">
                <div class="compatibility-grid">
                    ${characterData.relationships.map(rel => `
                        <div class="compatibility-item">
                            <div class="compatibility-character">${rel.character}</div>
                            <div class="compatibility-description">${rel.description}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    // Store result for sharing
    window.currentResult = {
        character: characterData,
        percentage: result.percentage
    };
}

// Reset quiz to start over
function resetQuiz() {
    currentQuestionIndex = -1;
    userAnswers = [];
    quizStartTime = null;
    window.currentResult = null;
    
    // Show home screen
    document.getElementById('resultScreen').classList.remove('active');
    document.getElementById('homeScreen').classList.add('active');
    
    // Reset progress
    document.getElementById('progressFill').style.width = '0%';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Share result on social media
function shareResult() {
    if (!window.currentResult) return;
    
    const character = window.currentResult.character;
    const percentage = window.currentResult.percentage;
    const shareText = getTranslation('shareText', currentLanguage)
        .replace('{character}', character.name);
    const url = window.location.href;
    
    // Create share URLs
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(shareText)}`;
    
    // Show share options
    const shareModal = document.createElement('div');
    shareModal.className = 'share-modal';
    shareModal.innerHTML = `
        <div class="share-modal-content">
            <h3>${getTranslation('shareResult', currentLanguage) || '결과 공유하기'}</h3>
            <div class="share-buttons">
                <button onclick="window.open('${twitterUrl}', '_blank')" class="share-btn twitter">
                    <i class="fab fa-twitter"></i> Twitter
                </button>
                <button onclick="window.open('${facebookUrl}', '_blank')" class="share-btn facebook">
                    <i class="fab fa-facebook"></i> Facebook
                </button>
                <button onclick="copyToClipboard('${url}')" class="share-btn copy">
                    <i class="fas fa-copy"></i> ${getTranslation('copyLink', currentLanguage) || '링크 복사'}
                </button>
            </div>
            <button onclick="closeShareModal()" class="close-btn">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(shareModal);
    
    // Add styles for share modal
    if (!document.getElementById('shareModalStyles')) {
        const styles = document.createElement('style');
        styles.id = 'shareModalStyles';
        styles.textContent = `
            .share-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            }
            .share-modal-content {
                background: white;
                padding: 30px;
                border-radius: 20px;
                text-align: center;
                position: relative;
                max-width: 400px;
                width: 90%;
            }
            .share-buttons {
                display: flex;
                flex-direction: column;
                gap: 15px;
                margin-top: 20px;
            }
            .share-btn {
                padding: 15px;
                border: none;
                border-radius: 10px;
                font-size: 1.1em;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                transition: all 0.3s ease;
            }
            .share-btn.twitter { background: #1DA1F2; color: white; }
            .share-btn.facebook { background: #4267B2; color: white; }
            .share-btn.copy { background: #667eea; color: white; }
            .share-btn:hover { transform: translateY(-2px); }
            .close-btn {
                position: absolute;
                top: 10px;
                right: 15px;
                background: none;
                border: none;
                font-size: 1.5em;
                cursor: pointer;
                color: #999;
            }
        `;
        document.head.appendChild(styles);
    }
}

// Close share modal
function closeShareModal() {
    const modal = document.querySelector('.share-modal');
    if (modal) {
        modal.remove();
    }
}

// Copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert(getTranslation('linkCopied', currentLanguage) || '링크가 복사되었습니다!');
        closeShareModal();
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert(getTranslation('linkCopied', currentLanguage) || '링크가 복사되었습니다!');
        closeShareModal();
    });
}

// Initialize Google AdSense
function initializeAdSense() {
    try {
        // Initialize existing ads
        (adsbygoogle = window.adsbygoogle || []).push({});
        
        // Add click tracking for better ad performance
        document.addEventListener('click', function(e) {
            // Track user engagement for ad optimization
            if (typeof gtag !== 'undefined') {
                gtag('event', 'engagement', {
                    'event_category': 'User Interaction',
                    'event_label': e.target.tagName
                });
            }
        });
        
        // Refresh ads on language change for better targeting
        const originalChangeLanguage = changeLanguage;
        changeLanguage = function(lang) {
            originalChangeLanguage(lang);
            setTimeout(() => {
                refreshAds();
            }, 1000);
        };
        
    } catch (error) {
        console.warn('AdSense initialization failed:', error);
    }
}

// Refresh AdSense ads
function refreshAds() {
    try {
        // Only refresh if AdSense is loaded
        if (window.adsbygoogle) {
            (adsbygoogle = window.adsbygoogle || []).push({});
        }
    } catch (error) {
        console.warn('Ad refresh failed:', error);
    }
}

// Analytics and performance tracking
function trackQuizCompletion(characterResult) {
    try {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'quiz_completed', {
                'event_category': 'Quiz',
                'event_label': characterResult,
                'value': 1
            });
        }
        
        // Track time spent
        if (quizStartTime) {
            const timeSpent = Math.round((Date.now() - quizStartTime) / 1000);
            if (typeof gtag !== 'undefined') {
                gtag('event', 'quiz_time', {
                    'event_category': 'Engagement',
                    'value': timeSpent
                });
            }
        }
    } catch (error) {
        console.warn('Analytics tracking failed:', error);
    }
}

// SEO and meta tag updates
function updateMetaTags(characterResult) {
    if (characterResult) {
        const title = `${characterResult.name} - ${getTranslation('mainTitle', currentLanguage)}`;
        const description = `${getTranslation('resultPrefix', currentLanguage) || '당신은'} ${characterResult.name}${getTranslation('resultSuffix', currentLanguage) || '와 비슷한 성격입니다!'}`;
        
        document.title = title;
        
        // Update meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = description;
        }
        
        // Update Open Graph tags
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.content = title;
        }
        
        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.content = description;
        }
    }
}

// Error handling and fallbacks
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    
    // If there's a critical error during quiz, show fallback
    if (currentQuestionIndex >= 0) {
        const errorMsg = document.createElement('div');
        errorMsg.innerHTML = `
            <div style="text-align: center; padding: 20px; background: rgba(255, 0, 0, 0.1); border-radius: 10px; margin: 20px;">
                <p>${getTranslation('errorMessage', currentLanguage) || '오류가 발생했습니다. 페이지를 새로고침해주세요.'}</p>
                <button onclick="location.reload()" style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    ${getTranslation('reload', currentLanguage) || '새로고침'}
                </button>
            </div>
        `;
        document.querySelector('.container').appendChild(errorMsg);
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (currentQuestionIndex >= 0 && currentQuestionIndex < quizData.length) {
        // Allow keyboard selection of answers (1-4 keys)
        const keyNum = parseInt(e.key);
        if (keyNum >= 1 && keyNum <= 4) {
            const answerOption = document.querySelector(`[data-answer="${keyNum - 1}"]`);
            if (answerOption) {
                selectAnswer(keyNum - 1);
            }
        }
    }
});

// Mobile-specific optimizations
if ('ontouchstart' in window) {
    // Add touch-friendly interactions
    document.addEventListener('touchstart', function() {
        // Improve touch responsiveness
    });
    
    // Prevent zoom on double tap for answer buttons
    document.addEventListener('touchend', function(e) {
        if (e.target.closest('.answer-option')) {
            e.preventDefault();
        }
    });
}

// Progressive Web App features
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Register service worker for offline functionality if needed
        // navigator.serviceWorker.register('/sw.js');
    });
}
