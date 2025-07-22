// 메인 페이지 다국어 지원 스크립트

// 현재 언어 설정
let currentLanguage = 'ko';

// 번역 데이터
const translations = {
    ko: {
        siteTitle: '종합진단센터',
        heroTitle: '나를 더 잘 알아가는',
        heroHighlight: '종합진단 테스트',
        heroDescription: '과학적이고 재미있는 진단으로 나의 성격과 성향을 분석해보세요.<br>무료로 제공되는 다양한 진단 테스트를 통해 자신을 더 깊이 이해할 수 있습니다.',
        startTest: '테스트 시작하기',
        learnMore: '더 알아보기',
        whyChoose: '왜 우리 종합진단센터를 선택해야 할까요?',
        scientificBasis: '과학적 근거와 재미를 모두 갖춘 진단 테스트',
        popularTests: '인기 진단 테스트',
        mostPopular: '가장 많이 찾는 종합진단 테스트를 만나보세요',
        aboutTitle: '종합진단센터란?',
        aboutDescription: '우리는 개인의 성격, 성향, 가치관을 더 깊이 이해할 수 있도록 돕는 온라인 종합진단 플랫폼입니다.',
        startNow: '지금 바로 시작해보세요!',
        startDescription: '나를 더 잘 이해하는 첫걸음, 종합진단 테스트로 시작하세요.',
        freeTestStart: '무료 테스트 시작',
        // Feature cards
        accurateAnalysis: '정확한 분석',
        accurateDesc: '심리학적 이론을 바탕으로 한 정확하고 신뢰할 수 있는 진단 결과',
        mobileOptimized: '모바일 최적화',
        mobileDesc: '언제 어디서나 편리하게 이용할 수 있는 반응형 웹 디자인',
        multiLanguage: '다국어 지원',
        multiLanguageDesc: '한국어, 영어, 일본어, 중국어, 러시아어 등 5개 언어로 진단 가능',
        funExperience: '재미있는 경험',
        funDesc: '지루하지 않고 흥미진진한 테스트로 즐거운 자기탐구 시간',
        privacyProtection: '개인정보 보호',
        privacyDesc: '개인정보 수집 없이 안전하게 이용할 수 있는 익명 테스트'
    },
    en: {
        siteTitle: 'Total Diagnosis Center',
        heroTitle: 'Get to know yourself better with',
        heroHighlight: 'Comprehensive Diagnostic Tests',
        heroDescription: 'Analyze your personality and tendencies with scientific and fun diagnostics.<br>Understand yourself more deeply through various free diagnostic tests.',
        startTest: 'Start Test',
        learnMore: 'Learn More',
        whyChoose: 'Why choose our Total Diagnosis Center?',
        scientificBasis: 'Diagnostic tests with both scientific basis and fun',
        popularTests: 'Popular Diagnostic Tests',
        mostPopular: 'Meet the most popular comprehensive diagnostic tests',
        aboutTitle: 'What is Total Diagnosis Center?',
        aboutDescription: 'We are an online comprehensive diagnostic platform that helps you understand your personality, tendencies, and values more deeply.',
        startNow: 'Start right now!',
        startDescription: 'The first step to understanding yourself better, start with comprehensive diagnostic tests.',
        freeTestStart: 'Start Free Test',
        // Feature cards
        accurateAnalysis: 'Accurate Analysis',
        accurateDesc: 'Reliable diagnostic results based on psychological theories',
        mobileOptimized: 'Mobile Optimized',
        mobileDesc: 'Responsive web design for convenient use anytime, anywhere',
        multiLanguage: 'Multi-language Support',
        multiLanguageDesc: 'Available in 5 languages: Korean, English, Japanese, Chinese, Russian',
        funExperience: 'Fun Experience',
        funDesc: 'Enjoyable self-exploration time with engaging and interesting tests',
        privacyProtection: 'Privacy Protection',
        privacyDesc: 'Safe anonymous tests without personal information collection'
    },
    ja: {
        siteTitle: '総合診断センター',
        heroTitle: '自分をもっとよく知る',
        heroHighlight: '総合診断テスト',
        heroDescription: '科学的で楽しい診断で自分の性格や傾向を分析してみましょう。<br>無料で提供される様々な診断テストを通じて自分をより深く理解できます。',
        startTest: 'テスト開始',
        learnMore: 'もっと見る',
        whyChoose: 'なぜ私たちの総合診断センターを選ぶべきでしょうか？',
        scientificBasis: '科学的根拠と楽しさを兼ね備えた診断テスト',
        popularTests: '人気診断テスト',
        mostPopular: '最も人気の総合診断テストに出会いましょう',
        aboutTitle: '総合診断センターとは？',
        aboutDescription: '私たちは個人の性格、傾向、価値観をより深く理解できるように支援するオンライン総合診断プラットフォームです。',
        startNow: '今すぐ始めましょう！',
        startDescription: '自分をよりよく理解する第一歩、総合診断テストから始めましょう。',
        freeTestStart: '無料テスト開始'
    },
    zh: {
        siteTitle: '综合诊断中心',
        heroTitle: '更好地了解自己',
        heroHighlight: '综合诊断测试',
        heroDescription: '通过科学有趣的诊断分析您的性格和倾向。<br>通过免费提供的各种诊断测试更深入地了解自己。',
        startTest: '开始测试',
        learnMore: '了解更多',
        whyChoose: '为什么选择我们的综合诊断中心？',
        scientificBasis: '兼具科学依据和趣味性的诊断测试',
        popularTests: '热门诊断测试',
        mostPopular: '体验最受欢迎的综合诊断测试',
        aboutTitle: '什么是综合诊断中心？',
        aboutDescription: '我们是帮助您更深入了解个人性格、倾向和价值观的在线综合诊断平台。',
        startNow: '立即开始！',
        startDescription: '更好地了解自己的第一步，从综合诊断测试开始。',
        freeTestStart: '开始免费测试'
    },
    ru: {
        siteTitle: 'Центр Комплексной Диагностики',
        heroTitle: 'Лучше узнайте себя с помощью',
        heroHighlight: 'Комплексных Диагностических Тестов',
        heroDescription: 'Анализируйте свою личность и склонности с помощью научных и увлекательных диагностик.<br>Понимайте себя глубже через различные бесплатные диагностические тесты.',
        startTest: 'Начать Тест',
        learnMore: 'Узнать Больше',
        whyChoose: 'Почему стоит выбрать наш Центр Комплексной Диагностики?',
        scientificBasis: 'Диагностические тесты с научной основой и развлекательным элементом',
        popularTests: 'Популярные Диагностические Тесты',
        mostPopular: 'Познакомьтесь с самыми популярными комплексными диагностическими тестами',
        aboutTitle: 'Что такое Центр Комплексной Диагностики?',
        aboutDescription: 'Мы онлайн-платформа комплексной диагностики, которая помогает вам глубже понять свою личность, склонности и ценности.',
        startNow: 'Начните прямо сейчас!',
        startDescription: 'Первый шаг к лучшему пониманию себя - начните с комплексных диагностических тестов.',
        freeTestStart: 'Начать Бесплатный Тест'
    }
};

// 언어 변경 함수
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    updatePageLanguage();
}

// 페이지 언어 업데이트
function updatePageLanguage() {
    const t = translations[currentLanguage];
    
    // 제목 업데이트
    document.querySelector('.brand-logo span').textContent = t.siteTitle;
    document.querySelector('.hero-title').innerHTML = `${t.heroTitle}<br><span class="highlight">${t.heroHighlight}</span>`;
    document.querySelector('.hero-description').innerHTML = t.heroDescription;
    
    // 버튼 텍스트 업데이트
    const startBtn = document.querySelector('.btn-primary');
    if (startBtn) startBtn.innerHTML = `<i class="fas fa-play"></i>${t.startTest}`;
    
    const learnBtn = document.querySelector('.btn-secondary');
    if (learnBtn) learnBtn.innerHTML = `<i class="fas fa-info-circle"></i>${t.learnMore}`;
    
    // 섹션 제목 업데이트
    const whyChooseTitle = document.querySelector('.features .section-header h2');
    if (whyChooseTitle) whyChooseTitle.textContent = t.whyChoose;
    
    const whyChooseDesc = document.querySelector('.features .section-header p');
    if (whyChooseDesc) whyChooseDesc.textContent = t.scientificBasis;
    
    // Feature cards 업데이트
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length >= 5) {
        featureCards[0].querySelector('h3').textContent = t.accurateAnalysis;
        featureCards[0].querySelector('p').textContent = t.accurateDesc;
        
        featureCards[1].querySelector('h3').textContent = t.mobileOptimized;
        featureCards[1].querySelector('p').textContent = t.mobileDesc;
        
        featureCards[2].querySelector('h3').textContent = t.multiLanguage;
        featureCards[2].querySelector('p').textContent = t.multiLanguageDesc;
        
        featureCards[3].querySelector('h3').textContent = t.funExperience;
        featureCards[3].querySelector('p').textContent = t.funDesc;
        
        featureCards[4].querySelector('h3').textContent = t.privacyProtection;
        featureCards[4].querySelector('p').textContent = t.privacyDesc;
    }
    
    const testsTitle = document.querySelector('.tests .section-header h2');
    if (testsTitle) testsTitle.textContent = t.popularTests;
    
    const testsDesc = document.querySelector('.tests .section-header p');
    if (testsDesc) testsDesc.textContent = t.mostPopular;
    
    const aboutTitle = document.querySelector('.about h2');
    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
    
    const aboutDesc = document.querySelector('.about p');
    if (aboutDesc) aboutDesc.textContent = t.aboutDescription;
    
    const ctaTitle = document.querySelector('.cta h2');
    if (ctaTitle) ctaTitle.textContent = t.startNow;
    
    const ctaDesc = document.querySelector('.cta p');
    if (ctaDesc) ctaDesc.textContent = t.startDescription;
    
    const ctaBtn = document.querySelector('.btn-cta');
    if (ctaBtn) ctaBtn.innerHTML = `<i class="fas fa-rocket"></i>${t.freeTestStart}`;
    
    // 푸터 브랜드 업데이트
    const footerBrand = document.querySelector('.footer-brand span');
    if (footerBrand) footerBrand.textContent = t.siteTitle;
    
    // HTML lang 속성 업데이트
    document.documentElement.lang = currentLanguage;
    
    // 페이지 제목 업데이트
    document.title = `${t.siteTitle} | 성격진단, 정치성향 진단 무료 테스트`;
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 저장된 언어 설정 불러오기
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
        document.getElementById('languageSelect').value = savedLanguage;
    }
    
    // 언어 적용
    updatePageLanguage();
    
    // 부드러운 스크롤 구현
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// 모바일 메뉴 토글 (필요시 구현)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}
