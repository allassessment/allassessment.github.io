// Multi-language translations for the ORV personality quiz
const translations = {
    ko: {
        // Main Interface
        mainTitle: "전지적 독자시점 성격 진단",
        subtitle: "당신과 가장 비슷한 캐릭터는 누구일까요?",
        questionCount: "20개의 질문",
        timeEstimate: "약 5분 소요",
        characterCount: "8명의 캐릭터",
        startBtnText: "진단 시작하기",
        charactersTitle: "등장 캐릭터",
        
        // Quiz Interface
        questionPrefix: "질문",
        progressOf: "/",
        
        // Result Interface
        resultTitle: "당신의 결과",
        shareBtnText: "사이트 공유하기",
        retakeBtnText: "다시 진단하기",
        loadingText: "결과를 분석중입니다...",
        
        // Result Sections
        personalityTitle: "성격 특성",
        strengthsTitle: "장점",
        weaknessesTitle: "단점",
        relationshipsTitle: "다른 캐릭터와의 관계",
        
        // Share Text
        shareText: "나는 전지적 독자시점의 {character}와 비슷한 성격이에요! 당신도 진단해보세요:",
        
        // Character Names
        kimDokja: "김독자",
        yooJoonghyuk: "유중혁",
        hanSooyoung: "한수영",
        yooSangah: "유상아",
        jungHeewon: "정희원",
        leeHyunsung: "이현성",
        leeGilyoung: "이길영",
        shinYoosung: "신유성"
    },
    
    en: {
        // Main Interface
        mainTitle: "Omniscient Reader's Viewpoint Personality Quiz",
        subtitle: "Which character is most similar to you?",
        questionCount: "20 Questions",
        timeEstimate: "About 5 minutes",
        characterCount: "8 Characters",
        startBtnText: "Start Quiz",
        charactersTitle: "Featured Characters",
        
        // Quiz Interface
        questionPrefix: "Question",
        progressOf: " / ",
        
        // Result Interface
        resultTitle: "Your Result",
        shareBtnText: "Share Site",
        retakeBtnText: "Retake Quiz",
        loadingText: "Analyzing your result...",
        
        // Result Sections
        personalityTitle: "Personality Traits",
        strengthsTitle: "Strengths",
        weaknessesTitle: "Weaknesses",
        relationshipsTitle: "Relationships with Other Characters",
        
        // Share Text
        shareText: "I'm similar to {character} from Omniscient Reader's Viewpoint! Take the quiz yourself:",
        
        // Character Names
        kimDokja: "Kim Dokja",
        yooJoonghyuk: "Yoo Joonghyuk",
        hanSooyoung: "Han Sooyoung",
        yooSangah: "Yoo Sangah",
        jungHeewon: "Jung Heewon",
        leeHyunsung: "Lee Hyunsung",
        leeGilyoung: "Lee Gilyoung",
        shinYoosung: "Shin Yoosung"
    },
    
    ja: {
        // Main Interface
        mainTitle: "全知読者視点 性格診断",
        subtitle: "あなたに最も似ているキャラクターは誰でしょう？",
        questionCount: "20の質問",
        timeEstimate: "約5分",
        characterCount: "8人のキャラクター",
        startBtnText: "診断開始",
        charactersTitle: "登場キャラクター",
        
        // Quiz Interface
        questionPrefix: "質問",
        progressOf: " / ",
        
        // Result Interface
        resultTitle: "あなたの結果",
        shareBtnText: "サイトをシェア",
        retakeBtnText: "再診断",
        loadingText: "結果を分析中です...",
        
        // Result Sections
        personalityTitle: "性格特性",
        strengthsTitle: "長所",
        weaknessesTitle: "短所",
        relationshipsTitle: "他のキャラクターとの関係",
        
        // Share Text
        shareText: "私は全知読者視点の{character}と似た性格です！あなたも診断してみてください：",
        
        // Character Names
        kimDokja: "キム・ドクジャ",
        yooJoonghyuk: "ユ・ジュンヒョク",
        hanSooyoung: "ハン・スヨン",
        yooSangah: "ユ・サンア",
        jungHeewon: "チョン・ヒウォン",
        leeHyunsung: "イ・ヒョンソン",
        leeGilyoung: "イ・ギリョン",
        shinYoosung: "シン・ユソン"
    },
    
    zh: {
        // Main Interface
        mainTitle: "全知读者视角 性格诊断",
        subtitle: "哪个角色与你最相似？",
        questionCount: "20个问题",
        timeEstimate: "约5分钟",
        characterCount: "8个角色",
        startBtnText: "开始诊断",
        charactersTitle: "登场角色",
        
        // Quiz Interface
        questionPrefix: "问题",
        progressOf: " / ",
        
        // Result Interface
        resultTitle: "你的结果",
        shareBtnText: "分享网站",
        retakeBtnText: "重新诊断",
        loadingText: "正在分析结果...",
        
        // Result Sections
        personalityTitle: "性格特征",
        strengthsTitle: "优点",
        weaknessesTitle: "缺点",
        relationshipsTitle: "与其他角色的关系",
        
        // Share Text
        shareText: "我和全知读者视角的{character}性格相似！你也来测试看看：",
        
        // Character Names
        kimDokja: "金独子",
        yooJoonghyuk: "刘中赫",
        hanSooyoung: "韩秀英",
        yooSangah: "刘尚雅",
        jungHeewon: "郑熙媛",
        leeHyunsung: "李贤成",
        leeGilyoung: "李吉永",
        shinYoosung: "申有星"
    }
};

// Function to get translation
function getTranslation(key, lang = 'ko') {
    return translations[lang] && translations[lang][key] ? translations[lang][key] : translations.ko[key] || key;
}

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    updateUILanguage();
}

// Function to update UI language
function updateUILanguage() {
    // Update all translatable elements
    const elements = {
        'mainTitle': 'mainTitle',
        'subtitle': 'subtitle',
        'questionCount': 'questionCount',
        'timeEstimate': 'timeEstimate',
        'characterCount': 'characterCount',
        'startBtnText': 'startBtnText',
        'charactersTitle': 'charactersTitle',
        'resultTitle': 'resultTitle',
        'shareBtnText': 'shareBtnText',
        'retakeBtnText': 'retakeBtnText',
        'loadingText': 'loadingText'
    };
    
    Object.keys(elements).forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = getTranslation(elements[elementId], currentLanguage);
        }
    });
    
    // Update document language
    document.documentElement.lang = currentLanguage;
    
    // Update meta tags
    const title = getTranslation('mainTitle', currentLanguage);
    document.title = title;
    
    // Update character preview if visible
    if (document.getElementById('characterGrid').innerHTML) {
        displayCharacterPreview();
    }
    
    // Update quiz if in progress
    if (currentQuestionIndex >= 0 && currentQuestionIndex < quizData.length) {
        displayQuestion(currentQuestionIndex);
    }
}
