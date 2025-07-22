// 메인 페이지 다국어 지원 스크립트

// 현재 언어 설정
let currentLanguage = 'ko';

// 번역 데이터
// translations.js의 window.translations를 사용하도록 변경


// 언어 변경 함수
function changeLanguage(lang) {
    if (!window.translations || !window.translations[lang]) {
        // 지원하지 않는 언어면 기본값(ko)로
        lang = 'ko';
    }
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    // <select> 값도 동기화
    const langSelect = document.getElementById('languageSelect');
    if (langSelect && langSelect.value !== lang) {
        langSelect.value = lang;
    }
    updatePageLanguage();
}

// 페이지 언어 업데이트
function updatePageLanguage() {
    const t = (window.translations && window.translations[currentLanguage]) ? window.translations[currentLanguage] : {};
    // data-translation-key가 있는 모든 요소를 일괄 업데이트 (빈 문자열도 허용)
    document.querySelectorAll('[data-translation-key]').forEach(el => {
        const key = el.getAttribute('data-translation-key');
        if (t.hasOwnProperty(key)) {
            // 테스트 카드 영역(.test-card) 및 버튼/뱃지/태그/스탯 등은 항상 innerHTML로 갱신 (아이콘 분리 방지)
            if (
                el.closest('.test-card') ||
                el.closest('.btn-test') ||
                el.classList.contains('btn-test') ||
                el.classList.contains('test-badge') ||
                el.classList.contains('tag') ||
                el.classList.contains('stat-label') ||
                el.classList.contains('test-title') ||
                el.classList.contains('test-description')
            ) {
                el.innerHTML = t[key];
            } else if (el.getAttribute('data-translation-key') === 'startTest') {
                el.innerHTML = t[key];
            } else if (el.tagName === 'SPAN' || el.tagName === 'P' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'H4') {
                el.textContent = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });
    // Hero 영역 번역 (각각의 data-translation-key로)
    const heroTitleText = document.querySelector('.hero-title-text[data-translation-key="heroTitle"]');
    if (heroTitleText && t.hasOwnProperty('heroTitle')) {
        heroTitleText.textContent = t.heroTitle;
    }
    const heroHighlight = document.querySelector('.highlight[data-translation-key="heroHighlight"]');
    if (heroHighlight && t.hasOwnProperty('heroHighlight')) {
        heroHighlight.textContent = t.heroHighlight;
    }
    const heroDesc = document.querySelector('.hero-description [data-translation-key="heroDescription"]');
    if (heroDesc && t.hasOwnProperty('heroDescription')) {
        // 줄바꿈(br) 포함된 번역 지원
        heroDesc.innerHTML = t.heroDescription;
    }
    // 버튼들 (아이콘 포함)
    const startBtn = document.querySelector('.btn-primary');
    if (startBtn && t.startTest !== undefined) startBtn.innerHTML = `<i class="fas fa-play"></i>${t.startTest}`;
    const learnBtn = document.querySelector('.btn-secondary');
    if (learnBtn && t.learnMore !== undefined) learnBtn.innerHTML = `<i class="fas fa-info-circle"></i>${t.learnMore}`;
    const ctaBtn = document.querySelector('.btn-cta');
    if (ctaBtn && t.freeTestStart !== undefined) ctaBtn.innerHTML = `<i class="fas fa-rocket"></i><span data-translation-key="freeTestStart">${t.freeTestStart}</span>`;
    // HTML lang 속성 업데이트
    document.documentElement.lang = currentLanguage;
    // 페이지 제목 업데이트
    document.title = `${t.siteTitle || '종합진단센터'} | 성격진단, 정치성향 진단 무료 테스트`;
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 저장된 언어 설정 불러오기
    const savedLanguage = localStorage.getItem('selectedLanguage');
    let initialLang = 'ko';
    if (savedLanguage && window.translations && window.translations[savedLanguage]) {
        initialLang = savedLanguage;
    }
    currentLanguage = initialLang;
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) langSelect.value = initialLang;
    updatePageLanguage();
    // 언어 선택 이벤트 연결 (중복 방지)
    if (langSelect) {
        langSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
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
