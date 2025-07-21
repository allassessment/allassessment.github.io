// Political parties data with detailed information
const PARTIES = {
    'ppp': {
        name: '국민의힘',
        fullName: '국민의힘 (People Power Party)',
        color: '#E31E24',
        description: '보수 정당으로 시장경제 우선, 강력한 안보, 규제 완화를 추구합니다.',
        detailedDescription: `국민의힘은 대한민국의 대표적인 보수 정당입니다. 자유민주주의와 시장경제를 기반으로 하며, 다음과 같은 정책 방향을 추구합니다:

• 경제 정책: 기업 규제 완화, 세금 감면, 자유시장 경제 활성화
• 외교·안보: 한미동맹 강화, 강력한 국방력 구축, 북한에 대한 압박 정책
• 사회 정책: 개인의 자유와 책임 강조, 능력주의 사회 구현
• 교육: 자율형 사립고 확대, 대학 입시 자율화
• 노동: 노동시장 유연성 확대, 기업 친화적 정책

보수적 가치관을 바탕으로 안정적인 국정 운영과 경제 성장을 중시하는 정당입니다.`,
        keyPolicies: ['규제완화', '감세정책', '한미동맹강화', '시장경제우선', '북한압박정책']
    },
    'dp': {
        name: '더불어민주당',
        fullName: '더불어민주당 (Democratic Party)',
        color: '#004EA2',
        description: '중도진보 정당으로 포용적 성장, 평등, 사회적 약자 보호를 중시합니다.',
        detailedDescription: `더불어민주당은 대한민국의 대표적인 중도진보 정당입니다. 사회민주주의적 가치를 추구하며, 다음과 같은 정책 방향을 추구합니다:

• 경제 정책: 소득주도성장, 최저임금 인상, 대기업 규제 강화
• 외교·안보: 평화적 남북관계, 한반도 비핵화를 통한 평화 정착
• 사회 정책: 사회적 약자 보호, 복지 확대, 성평등 사회 구현
• 교육: 공교육 강화, 대학 등록금 부담 완화, 교육 격차 해소
• 노동: 노동자 권익 보호, 비정규직 차별 해소, 일자리 창출

포용적 성장과 사회적 가치를 중시하며, 더 평등하고 공정한 사회를 만들어가고자 합니다.`,
        keyPolicies: ['소득주도성장', '복지확대', '평화외교', '노동자권익보호', '공교육강화']
    },
    'reform': {
        name: '개혁신당',
        fullName: '개혁신당 (Reform Party)',
        color: '#00A651',
        description: '중도 개혁 정당으로 합리적 보수와 실용적 진보의 균형을 추구합니다.',
        detailedDescription: `개혁신당은 기존 정치의 한계를 극복하고자 하는 중도 개혁 정당입니다. 합리적이고 실용적인 정치를 추구하며, 다음과 같은 정책 방향을 추구합니다:

• 경제 정책: 혁신 성장, 디지털 전환 가속화, 스타트업 생태계 조성
• 외교·안보: 실용적 외교, 균형적 대외관계, 평화를 통한 번영
• 사회 정책: 세대간 갈등 해소, 공정한 기회 제공, 사회 통합
• 교육: 미래 교육 혁신, 창의성과 인성 교육 강화
• 정치개혁: 정치 구조 개선, 투명성과 책임성 강화

기존 정치권의 이념 대립을 넘어서 실질적인 문제 해결에 집중하는 정당입니다.`,
        keyPolicies: ['정치개혁', '혁신성장', '디지털전환', '사회통합', '실용외교']
    },
    'rebuild': {
        name: '조국신당',
        fullName: '조국신당 (Rebuilding Korea Party)',
        color: '#FF6B35',
        description: '진보 정당으로 기득권 척결, 검찰개혁, 사회 정의 실현을 추구합니다.',
        detailedDescription: `조국신당은 기존 정치의 한계를 극복하고 진정한 개혁을 추구하는 진보 정당입니다. 사회 정의와 평등을 중시하며, 다음과 같은 정책 방향을 추구합니다:

• 사법개혁: 검찰 권력 견제, 사법부 민주화, 공정한 법 집행
• 경제 정책: 부의 재분배, 대기업 특혜 철폐, 서민 경제 활성화
• 사회 정책: 기득권 척결, 특권 해체, 평등한 기회 보장
• 교육: 교육 불평등 해소, 공정한 입시제도, 사교육비 경감
• 정치개혁: 기득권 정치 타파, 민주주의 발전, 시민 참여 확대

기존 체제의 근본적 변화를 통해 더 공정하고 정의로운 사회를 만들어가고자 합니다.`,
        keyPolicies: ['검찰개혁', '기득권척결', '사법개혁', '부의재분배', '특권해체']
    },
    'progressive': {
        name: '진보당',
        fullName: '진보당 (Progressive Party)',
        color: '#8B4513',
        description: '사회주의적 가치를 추구하며 노동자, 서민의 권익 보호에 중점을 둡니다.',
        detailedDescription: `진보당은 사회주의적 가치를 바탕으로 노동자와 서민의 권익을 대변하는 진보 정당입니다. 근본적인 사회 변혁을 추구하며, 다음과 같은 정책 방향을 추구합니다:

• 경제 정책: 공공부문 확대, 재벌 해체, 노동자 중심 경제 구조
• 사회 정책: 무상 의료·교육, 전면적 복지국가 건설, 계급 타파
• 노동: 노동자 경영 참여, 노조 권리 확대, 비정규직 철폐
• 외교·안보: 평화 통일, 자주적 외교, 미군 철수
• 정치: 직접 민주주의 확대, 시민 자치 강화

자본주의 체제의 근본적 한계를 지적하며, 보다 평등하고 민주적인 사회 체제를 추구합니다.`,
        keyPolicies: ['공공부문확대', '무상복지', '노동자권익', '평화통일', '직접민주주의']
    }
};

// Policy categories for better organization
const POLICY_CATEGORIES = {
    'economy': '경제 정책',
    'welfare': '복지·사회',
    'foreign': '외교·안보',
    'education': '교육',
    'justice': '사법·정치',
    'environment': '환경·에너지',
    'labor': '노동',
    'social': '사회 이슈'
};

// Survey questions with party alignments
// Each question has an 'agree' array with parties that would agree with the statement
const SURVEY_QUESTIONS = [
    {
        id: 1,
        category: 'economy',
        question: '기업 규제를 완화하여 경제 활성화를 도모해야 한다',
        description: '기업의 사업 활동에 대한 각종 규제를 줄여서 투자와 고용을 늘리고 경제 성장을 촉진해야 한다는 정책입니다.',
        agree: ['ppp', 'reform']
    },
    {
        id: 2,
        category: 'welfare',
        question: '기본소득제를 도입하여 모든 국민에게 일정 금액을 지급해야 한다',
        description: '취업 여부와 관계없이 모든 국민에게 기본적인 생활비를 국가에서 지급하는 제도입니다.',
        agree: ['progressive', 'rebuild']
    },
    {
        id: 3,
        category: 'foreign',
        question: '한미동맹을 더욱 강화하고 미군 주둔을 확대해야 한다',
        description: '북한과 중국의 위협에 대응하기 위해 미국과의 군사동맹을 강화하고 주한미군 규모를 늘려야 한다는 정책입니다.',
        agree: ['ppp']
    },
    {
        id: 4,
        category: 'education',
        question: '대학 등록금을 국가에서 전액 지원해야 한다',
        description: '고등교육의 공공성을 확대하여 대학교육 비용을 국가가 부담하는 무상 대학교육 정책입니다.',
        agree: ['progressive', 'rebuild']
    },
    {
        id: 5,
        category: 'justice',
        question: '검찰의 수사권을 대폭 축소하고 경찰로 이관해야 한다',
        description: '검찰의 권력 집중을 막고 수사기관 간 견제와 균형을 위해 검찰의 수사권한을 제한하는 정책입니다.',
        agree: ['dp', 'rebuild', 'progressive']
    },
    {
        id: 6,
        category: 'economy',
        question: '대기업에 대한 규제를 강화하고 과징금을 늘려야 한다',
        description: '재벌 대기업의 독과점 행위를 견제하고 공정한 시장경제를 위해 규제와 처벌을 강화하는 정책입니다.',
        agree: ['dp', 'rebuild', 'progressive']
    },
    {
        id: 7,
        category: 'welfare',
        question: '최저임금을 대폭 인상하여 생활임금 수준으로 올려야 한다',
        description: '노동자들의 기본적인 생활을 보장하기 위해 최저임금을 현재보다 크게 인상하는 정책입니다.',
        agree: ['dp', 'rebuild', 'progressive']
    },
    {
        id: 8,
        category: 'foreign',
        question: '북한과의 대화와 협력을 통해 평화적 해결을 추구해야 한다',
        description: '군사적 대결보다는 대화와 경제협력을 통해 북한 문제를 평화적으로 해결하려는 정책입니다.',
        agree: ['dp', 'progressive']
    },
    {
        id: 9,
        category: 'economy',
        question: '법인세와 종합소득세 최고세율을 인상해야 한다',
        description: '소득 재분배와 복지 재원 마련을 위해 고소득층과 대기업에 대한 세금을 더 많이 걷는 정책입니다.',
        agree: ['dp', 'rebuild', 'progressive']
    },
    {
        id: 10,
        category: 'labor',
        question: '주 4일 근무제를 도입하여 근로시간을 단축해야 한다',
        description: '일과 삶의 균형을 위해 현재 주 5일에서 주 4일 근무로 근로시간을 줄이는 정책입니다.',
        agree: ['progressive', 'rebuild']
    },
    {
        id: 11,
        category: 'justice',
        question: '국정원의 대공수사권을 완전히 폐지해야 한다',
        description: '국가정보원의 국내 정치 개입을 막기 위해 대공 관련 수사권한을 모두 없애는 정책입니다.',
        agree: ['rebuild', 'progressive']
    },
    {
        id: 12,
        category: 'environment',
        question: '원전을 단계적으로 폐쇄하고 재생에너지로 전환해야 한다',
        description: '원자력 발전의 안전 문제를 고려하여 태양광, 풍력 등 친환경 에너지로 전환하는 정책입니다.',
        agree: ['dp', 'progressive']
    },
    {
        id: 13,
        category: 'economy',
        question: '부동산 보유세를 대폭 인상하여 집값 안정화를 도모해야 한다',
        description: '부동산 투기를 억제하고 집값을 안정시키기 위해 종합부동산세 등 보유세를 크게 올리는 정책입니다.',
        agree: ['dp', 'rebuild', 'progressive']
    },
    {
        id: 14,
        category: 'social',
        question: '동성 결혼을 법적으로 인정하고 보장해야 한다',
        description: '성소수자의 인권 보장을 위해 동성 커플의 결혼을 법적으로 인정하고 이성 부부와 동등한 권리를 주는 정책입니다.',
        agree: ['dp', 'rebuild', 'progressive']
    },
    {
        id: 15,
        category: 'education',
        question: '자율형 사립고와 특목고를 일반고로 전환해야 한다',
        description: '교육 불평등 해소를 위해 특별한 고등학교들을 일반 고등학교로 바꾸어 공교육을 강화하는 정책입니다.',
        agree: ['dp', 'rebuild', 'progressive']
    },
    {
        id: 16,
        category: 'economy',
        question: '기업의 해고 요건을 완화하여 고용 유연성을 높여야 한다',
        description: '경제 상황 변화에 따라 기업이 더 쉽게 인력을 조정할 수 있도록 해고 규제를 완화하는 정책입니다.',
        agree: ['ppp', 'reform']
    },
    {
        id: 17,
        category: 'welfare',
        question: '국민연금을 국가가 직접 운영하는 완전 공적연금으로 확대해야 한다',
        description: '노후 보장을 강화하기 위해 사적연금보다 국가가 책임지는 공적연금 역할을 대폭 늘리는 정책입니다.',
        agree: ['dp', 'rebuild', 'progressive']
    },
    {
        id: 18,
        category: 'foreign',
        question: '중국과의 경제협력을 확대하고 관계를 개선해야 한다',
        description: '경제적 실익을 위해 우리나라 최대 교역국인 중국과의 관계를 더욱 발전시켜야 한다는 정책입니다.',
        agree: ['dp', 'progressive']
    },
    {
        id: 19,
        category: 'justice',
        question: '사법부에 대한 국민 참여를 확대하여 민주적 통제를 강화해야 한다',
        description: '판사들의 독립성을 유지하면서도 사법부가 국민의 뜻에 더 부응하도록 국민 참여 제도를 확대하는 정책입니다.',
        agree: ['rebuild', 'progressive']
    },
    {
        id: 20,
        category: 'labor',
        question: '노동조합 가입을 촉진하고 단결권을 강화해야 한다',
        description: '노동자들의 권익 보호를 위해 노조 설립과 활동을 더 쉽게 하고 단체행동권을 보장하는 정책입니다.',
        agree: ['dp', 'rebuild', 'progressive']
    },
    {
        id: 21,
        category: 'economy',
        question: '금융투자소득세를 도입하여 자본이득에 과세해야 한다',
        description: '주식, 채권 등 금융투자로 얻은 소득에 대해서도 세금을 부과하여 조세 형평성을 높이는 정책입니다.',
        agree: ['dp', 'rebuild', 'progressive']
    },
    {
        id: 22,
        category: 'environment',
        question: '탄소중립을 위해 탄소세를 신설하고 환경규제를 강화해야 한다',
        description: '기후변화 대응을 위해 탄소 배출에 세금을 부과하고 기업의 환경 의무를 강화하는 정책입니다.',
        agree: ['dp', 'reform', 'progressive']
    },
    {
        id: 23,
        category: 'foreign',
        question: '한일관계 개선을 위해 역사 문제보다 실용적 협력을 우선해야 한다',
        description: '과거사 갈등을 일단 유보하고 경제, 안보 등 현실적 이익을 위해 일본과의 관계를 개선하는 정책입니다.',
        agree: ['ppp', 'reform']
    },
    {
        id: 24,
        category: 'education',
        question: '교육 예산을 GDP 대비 6% 이상으로 대폭 증액해야 한다',
        description: 'OECD 평균 수준을 넘어서는 교육 투자를 통해 공교육의 질을 높이고 교육 격차를 해소하는 정책입니다.',
        agree: ['dp', 'rebuild', 'progressive']
    },
    {
        id: 25,
        category: 'social',
        question: '낙태죄를 완전히 폐지하고 여성의 선택권을 보장해야 한다',
        description: '여성의 자기결정권을 존중하여 임신중절에 대한 모든 형사처벌을 없애고 의료적 지원을 확대하는 정책입니다.',
        agree: ['dp', 'rebuild', 'progressive']
    },
    {
        id: 26,
        category: 'justice',
        question: '국회의원 특권을 대폭 축소하고 국정감사 권한을 강화해야 한다',
        description: '정치권의 특권을 줄이고 국정 감시 기능을 강화하여 정치의 투명성과 책임성을 높이는 정책입니다.',
        agree: ['reform', 'rebuild', 'progressive']
    },
    {
        id: 27,
        category: 'economy',
        question: '공공부문 일자리를 대폭 확대하여 국가가 직접 고용을 늘려야 한다',
        description: '민간 부문의 고용 한계를 극복하기 위해 공무원, 공기업 등 공공 부문에서 더 많은 일자리를 만드는 정책입니다.',
        agree: ['dp', 'rebuild', 'progressive']
    },
    {
        id: 28,
        category: 'welfare',
        question: '의료 민영화를 허용하여 의료 서비스 경쟁을 활성화해야 한다',
        description: '의료기관 간 경쟁을 통해 의료 서비스의 질을 높이고 효율성을 개선하기 위해 영리병원을 허용하는 정책입니다.',
        agree: ['ppp']
    },
    {
        id: 29,
        category: 'foreign',
        question: '한반도 평화를 위해 종전선언과 평화협정을 추진해야 한다',
        description: '북한과의 군사적 긴장을 완화하고 항구적 평화를 위해 정전협정을 평화협정으로 전환하는 정책입니다.',
        agree: ['dp', 'progressive']
    },
    {
        id: 30,
        category: 'labor',
        question: '플랫폼 노동자들에게도 노동자 지위와 권리를 보장해야 한다',
        description: '배달, 대리운전 등 플랫폼을 통해 일하는 사람들도 일반 노동자와 같은 권리와 보호를 받도록 하는 정책입니다.',
        agree: ['dp', 'rebuild', 'progressive']
    }
];

// Policy area scoring weights for more detailed analysis
const POLICY_WEIGHTS = {
    'economy': {
        'ppp': 0.9,
        'dp': 0.7,
        'reform': 0.8,
        'rebuild': 0.6,
        'progressive': 0.5
    },
    'welfare': {
        'ppp': 0.4,
        'dp': 0.8,
        'reform': 0.6,
        'rebuild': 0.9,
        'progressive': 1.0
    },
    'foreign': {
        'ppp': 0.9,
        'dp': 0.6,
        'reform': 0.7,
        'rebuild': 0.5,
        'progressive': 0.4
    },
    'education': {
        'ppp': 0.5,
        'dp': 0.8,
        'reform': 0.7,
        'rebuild': 0.9,
        'progressive': 1.0
    },
    'justice': {
        'ppp': 0.4,
        'dp': 0.7,
        'reform': 0.8,
        'rebuild': 1.0,
        'progressive': 0.9
    },
    'environment': {
        'ppp': 0.5,
        'dp': 0.8,
        'reform': 0.9,
        'rebuild': 0.7,
        'progressive': 1.0
    },
    'labor': {
        'ppp': 0.3,
        'dp': 0.8,
        'reform': 0.6,
        'rebuild': 0.9,
        'progressive': 1.0
    },
    'social': {
        'ppp': 0.3,
        'dp': 0.8,
        'reform': 0.7,
        'rebuild': 0.9,
        'progressive': 1.0
    }
};
