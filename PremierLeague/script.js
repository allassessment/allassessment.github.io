// Language translations
const translations = {
    ko: {
        mainTitle: "나에게 맞는 프리미어 축구팀은?",
        subtitle: "성향 분석을 통해 당신에게 완벽한 프리미어리그 팀을 찾아보세요!",
        homeText: "종합진단센터",
        curiosityText1: "당신의 축구 DNA는 무엇일까요?",
        curiosityText2: "맨시티 vs 맨유, 어느 쪽에 가까울까요?",
        curiosityText3: "20개 질문으로 밝혀지는 나만의 팀!",
        startButtonText: "테스트 시작하기",
        nextButton: "다음",
        restartButton: "다시 하기",
        resultTitle: "당신의 팀은...",
        chartTitle: "성향 분석 결과",
        statsTitle: "팀 정보",
        shareTitle: "결과 공유하기",
        copySuccess: "링크가 복사되었습니다!",
        questions: [
            {
                text: "축구를 볼 때 가장 중요하게 생각하는 것은?",
                options: [
                    { text: "화려한 공격과 많은 골", teams: { man_city: 3, liverpool: 3, arsenal: 2, chelsea: 2 } },
                    { text: "견고한 수비와 전술적 완성도", teams: { man_united: 3, tottenham: 2, newcastle: 2, brighton: 2 } },
                    { text: "팀워크와 조직력", teams: { brighton: 3, brentford: 3, fulham: 2, crystal_palace: 2 } },
                    { text: "개인 기량과 스타 플레이어", teams: { man_city: 2, chelsea: 3, arsenal: 2, aston_villa: 2 } }
                ]
            },
            {
                text: "당신이 선호하는 축구 스타일은?",
                options: [
                    { text: "빠른 역습과 카운터 어택", teams: { liverpool: 3, tottenham: 3, west_ham: 2, wolves: 2 } },
                    { text: "점유율 기반 티키타카", teams: { man_city: 3, brighton: 2, arsenal: 2, chelsea: 2 } },
                    { text: "물리적이고 강한 플레이", teams: { newcastle: 3, west_ham: 3, burnley: 2, crystal_palace: 2 } },
                    { text: "창의적이고 예술적인 플레이", teams: { arsenal: 3, aston_villa: 2, fulham: 2, brentford: 2 } }
                ]
            },
            {
                text: "다음 중 가장 좋아하는 선수 유형은?",
                options: [
                    { text: "골 결정력이 뛰어난 스트라이커", teams: { man_city: 3, liverpool: 2, arsenal: 2, tottenham: 2 } },
                    { text: "창의적인 플레이메이커", teams: { man_city: 2, arsenal: 3, chelsea: 2, aston_villa: 2 } },
                    { text: "강력한 수비수", teams: { man_united: 3, liverpool: 2, newcastle: 2, crystal_palace: 2 } },
                    { text: "만능 미드필더", teams: { liverpool: 3, tottenham: 2, west_ham: 2, brighton: 2 } }
                ]
            },
            {
                text: "팀의 역사와 전통을 얼마나 중요시하나요?",
                options: [
                    { text: "매우 중요하다 - 명문 클럽을 선호", teams: { man_united: 3, liverpool: 3, arsenal: 3, chelsea: 2 } },
                    { text: "어느 정도 중요하다", teams: { tottenham: 2, newcastle: 2, aston_villa: 2, west_ham: 2 } },
                    { text: "별로 중요하지 않다", teams: { man_city: 2, brighton: 2, brentford: 2, fulham: 2 } },
                    { text: "전혀 중요하지 않다 - 현재가 더 중요", teams: { man_city: 3, brighton: 3, brentford: 3, crystal_palace: 2 } }
                ]
            },
            {
                text: "경기에서 승부차기 상황이 되었을 때 당신의 심정은?",
                options: [
                    { text: "긴장되지만 믿고 기다린다", teams: { man_city: 2, liverpool: 2, arsenal: 2, chelsea: 2 } },
                    { text: "매우 흥미진진하다", teams: { tottenham: 3, west_ham: 2, crystal_palace: 2, wolves: 2 } },
                    { text: "너무 스트레스받는다", teams: { man_united: 2, newcastle: 2, brighton: 2, burnley: 3 } },
                    { text: "결과에 상관없이 즐긴다", teams: { aston_villa: 3, brentford: 3, fulham: 3, luton: 2 } }
                ]
            },
            {
                text: "축구팀을 응원할 때 가장 중요한 것은?",
                options: [
                    { text: "항상 우승을 노려야 한다", teams: { man_city: 3, liverpool: 3, arsenal: 2, chelsea: 2 } },
                    { text: "좋은 경기력만 보여주면 된다", teams: { brighton: 3, brentford: 3, fulham: 2, crystal_palace: 2 } },
                    { text: "팬들과의 유대감", teams: { liverpool: 2, man_united: 2, newcastle: 3, west_ham: 3 } },
                    { text: "클럽의 철학과 가치", teams: { arsenal: 3, tottenham: 2, aston_villa: 2, brighton: 2 } }
                ]
            },
            {
                text: "당신이 선호하는 감독 스타일은?",
                options: [
                    { text: "카리스마 있고 강한 리더십", teams: { man_united: 3, chelsea: 2, tottenham: 2, newcastle: 2 } },
                    { text: "전술적 완성도가 높은 분석가", teams: { man_city: 3, arsenal: 3, brighton: 2, brentford: 2 } },
                    { text: "선수들과 소통 잘하는 멘토", teams: { liverpool: 3, aston_villa: 2, fulham: 2, crystal_palace: 2 } },
                    { text: "혁신적이고 창의적인 사상가", teams: { brighton: 3, brentford: 3, arsenal: 2, chelsea: 2 } }
                ]
            },
            {
                text: "팀이 어려운 시기를 겪을 때 당신의 반응은?",
                options: [
                    { text: "끝까지 믿고 응원한다", teams: { liverpool: 3, man_united: 3, arsenal: 2, tottenham: 2 } },
                    { text: "냉정하게 분석하고 비판한다", teams: { man_city: 2, chelsea: 2, brighton: 2, crystal_palace: 2 } },
                    { text: "잠시 거리를 두고 지켜본다", teams: { west_ham: 2, wolves: 2, fulham: 2, burnley: 2 } },
                    { text: "더욱 열정적으로 응원한다", teams: { newcastle: 3, aston_villa: 3, brentford: 2, luton: 3 } }
                ]
            },
            {
                text: "선수 영입에서 가장 중요한 요소는?",
                options: [
                    { text: "검증된 실력과 경험", teams: { man_city: 3, liverpool: 2, chelsea: 3, man_united: 2 } },
                    { text: "젊은 나이와 잠재력", teams: { arsenal: 3, brighton: 3, brentford: 2, crystal_palace: 2 } },
                    { text: "팀 컬러와 맞는 성격", teams: { liverpool: 2, tottenham: 2, aston_villa: 2, fulham: 3 } },
                    { text: "가격 대비 효율성", teams: { brighton: 2, brentford: 3, fulham: 2, wolves: 2 } }
                ]
            },
            {
                text: "가장 기억에 남는 축구 순간은?",
                options: [
                    { text: "마지막 순간 역전골", teams: { man_city: 2, liverpool: 3, tottenham: 3, west_ham: 2 } },
                    { text: "완벽한 팀워크 골", teams: { man_city: 3, arsenal: 3, brighton: 2, brentford: 2 } },
                    { text: "개인 기량이 돋보인 골", teams: { chelsea: 3, aston_villa: 2, crystal_palace: 2, wolves: 2 } },
                    { text: "극적인 승부차기 승리", teams: { man_united: 2, liverpool: 2, tottenham: 2, newcastle: 2 } }
                ]
            },
            {
                text: "축구를 통해 얻고 싶은 감정은?",
                options: [
                    { text: "우승의 기쁨과 성취감", teams: { man_city: 3, liverpool: 3, chelsea: 2, arsenal: 2 } },
                    { text: "스릴과 재미", teams: { tottenham: 3, west_ham: 2, crystal_palace: 2, wolves: 2 } },
                    { text: "소속감과 자부심", teams: { liverpool: 2, man_united: 2, newcastle: 3, aston_villa: 2 } },
                    { text: "평화로운 만족감", teams: { brighton: 3, fulham: 3, brentford: 2, burnley: 2 } }
                ]
            },
            {
                text: "팀 컬러(유니폼)로 선호하는 색상은?",
                options: [
                    { text: "빨간색 - 열정적이고 강렬한", teams: { liverpool: 3, man_united: 3, arsenal: 3, crystal_palace: 2 } },
                    { text: "파란색 - 차분하고 신뢰감 있는", teams: { man_city: 3, chelsea: 3, tottenham: 2, brighton: 2 } },
                    { text: "흰색 - 깔끔하고 순수한", teams: { tottenham: 3, fulham: 2, brighton: 2, burnley: 2 } },
                    { text: "기타 독특한 색상", teams: { aston_villa: 3, west_ham: 3, wolves: 2, brentford: 2 } }
                ]
            },
            {
                text: "경기장 분위기 중 선호하는 것은?",
                options: [
                    { text: "우렁찬 응원가와 큰 함성", teams: { liverpool: 3, newcastle: 3, west_ham: 2, crystal_palace: 2 } },
                    { text: "조직적이고 통일된 응원", teams: { man_city: 2, arsenal: 2, tottenham: 2, brighton: 2 } },
                    { text: "가족적이고 따뜻한 분위기", teams: { fulham: 3, brentford: 3, aston_villa: 2, luton: 2 } },
                    { text: "격렬하고 역동적인 분위기", teams: { chelsea: 2, wolves: 2, burnley: 2, crystal_palace: 2 } }
                ]
            },
            {
                text: "축구 외적으로 클럽에 기대하는 것은?",
                options: [
                    { text: "지역사회 공헌과 사회적 책임", teams: { liverpool: 2, man_united: 2, arsenal: 2, brighton: 3 } },
                    { text: "글로벌 브랜드와 마케팅", teams: { man_city: 3, chelsea: 3, tottenham: 2, arsenal: 2 } },
                    { text: "전통과 역사 보존", teams: { man_united: 3, liverpool: 3, arsenal: 2, aston_villa: 2 } },
                    { text: "혁신과 변화", teams: { man_city: 2, brighton: 3, brentford: 3, fulham: 2 } }
                ]
            },
            {
                text: "가장 싫어하는 축구 상황은?",
                options: [
                    { text: "소극적이고 지루한 경기", teams: { man_city: 2, liverpool: 3, arsenal: 2, tottenham: 2 } },
                    { text: "심판 판정 논란", teams: { man_united: 2, chelsea: 2, west_ham: 2, wolves: 2 } },
                    { text: "선수들의 부상", teams: { arsenal: 2, tottenham: 2, newcastle: 2, brighton: 2 } },
                    { text: "팬들 간의 과도한 갈등", teams: { fulham: 3, brentford: 3, crystal_palace: 2, luton: 2 } }
                ]
            },
            {
                text: "축구 경기를 주로 언제 보시나요?",
                options: [
                    { text: "주말 오후 여유롭게", teams: { fulham: 2, brentford: 2, brighton: 2, crystal_palace: 2 } },
                    { text: "저녁 시간대 집중해서", teams: { man_city: 2, arsenal: 2, chelsea: 2, tottenham: 2 } },
                    { text: "언제든 시간 되는 대로", teams: { liverpool: 2, man_united: 2, west_ham: 2, aston_villa: 2 } },
                    { text: "새벽에도 열정적으로", teams: { newcastle: 3, wolves: 2, burnley: 2, luton: 2 } }
                ]
            },
            {
                text: "선수가 다른 팀으로 이적할 때 당신의 반응은?",
                options: [
                    { text: "배신감을 느낀다", teams: { liverpool: 2, man_united: 2, arsenal: 2, tottenham: 2 } },
                    { text: "아쉽지만 이해한다", teams: { brighton: 3, fulham: 2, brentford: 2, crystal_palace: 2 } },
                    { text: "비즈니스라고 생각한다", teams: { man_city: 3, chelsea: 3, west_ham: 2, wolves: 2 } },
                    { text: "새로운 선수를 기대한다", teams: { arsenal: 2, tottenham: 2, aston_villa: 2, newcastle: 2 } }
                ]
            },
            {
                text: "축구 관련 미디어 콘텐츠 중 선호하는 것은?",
                options: [
                    { text: "경기 하이라이트와 골 모음", teams: { man_city: 2, liverpool: 2, arsenal: 2, chelsea: 2 } },
                    { text: "전술 분석과 해설", teams: { man_city: 3, arsenal: 2, brighton: 3, brentford: 2 } },
                    { text: "선수 인터뷰와 비하인드", teams: { liverpool: 2, man_united: 2, tottenham: 2, aston_villa: 2 } },
                    { text: "팬 리액션과 커뮤니티", teams: { newcastle: 3, west_ham: 2, crystal_palace: 2, fulham: 2 } }
                ]
            },
            {
                text: "프리미어리그에서 가장 매력적인 점은?",
                options: [
                    { text: "높은 경기력과 스피드", teams: { man_city: 3, liverpool: 3, arsenal: 2, chelsea: 2 } },
                    { text: "예측 불가능한 결과", teams: { tottenham: 3, west_ham: 2, wolves: 2, crystal_palace: 2 } },
                    { text: "세계 최고 선수들의 집합", teams: { man_city: 2, chelsea: 3, man_united: 2, arsenal: 2 } },
                    { text: "열정적인 팬 문화", teams: { liverpool: 2, newcastle: 3, west_ham: 2, aston_villa: 2 } }
                ]
            },
            {
                text: "마지막으로, 축구란 당신에게 무엇인가요?",
                options: [
                    { text: "인생의 큰 즐거움이자 열정", teams: { liverpool: 3, man_united: 2, newcastle: 3, west_ham: 2 } },
                    { text: "스트레스 해소와 오락", teams: { brighton: 2, fulham: 2, brentford: 2, crystal_palace: 2 } },
                    { text: "친구들과의 소통 수단", teams: { tottenham: 2, aston_villa: 2, wolves: 2, luton: 2 } },
                    { text: "예술이자 아름다운 스포츠", teams: { man_city: 3, arsenal: 3, chelsea: 2, brighton: 2 } }
                ]
            }
        ]
    },
    en: {
        mainTitle: "Which Premier League Team Suits You?",
        subtitle: "Find your perfect Premier League team through personality analysis!",
        homeText: "Assessment Center",
        curiosityText1: "What's your football DNA?",
        curiosityText2: "Man City vs Man United, which side are you?",
        curiosityText3: "Discover your team through 20 questions!",
        startButtonText: "Start Test",
        nextButton: "Next",
        restartButton: "Try Again",
        resultTitle: "Your team is...",
        chartTitle: "Personality Analysis Result",
        statsTitle: "Team Information",
        shareTitle: "Share Your Result",
        copySuccess: "Link copied to clipboard!",
        questions: [
            {
                text: "What's most important when watching football?",
                options: [
                    { text: "Spectacular attacks and many goals", teams: { man_city: 3, liverpool: 3, arsenal: 2, chelsea: 2 } },
                    { text: "Solid defense and tactical perfection", teams: { man_united: 3, tottenham: 2, newcastle: 2, brighton: 2 } },
                    { text: "Teamwork and organization", teams: { brighton: 3, brentford: 3, fulham: 2, crystal_palace: 2 } },
                    { text: "Individual skill and star players", teams: { man_city: 2, chelsea: 3, arsenal: 2, aston_villa: 2 } }
                ]
            },
            {
                text: "What football style do you prefer?",
                options: [
                    { text: "Fast counter-attacks", teams: { liverpool: 3, tottenham: 3, west_ham: 2, wolves: 2 } },
                    { text: "Possession-based tiki-taka", teams: { man_city: 3, brighton: 2, arsenal: 2, chelsea: 2 } },
                    { text: "Physical and strong play", teams: { newcastle: 3, west_ham: 3, burnley: 2, crystal_palace: 2 } },
                    { text: "Creative and artistic play", teams: { arsenal: 3, aston_villa: 2, fulham: 2, brentford: 2 } }
                ]
            }
            // Add more English translations...
        ]
    },
    zh: {
        mainTitle: "哪支英超球队适合你？",
        subtitle: "通过性格分析找到你的完美英超球队！",
        homeText: "综合诊断中心",
        curiosityText1: "你的足球DNA是什么？",
        curiosityText2: "曼城 vs 曼联，你更倾向哪一边？",
        curiosityText3: "通过20个问题发现你的专属球队！",
        startButtonText: "开始测试",
        nextButton: "下一个",
        restartButton: "重新开始",
        resultTitle: "你的球队是...",
        chartTitle: "性格分析结果",
        statsTitle: "球队信息",
        shareTitle: "分享你的结果",
        copySuccess: "链接已复制到剪贴板！",
        questions: [
            {
                text: "观看足球时最重要的是什么？",
                options: [
                    { text: "华丽的进攻和进球", teams: { man_city: 3, liverpool: 3, arsenal: 2, chelsea: 2 } },
                    { text: "坚固的防守和战术完善", teams: { man_united: 3, tottenham: 2, newcastle: 2, brighton: 2 } },
                    { text: "团队合作和组织性", teams: { brighton: 3, brentford: 3, fulham: 2, crystal_palace: 2 } },
                    { text: "个人技巧和明星球员", teams: { man_city: 2, chelsea: 3, arsenal: 2, aston_villa: 2 } }
                ]
            },
            {
                text: "你喜欢的足球风格是？",
                options: [
                    { text: "快速反击", teams: { liverpool: 3, tottenham: 3, west_ham: 2, wolves: 2 } },
                    { text: "控球型踢踢踏踏", teams: { man_city: 3, brighton: 2, arsenal: 2, chelsea: 2 } },
                    { text: "身体对抗强硬", teams: { newcastle: 3, west_ham: 3, burnley: 2, crystal_palace: 2 } },
                    { text: "创造性艺术足球", teams: { arsenal: 3, aston_villa: 2, fulham: 2, brentford: 2 } }
                ]
            },
            {
                text: "最喜欢的球员类型？",
                options: [
                    { text: "进球能力强的前锋", teams: { man_city: 3, liverpool: 2, arsenal: 2, tottenham: 2 } },
                    { text: "有创造力的组织者", teams: { man_city: 2, arsenal: 3, chelsea: 2, aston_villa: 2 } },
                    { text: "强壮的后卫", teams: { man_united: 3, liverpool: 2, newcastle: 2, crystal_palace: 2 } },
                    { text: "全能中场", teams: { liverpool: 3, tottenham: 2, west_ham: 2, brighton: 2 } }
                ]
            },
            {
                text: "球队历史和传统有多重要？",
                options: [
                    { text: "非常重要 - 喜欢豪门", teams: { man_united: 3, liverpool: 3, arsenal: 3, chelsea: 2 } },
                    { text: "有一定重要性", teams: { tottenham: 2, newcastle: 2, aston_villa: 2, west_ham: 2 } },
                    { text: "不太重要", teams: { man_city: 2, brighton: 2, brentford: 2, fulham: 2 } },
                    { text: "完全不重要 - 现在更重要", teams: { man_city: 3, brighton: 3, brentford: 3, crystal_palace: 2 } }
                ]
            },
            {
                text: "点球大战时你的心情？",
                options: [
                    { text: "紧张但相信", teams: { man_city: 2, liverpool: 2, arsenal: 2, chelsea: 2 } },
                    { text: "非常兴奋", teams: { tottenham: 3, west_ham: 2, crystal_palace: 2, wolves: 2 } },
                    { text: "太有压力", teams: { man_united: 2, newcastle: 2, brighton: 2, burnley: 3 } },
                    { text: "无论结果都享受", teams: { aston_villa: 3, brentford: 3, fulham: 3, luton: 2 } }
                ]
            },
            {
                text: "支持球队最重要的是？",
                options: [
                    { text: "总是争冠", teams: { man_city: 3, liverpool: 3, arsenal: 2, chelsea: 2 } },
                    { text: "好的表现就够了", teams: { brighton: 3, brentford: 3, fulham: 2, crystal_palace: 2 } },
                    { text: "与球迷的联系", teams: { liverpool: 2, man_united: 2, newcastle: 3, west_ham: 3 } },
                    { text: "俱乐部理念价值", teams: { arsenal: 3, tottenham: 2, aston_villa: 2, brighton: 2 } }
                ]
            },
            {
                text: "喜欢的教练风格？",
                options: [
                    { text: "魅力强势领导", teams: { man_united: 3, chelsea: 2, tottenham: 2, newcastle: 2 } },
                    { text: "战术分析专家", teams: { man_city: 3, arsenal: 3, brighton: 2, brentford: 2 } },
                    { text: "善于沟通的导师", teams: { liverpool: 3, aston_villa: 2, fulham: 2, crystal_palace: 2 } },
                    { text: "创新思想家", teams: { brighton: 3, brentford: 3, arsenal: 2, chelsea: 2 } }
                ]
            },
            {
                text: "球队困难时期你的反应？",
                options: [
                    { text: "坚持到底支持", teams: { liverpool: 3, man_united: 3, arsenal: 2, tottenham: 2 } },
                    { text: "冷静分析批评", teams: { man_city: 2, chelsea: 2, brighton: 2, crystal_palace: 2 } },
                    { text: "暂时保持距离", teams: { west_ham: 2, wolves: 2, fulham: 2, burnley: 2 } },
                    { text: "更热情支持", teams: { newcastle: 3, aston_villa: 3, brentford: 2, luton: 3 } }
                ]
            },
            {
                text: "球员引进最重要因素？",
                options: [
                    { text: "经验和实力", teams: { man_city: 3, liverpool: 2, chelsea: 3, man_united: 2 } },
                    { text: "年轻有潜力", teams: { arsenal: 3, brighton: 3, brentford: 2, crystal_palace: 2 } },
                    { text: "适合球队文化", teams: { liverpool: 2, tottenham: 2, aston_villa: 2, fulham: 3 } },
                    { text: "性价比", teams: { brighton: 2, brentford: 3, fulham: 2, wolves: 2 } }
                ]
            },
            {
                text: "最难忘的足球瞬间？",
                options: [
                    { text: "最后时刻逆转", teams: { man_city: 2, liverpool: 3, tottenham: 3, west_ham: 2 } },
                    { text: "完美团队配合", teams: { man_city: 3, arsenal: 3, brighton: 2, brentford: 2 } },
                    { text: "个人技巧进球", teams: { chelsea: 3, aston_villa: 2, crystal_palace: 2, wolves: 2 } },
                    { text: "戏剧性点球胜利", teams: { man_united: 2, liverpool: 2, tottenham: 2, newcastle: 2 } }
                ]
            },
            {
                text: "通过足球想获得什么感情？",
                options: [
                    { text: "冠军的喜悦", teams: { man_city: 3, liverpool: 3, chelsea: 2, arsenal: 2 } },
                    { text: "刺激和乐趣", teams: { tottenham: 3, west_ham: 2, crystal_palace: 2, wolves: 2 } },
                    { text: "归属感和自豪", teams: { liverpool: 2, man_united: 2, newcastle: 3, aston_villa: 2 } },
                    { text: "平静满足", teams: { brighton: 3, fulham: 3, brentford: 2, burnley: 2 } }
                ]
            },
            {
                text: "喜欢的球衣颜色？",
                options: [
                    { text: "红色 - 热情强烈", teams: { liverpool: 3, man_united: 3, arsenal: 3, crystal_palace: 2 } },
                    { text: "蓝色 - 冷静可靠", teams: { man_city: 3, chelsea: 3, tottenham: 2, brighton: 2 } },
                    { text: "白色 - 干净纯洁", teams: { tottenham: 3, fulham: 2, brighton: 2, burnley: 2 } },
                    { text: "其他独特颜色", teams: { aston_villa: 3, west_ham: 3, wolves: 2, brentford: 2 } }
                ]
            },
            {
                text: "喜欢的球场氛围？",
                options: [
                    { text: "嘹亮歌声和呐喊", teams: { liverpool: 3, newcastle: 3, west_ham: 2, crystal_palace: 2 } },
                    { text: "有组织统一应援", teams: { man_city: 2, arsenal: 2, tottenham: 2, brighton: 2 } },
                    { text: "家庭式温暖氛围", teams: { fulham: 3, brentford: 3, aston_villa: 2, luton: 2 } },
                    { text: "激烈动感氛围", teams: { chelsea: 2, wolves: 2, burnley: 2, crystal_palace: 2 } }
                ]
            },
            {
                text: "对俱乐部足球外的期待？",
                options: [
                    { text: "社区贡献社会责任", teams: { liverpool: 2, man_united: 2, arsenal: 2, brighton: 3 } },
                    { text: "全球品牌营销", teams: { man_city: 3, chelsea: 3, tottenham: 2, arsenal: 2 } },
                    { text: "传统历史保护", teams: { man_united: 3, liverpool: 3, arsenal: 2, aston_villa: 2 } },
                    { text: "创新和变革", teams: { man_city: 2, brighton: 3, brentford: 3, fulham: 2 } }
                ]
            },
            {
                text: "最讨厌的足球情况？",
                options: [
                    { text: "消极无聊比赛", teams: { man_city: 2, liverpool: 3, arsenal: 2, tottenham: 2 } },
                    { text: "裁判争议", teams: { man_united: 2, chelsea: 2, west_ham: 2, wolves: 2 } },
                    { text: "球员受伤", teams: { arsenal: 2, tottenham: 2, newcastle: 2, brighton: 2 } },
                    { text: "球迷过度冲突", teams: { fulham: 3, brentford: 3, crystal_palace: 2, luton: 2 } }
                ]
            },
            {
                text: "主要什么时候看比赛？",
                options: [
                    { text: "周末下午悠闲", teams: { fulham: 2, brentford: 2, brighton: 2, crystal_palace: 2 } },
                    { text: "晚上专注观看", teams: { man_city: 2, arsenal: 2, chelsea: 2, tottenham: 2 } },
                    { text: "有时间就看", teams: { liverpool: 2, man_united: 2, west_ham: 2, aston_villa: 2 } },
                    { text: "凌晨也热情观看", teams: { newcastle: 3, wolves: 2, burnley: 2, luton: 2 } }
                ]
            },
            {
                text: "球员转会时你的反应？",
                options: [
                    { text: "感到背叛", teams: { liverpool: 2, man_united: 2, arsenal: 2, tottenham: 2 } },
                    { text: "遗憾但理解", teams: { brighton: 3, fulham: 2, brentford: 2, crystal_palace: 2 } },
                    { text: "认为是生意", teams: { man_city: 3, chelsea: 3, west_ham: 2, wolves: 2 } },
                    { text: "期待新球员", teams: { arsenal: 2, tottenham: 2, aston_villa: 2, newcastle: 2 } }
                ]
            },
            {
                text: "喜欢的足球媒体内容？",
                options: [
                    { text: "比赛精彩集锦", teams: { man_city: 2, liverpool: 2, arsenal: 2, chelsea: 2 } },
                    { text: "战术分析解说", teams: { man_city: 3, arsenal: 2, brighton: 3, brentford: 2 } },
                    { text: "球员采访幕后", teams: { liverpool: 2, man_united: 2, tottenham: 2, aston_villa: 2 } },
                    { text: "球迷反应社区", teams: { newcastle: 3, west_ham: 2, crystal_palace: 2, fulham: 2 } }
                ]
            },
            {
                text: "英超最吸引人的地方？",
                options: [
                    { text: "高水平快节奏", teams: { man_city: 3, liverpool: 3, arsenal: 2, chelsea: 2 } },
                    { text: "结果不可预测", teams: { tottenham: 3, west_ham: 2, wolves: 2, crystal_palace: 2 } },
                    { text: "世界顶级球员", teams: { man_city: 2, chelsea: 3, man_united: 2, arsenal: 2 } },
                    { text: "热情球迷文化", teams: { liverpool: 2, newcastle: 3, west_ham: 2, aston_villa: 2 } }
                ]
            },
            {
                text: "最后，足球对你意味着什么？",
                options: [
                    { text: "人生的巨大乐趣", teams: { liverpool: 3, man_united: 2, newcastle: 3, west_ham: 2 } },
                    { text: "放松娱乐", teams: { brighton: 2, fulham: 2, brentford: 2, crystal_palace: 2 } },
                    { text: "朋友沟通方式", teams: { tottenham: 2, aston_villa: 2, wolves: 2, luton: 2 } },
                    { text: "艺术美丽运动", teams: { man_city: 3, arsenal: 3, chelsea: 2, brighton: 2 } }
                ]
            }
        ]
    },
    ja: {
        mainTitle: "あなたに合うプレミアリーグチームは？",
        subtitle: "性格分析であなたにぴったりのプレミアリーグチームを見つけよう！",
        homeText: "総合診断センター",
        curiosityText1: "あなたのサッカーDNAは何ですか？",
        curiosityText2: "マンシティ vs マンユナイテッド、どちら寄り？",
        curiosityText3: "20の質問で明かされるあなたのチーム！",
        startButtonText: "テスト開始",
        nextButton: "次へ",
        restartButton: "もう一度",
        resultTitle: "あなたのチームは...",
        chartTitle: "性格分析結果",
        statsTitle: "チーム情報",
        shareTitle: "結果をシェア",
        copySuccess: "リンクをコピーしました！",
        questions: [
            {
                text: "サッカーを見る時に最も重要なことは？",
                options: [
                    { text: "華麗な攻撃と多くのゴール", teams: { man_city: 3, liverpool: 3, arsenal: 2, chelsea: 2 } },
                    { text: "堅実な守備と戦術的完成度", teams: { man_united: 3, tottenham: 2, newcastle: 2, brighton: 2 } },
                    { text: "チームワークと組織力", teams: { brighton: 3, brentford: 3, fulham: 2, crystal_palace: 2 } },
                    { text: "個人技量とスター選手", teams: { man_city: 2, chelsea: 3, arsenal: 2, aston_villa: 2 } }
                ]
            },
            {
                text: "好きなサッカースタイルは？",
                options: [
                    { text: "速いカウンターアタック", teams: { liverpool: 3, tottenham: 3, west_ham: 2, wolves: 2 } },
                    { text: "ポゼッション型ティキタカ", teams: { man_city: 3, brighton: 2, arsenal: 2, chelsea: 2 } },
                    { text: "フィジカルで強いプレー", teams: { newcastle: 3, west_ham: 3, burnley: 2, crystal_palace: 2 } },
                    { text: "創造的で芸術的なプレー", teams: { arsenal: 3, aston_villa: 2, fulham: 2, brentford: 2 } }
                ]
            },
            {
                text: "最も好きな選手タイプは？",
                options: [
                    { text: "ゴール決定力の高いストライカー", teams: { man_city: 3, liverpool: 2, arsenal: 2, tottenham: 2 } },
                    { text: "創造的なプレーメーカー", teams: { man_city: 2, arsenal: 3, chelsea: 2, aston_villa: 2 } },
                    { text: "強力なディフェンダー", teams: { man_united: 3, liverpool: 2, newcastle: 2, crystal_palace: 2 } },
                    { text: "万能ミッドフィールダー", teams: { liverpool: 3, tottenham: 2, west_ham: 2, brighton: 2 } }
                ]
            },
            {
                text: "チームの歴史と伝統をどのくらい重視しますか？",
                options: [
                    { text: "とても重要 - 名門クラブが好き", teams: { man_united: 3, liverpool: 3, arsenal: 3, chelsea: 2 } },
                    { text: "ある程度重要", teams: { tottenham: 2, newcastle: 2, aston_villa: 2, west_ham: 2 } },
                    { text: "あまり重要ではない", teams: { man_city: 2, brighton: 2, brentford: 2, fulham: 2 } },
                    { text: "全く重要ではない - 現在が大切", teams: { man_city: 3, brighton: 3, brentford: 3, crystal_palace: 2 } }
                ]
            },
            {
                text: "PK戦になった時の気持ちは？",
                options: [
                    { text: "緊張するが信じて待つ", teams: { man_city: 2, liverpool: 2, arsenal: 2, chelsea: 2 } },
                    { text: "とてもワクワクする", teams: { tottenham: 3, west_ham: 2, crystal_palace: 2, wolves: 2 } },
                    { text: "とてもストレスを感じる", teams: { man_united: 2, newcastle: 2, brighton: 2, burnley: 3 } },
                    { text: "結果に関係なく楽しむ", teams: { aston_villa: 3, brentford: 3, fulham: 3, luton: 2 } }
                ]
            },
            {
                text: "チームを応援する時に最も重要なことは？",
                options: [
                    { text: "常に優勝を狙うべき", teams: { man_city: 3, liverpool: 3, arsenal: 2, chelsea: 2 } },
                    { text: "良いプレーを見せてくれれば十分", teams: { brighton: 3, brentford: 3, fulham: 2, crystal_palace: 2 } },
                    { text: "ファンとの絆", teams: { liverpool: 2, man_united: 2, newcastle: 3, west_ham: 3 } },
                    { text: "クラブの理念と価値", teams: { arsenal: 3, tottenham: 2, aston_villa: 2, brighton: 2 } }
                ]
            },
            {
                text: "好きな監督スタイルは？",
                options: [
                    { text: "カリスマ的で強いリーダーシップ", teams: { man_united: 3, chelsea: 2, tottenham: 2, newcastle: 2 } },
                    { text: "戦術的完成度の高い分析家", teams: { man_city: 3, arsenal: 3, brighton: 2, brentford: 2 } },
                    { text: "選手とよくコミュニケーションを取るメンター", teams: { liverpool: 3, aston_villa: 2, fulham: 2, crystal_palace: 2 } },
                    { text: "革新的で創造的な思想家", teams: { brighton: 3, brentford: 3, arsenal: 2, chelsea: 2 } }
                ]
            },
            {
                text: "チームが困難な時期を迎えた時の反応は？",
                options: [
                    { text: "最後まで信じて応援する", teams: { liverpool: 3, man_united: 3, arsenal: 2, tottenham: 2 } },
                    { text: "冷静に分析して批判する", teams: { man_city: 2, chelsea: 2, brighton: 2, crystal_palace: 2 } },
                    { text: "しばらく距離を置いて様子を見る", teams: { west_ham: 2, wolves: 2, fulham: 2, burnley: 2 } },
                    { text: "より熱情的に応援する", teams: { newcastle: 3, aston_villa: 3, brentford: 2, luton: 3 } }
                ]
            },
            {
                text: "選手獲得で最も重要な要素は？",
                options: [
                    { text: "実証された実力と経験", teams: { man_city: 3, liverpool: 2, chelsea: 3, man_united: 2 } },
                    { text: "若い年齢とポテンシャル", teams: { arsenal: 3, brighton: 3, brentford: 2, crystal_palace: 2 } },
                    { text: "チームカラーに合う性格", teams: { liverpool: 2, tottenham: 2, aston_villa: 2, fulham: 3 } },
                    { text: "価格対効果", teams: { brighton: 2, brentford: 3, fulham: 2, wolves: 2 } }
                ]
            },
            {
                text: "最も記憶に残るサッカーの瞬間は？",
                options: [
                    { text: "最後の瞬間の逆転ゴール", teams: { man_city: 2, liverpool: 3, tottenham: 3, west_ham: 2 } },
                    { text: "完璧なチームワークゴール", teams: { man_city: 3, arsenal: 3, brighton: 2, brentford: 2 } },
                    { text: "個人技量が光るゴール", teams: { chelsea: 3, aston_villa: 2, crystal_palace: 2, wolves: 2 } },
                    { text: "劇的なPK戦勝利", teams: { man_united: 2, liverpool: 2, tottenham: 2, newcastle: 2 } }
                ]
            },
            {
                text: "サッカーを通じて得たい感情は？",
                options: [
                    { text: "優勝の喜びと達成感", teams: { man_city: 3, liverpool: 3, chelsea: 2, arsenal: 2 } },
                    { text: "スリルと楽しさ", teams: { tottenham: 3, west_ham: 2, crystal_palace: 2, wolves: 2 } },
                    { text: "所属感と誇り", teams: { liverpool: 2, man_united: 2, newcastle: 3, aston_villa: 2 } },
                    { text: "平和な満足感", teams: { brighton: 3, fulham: 3, brentford: 2, burnley: 2 } }
                ]
            },
            {
                text: "チームカラー（ユニフォーム）で好きな色は？",
                options: [
                    { text: "赤色 - 情熱的で強烈", teams: { liverpool: 3, man_united: 3, arsenal: 3, crystal_palace: 2 } },
                    { text: "青色 - 落ち着いて信頼感がある", teams: { man_city: 3, chelsea: 3, tottenham: 2, brighton: 2 } },
                    { text: "白色 - きれいで純粋", teams: { tottenham: 3, fulham: 2, brighton: 2, burnley: 2 } },
                    { text: "その他独特な色", teams: { aston_villa: 3, west_ham: 3, wolves: 2, brentford: 2 } }
                ]
            },
            {
                text: "スタジアムの雰囲気で好きなものは？",
                options: [
                    { text: "響く応援歌と大きな歓声", teams: { liverpool: 3, newcastle: 3, west_ham: 2, crystal_palace: 2 } },
                    { text: "組織的で統一された応援", teams: { man_city: 2, arsenal: 2, tottenham: 2, brighton: 2 } },
                    { text: "家族的で温かい雰囲気", teams: { fulham: 3, brentford: 3, aston_villa: 2, luton: 2 } },
                    { text: "激しく動的な雰囲気", teams: { chelsea: 2, wolves: 2, burnley: 2, crystal_palace: 2 } }
                ]
            },
            {
                text: "サッカー以外でクラブに期待することは？",
                options: [
                    { text: "地域社会貢献と社会的責任", teams: { liverpool: 2, man_united: 2, arsenal: 2, brighton: 3 } },
                    { text: "グローバルブランドとマーケティング", teams: { man_city: 3, chelsea: 3, tottenham: 2, arsenal: 2 } },
                    { text: "伝統と歴史の保存", teams: { man_united: 3, liverpool: 3, arsenal: 2, aston_villa: 2 } },
                    { text: "革新と変化", teams: { man_city: 2, brighton: 3, brentford: 3, fulham: 2 } }
                ]
            },
            {
                text: "最も嫌いなサッカーの状況は？",
                options: [
                    { text: "消極的で退屈な試合", teams: { man_city: 2, liverpool: 3, arsenal: 2, tottenham: 2 } },
                    { text: "審判の判定論争", teams: { man_united: 2, chelsea: 2, west_ham: 2, wolves: 2 } },
                    { text: "選手の怪我", teams: { arsenal: 2, tottenham: 2, newcastle: 2, brighton: 2 } },
                    { text: "ファン同士の過度な対立", teams: { fulham: 3, brentford: 3, crystal_palace: 2, luton: 2 } }
                ]
            },
            {
                text: "サッカーの試合を主にいつ見ますか？",
                options: [
                    { text: "週末の午後にゆっくりと", teams: { fulham: 2, brentford: 2, brighton: 2, crystal_palace: 2 } },
                    { text: "夜の時間帯に集中して", teams: { man_city: 2, arsenal: 2, chelsea: 2, tottenham: 2 } },
                    { text: "時間がある時に随時", teams: { liverpool: 2, man_united: 2, west_ham: 2, aston_villa: 2 } },
                    { text: "早朝でも情熱的に", teams: { newcastle: 3, wolves: 2, burnley: 2, luton: 2 } }
                ]
            },
            {
                text: "選手が他チームに移籍する時の反応は？",
                options: [
                    { text: "裏切られた気持ち", teams: { liverpool: 2, man_united: 2, arsenal: 2, tottenham: 2 } },
                    { text: "残念だが理解する", teams: { brighton: 3, fulham: 2, brentford: 2, crystal_palace: 2 } },
                    { text: "ビジネスだと思う", teams: { man_city: 3, chelsea: 3, west_ham: 2, wolves: 2 } },
                    { text: "新しい選手を期待する", teams: { arsenal: 2, tottenham: 2, aston_villa: 2, newcastle: 2 } }
                ]
            },
            {
                text: "サッカー関連メディアコンテンツで好きなものは？",
                options: [
                    { text: "試合ハイライトとゴール集", teams: { man_city: 2, liverpool: 2, arsenal: 2, chelsea: 2 } },
                    { text: "戦術分析と解説", teams: { man_city: 3, arsenal: 2, brighton: 3, brentford: 2 } },
                    { text: "選手インタビューと舞台裏", teams: { liverpool: 2, man_united: 2, tottenham: 2, aston_villa: 2 } },
                    { text: "ファンリアクションとコミュニティ", teams: { newcastle: 3, west_ham: 2, crystal_palace: 2, fulham: 2 } }
                ]
            },
            {
                text: "プレミアリーグで最も魅力的な点は？",
                options: [
                    { text: "高いレベルとスピード", teams: { man_city: 3, liverpool: 3, arsenal: 2, chelsea: 2 } },
                    { text: "予測不可能な結果", teams: { tottenham: 3, west_ham: 2, wolves: 2, crystal_palace: 2 } },
                    { text: "世界最高の選手たちの集合", teams: { man_city: 2, chelsea: 3, man_united: 2, arsenal: 2 } },
                    { text: "情熱的なファン文化", teams: { liverpool: 2, newcastle: 3, west_ham: 2, aston_villa: 2 } }
                ]
            },
            {
                text: "最後に、サッカーとはあなたにとって何ですか？",
                options: [
                    { text: "人生の大きな楽しみと情熱", teams: { liverpool: 3, man_united: 2, newcastle: 3, west_ham: 2 } },
                    { text: "ストレス解消と娯楽", teams: { brighton: 2, fulham: 2, brentford: 2, crystal_palace: 2 } },
                    { text: "友達との交流手段", teams: { tottenham: 2, aston_villa: 2, wolves: 2, luton: 2 } },
                    { text: "芸術で美しいスポーツ", teams: { man_city: 3, arsenal: 3, chelsea: 2, brighton: 2 } }
                ]
            }
        ]
    },
    th: {
        mainTitle: "ทีมพรีเมียร์ลีกไหนที่เหมาะกับคุณ？",
        subtitle: "ค้นหาทีมพรีเมียร์ลีกที่เหมาะกับคุณผ่านการวิเคราะห์บุคลิกภาพ！",
        homeText: "ศูนย์วินิจฉัยครบวงจร",
        curiosityText1: "DNA ฟุตบอลของคุณคืออะไร？",
        curiosityText2: "แมนซิตี้ vs แมนยู คุณเอียงไปทางไหน？",
        curiosityText3: "ค้นพบทีมของคุณผ่าน 20 คำถาม！",
        startButtonText: "เริ่มทดสอบ",
        nextButton: "ถัดไป",
        restartButton: "เริ่มใหม่",
        resultTitle: "ทีมของคุณคือ...",
        chartTitle: "ผลการวิเคราะห์บุคลิกภาพ",
        statsTitle: "ข้อมูลทีม",
        shareTitle: "แบ่งปันผลลัพธ์ของคุณ",
        copySuccess: "คัดลอกลิงก์แล้ว！",
        questions: [
            {
                text: "สิ่งที่สำคัญที่สุดเมื่อดูฟุตบอลคืออะไร？",
                options: [
                    { text: "การโจมตีที่สวยงามและประตูเยอะ", teams: { man_city: 3, liverpool: 3, arsenal: 2, chelsea: 2 } },
                    { text: "การป้องกันที่แข็งแกร่งและยุทธวิธีที่สมบูรณ์", teams: { man_united: 3, tottenham: 2, newcastle: 2, brighton: 2 } },
                    { text: "การทำงานเป็นทีมและการจัดระเบียบ", teams: { brighton: 3, brentford: 3, fulham: 2, crystal_palace: 2 } },
                    { text: "ทักษะส่วนบุคคลและนักเตะดาว", teams: { man_city: 2, chelsea: 3, arsenal: 2, aston_villa: 2 } }
                ]
            },
            {
                text: "คุณชอบสไตล์ฟุตบอลแบบไหน？",
                options: [
                    { text: "การต่อกรเร็วและแบบเคาน์เตอร์", teams: { liverpool: 3, tottenham: 3, west_ham: 2, wolves: 2 } },
                    { text: "การครองบอลแบบทิกิตากา", teams: { man_city: 3, brighton: 2, arsenal: 2, chelsea: 2 } },
                    { text: "การเล่นที่ใช้ร่างกายและแข็งแกร่ง", teams: { newcastle: 3, west_ham: 3, burnley: 2, crystal_palace: 2 } },
                    { text: "การเล่นที่สร้างสรรค์และเป็นศิลปะ", teams: { arsenal: 3, aston_villa: 2, fulham: 2, brentford: 2 } }
                ]
            },
            {
                text: "ประเภทนักเตะที่คุณชอบมากที่สุด？",
                options: [
                    { text: "กองหน้าที่ยิงประตูเก่ง", teams: { man_city: 3, liverpool: 2, arsenal: 2, tottenham: 2 } },
                    { text: "ผู้สร้างเกมที่สร้างสรรค์", teams: { man_city: 2, arsenal: 3, chelsea: 2, aston_villa: 2 } },
                    { text: "กองหลังที่แข็งแกร่ง", teams: { man_united: 3, liverpool: 2, newcastle: 2, crystal_palace: 2 } },
                    { text: "กองกลางที่ทำได้ทุกอย่าง", teams: { liverpool: 3, tottenham: 2, west_ham: 2, brighton: 2 } }
                ]
            },
            {
                text: "ประวัติศาสตร์และประเพณีของทีมสำคัญแค่ไหน？",
                options: [
                    { text: "สำคัญมาก - ชอบสโมสรใหญ่", teams: { man_united: 3, liverpool: 3, arsenal: 3, chelsea: 2 } },
                    { text: "สำคัญระดับหนึ่ง", teams: { tottenham: 2, newcastle: 2, aston_villa: 2, west_ham: 2 } },
                    { text: "ไม่ค่อยสำคัญ", teams: { man_city: 2, brighton: 2, brentford: 2, fulham: 2 } },
                    { text: "ไม่สำคัญเลย - ปัจจุบันสำคัญกว่า", teams: { man_city: 3, brighton: 3, brentford: 3, crystal_palace: 2 } }
                ]
            },
            {
                text: "เมื่อต้องดวลจุดโทษ คุณรู้สึกอย่างไร？",
                options: [
                    { text: "เครียดแต่เชื่อใจและรอ", teams: { man_city: 2, liverpool: 2, arsenal: 2, chelsea: 2 } },
                    { text: "ตื่นเต้นมาก", teams: { tottenham: 3, west_ham: 2, crystal_palace: 2, wolves: 2 } },
                    { text: "เครียดมากเกินไป", teams: { man_united: 2, newcastle: 2, brighton: 2, burnley: 3 } },
                    { text: "สนุกไม่ว่าผลจะออกมาอย่างไร", teams: { aston_villa: 3, brentford: 3, fulham: 3, luton: 2 } }
                ]
            },
            {
                text: "สิ่งที่สำคัญที่สุดในการเชียร์ทีม？",
                options: [
                    { text: "ต้องมุ่งชิงแชมป์เสมอ", teams: { man_city: 3, liverpool: 3, arsenal: 2, chelsea: 2 } },
                    { text: "แสดงเกมที่ดีก็พอ", teams: { brighton: 3, brentford: 3, fulham: 2, crystal_palace: 2 } },
                    { text: "ความผูกพันกับแฟน", teams: { liverpool: 2, man_united: 2, newcastle: 3, west_ham: 3 } },
                    { text: "ปรัชญาและค่านิยมของสโมสร", teams: { arsenal: 3, tottenham: 2, aston_villa: 2, brighton: 2 } }
                ]
            },
            {
                text: "สไตล์โค้ชที่คุณชอบ？",
                options: [
                    { text: "มีเสน่ห์และเป็นผู้นำที่เข้มแข็ง", teams: { man_united: 3, chelsea: 2, tottenham: 2, newcastle: 2 } },
                    { text: "นักวิเคราะห์ยุทธวิธีที่สมบูรณ์", teams: { man_city: 3, arsenal: 3, brighton: 2, brentford: 2 } },
                    { text: "พี่เลี้ยงที่สื่อสารกับนักเตะได้ดี", teams: { liverpool: 3, aston_villa: 2, fulham: 2, crystal_palace: 2 } },
                    { text: "นักคิดที่นวัตกรรมและสร้างสรรค์", teams: { brighton: 3, brentford: 3, arsenal: 2, chelsea: 2 } }
                ]
            },
            {
                text: "เมื่อทีมประสบปัญหา คุณทำอย่างไร？",
                options: [
                    { text: "เชื่อใจและเชียร์จนถึงที่สุด", teams: { liverpool: 3, man_united: 3, arsenal: 2, tottenham: 2 } },
                    { text: "วิเคราะห์อย่างเย็นชาและวิจารณ์", teams: { man_city: 2, chelsea: 2, brighton: 2, crystal_palace: 2 } },
                    { text: "เก็บระยะห่างชั่วคราว", teams: { west_ham: 2, wolves: 2, fulham: 2, burnley: 2 } },
                    { text: "เชียร์อย่างมีไฟมากขึ้น", teams: { newcastle: 3, aston_villa: 3, brentford: 2, luton: 3 } }
                ]
            },
            {
                text: "ปัจจัยสำคัญที่สุดในการซื้อนักเตะ？",
                options: [
                    { text: "ความสามารถและประสบการณ์ที่พิสูจน์แล้ว", teams: { man_city: 3, liverpool: 2, chelsea: 3, man_united: 2 } },
                    { text: "อายุน้อยและศักยภาพ", teams: { arsenal: 3, brighton: 3, brentford: 2, crystal_palace: 2 } },
                    { text: "บุคลิกที่เข้ากับทีม", teams: { liverpool: 2, tottenham: 2, aston_villa: 2, fulham: 3 } },
                    { text: "ความคุ้มค่าต่อราคา", teams: { brighton: 2, brentford: 3, fulham: 2, wolves: 2 } }
                ]
            },
            {
                text: "ช่วงเวลาฟุตบอลที่น่าจดจำที่สุด？",
                options: [
                    { text: "ประตูพลิกสถานการณ์นาทีสุดท้าย", teams: { man_city: 2, liverpool: 3, tottenham: 3, west_ham: 2 } },
                    { text: "ประตูจากการทำงานร่วมกันอย่างสมบูรณ์", teams: { man_city: 3, arsenal: 3, brighton: 2, brentford: 2 } },
                    { text: "ประตูจากทักษะส่วนบุคคล", teams: { chelsea: 3, aston_villa: 2, crystal_palace: 2, wolves: 2 } },
                    { text: "ชัยชนะจากจุดโทษที่น่าตื่นเต้น", teams: { man_united: 2, liverpool: 2, tottenham: 2, newcastle: 2 } }
                ]
            },
            {
                text: "อารมณ์ที่คุณต้องการได้รับจากฟุตบอล？",
                options: [
                    { text: "ความสุขจากการชนะเลิศและความสำเร็จ", teams: { man_city: 3, liverpool: 3, chelsea: 2, arsenal: 2 } },
                    { text: "ความตื่นเต้นและความสนุก", teams: { tottenham: 3, west_ham: 2, crystal_palace: 2, wolves: 2 } },
                    { text: "ความรู้สึกเป็นส่วนหนึ่งและความภาคภูมิใจ", teams: { liverpool: 2, man_united: 2, newcastle: 3, aston_villa: 2 } },
                    { text: "ความพึงพอใจอย่างสงบ", teams: { brighton: 3, fulham: 3, brentford: 2, burnley: 2 } }
                ]
            },
            {
                text: "สีเสื้อทีมที่คุณชอบ？",
                options: [
                    { text: "สีแดง - เร่าร้อนและรุนแรง", teams: { liverpool: 3, man_united: 3, arsenal: 3, crystal_palace: 2 } },
                    { text: "สีน้ำเงิน - สงบและน่าเชื่อถือ", teams: { man_city: 3, chelsea: 3, tottenham: 2, brighton: 2 } },
                    { text: "สีขาว - สะอาดและบริสุทธิ์", teams: { tottenham: 3, fulham: 2, brighton: 2, burnley: 2 } },
                    { text: "สีอื่นๆ ที่เป็นเอกลักษณ์", teams: { aston_villa: 3, west_ham: 3, wolves: 2, brentford: 2 } }
                ]
            },
            {
                text: "บรรยากาศสนามที่คุณชอบ？",
                options: [
                    { text: "เสียงเชียร์และเสียงโห่ร้องดัง", teams: { liverpool: 3, newcastle: 3, west_ham: 2, crystal_palace: 2 } },
                    { text: "การเชียร์ที่มีระเบียบและเป็นเอกภาพ", teams: { man_city: 2, arsenal: 2, tottenham: 2, brighton: 2 } },
                    { text: "บรรยากาศครอบครัวที่อบอุ่น", teams: { fulham: 3, brentford: 3, aston_villa: 2, luton: 2 } },
                    { text: "บรรยากาศที่รุนแรงและมีพลัง", teams: { chelsea: 2, wolves: 2, burnley: 2, crystal_palace: 2 } }
                ]
            },
            {
                text: "สิ่งที่คาดหวังจากสโมสรนอกเหนือจากฟุตบอล？",
                options: [
                    { text: "การมีส่วนร่วมในชุมชนและความรับผิดชอบต่อสังคม", teams: { liverpool: 2, man_united: 2, arsenal: 2, brighton: 3 } },
                    { text: "แบรนด์ระดับโลกและการตลาด", teams: { man_city: 3, chelsea: 3, tottenham: 2, arsenal: 2 } },
                    { text: "การรักษาประเพณีและประวัติศาสตร์", teams: { man_united: 3, liverpool: 3, arsenal: 2, aston_villa: 2 } },
                    { text: "นวัตกรรมและการเปลี่ยนแปลง", teams: { man_city: 2, brighton: 3, brentford: 3, fulham: 2 } }
                ]
            },
            {
                text: "สถานการณ์ฟุตบอลที่คุณเกลียดที่สุด？",
                options: [
                    { text: "เกมที่เล่นแบบรั้งรอและน่าเบื่อ", teams: { man_city: 2, liverpool: 3, arsenal: 2, tottenham: 2 } },
                    { text: "การโต้เถียงการตัดสินของผู้ตัดสิน", teams: { man_united: 2, chelsea: 2, west_ham: 2, wolves: 2 } },
                    { text: "การบาดเจ็บของนักเตะ", teams: { arsenal: 2, tottenham: 2, newcastle: 2, brighton: 2 } },
                    { text: "ความขัดแย้งระหว่างแฟนที่มากเกินไป", teams: { fulham: 3, brentford: 3, crystal_palace: 2, luton: 2 } }
                ]
            },
            {
                text: "คุณดูฟุตบอลเมื่อไหร่เป็นหลัก？",
                options: [
                    { text: "บ่ายวันหยุดอย่างผ่อนคลาย", teams: { fulham: 2, brentford: 2, brighton: 2, crystal_palace: 2 } },
                    { text: "ช่วงเย็นอย่างตั้งใจ", teams: { man_city: 2, arsenal: 2, chelsea: 2, tottenham: 2 } },
                    { text: "เมื่อไหร่ที่มีเวลาว่าง", teams: { liverpool: 2, man_united: 2, west_ham: 2, aston_villa: 2 } },
                    { text: "แม้ตี 4 ก็ดูด้วยความกระตือรือร้น", teams: { newcastle: 3, wolves: 2, burnley: 2, luton: 2 } }
                ]
            },
            {
                text: "เมื่อนักเตะย้ายไปทีมอื่น คุณรู้สึกอย่างไร？",
                options: [
                    { text: "รู้สึกถูกทรยศ", teams: { liverpool: 2, man_united: 2, arsenal: 2, tottenham: 2 } },
                    { text: "เสียใจแต่เข้าใจ", teams: { brighton: 3, fulham: 2, brentford: 2, crystal_palace: 2 } },
                    { text: "คิดว่าเป็นธุรกิจ", teams: { man_city: 3, chelsea: 3, west_ham: 2, wolves: 2 } },
                    { text: "คาดหวังนักเตะใหม่", teams: { arsenal: 2, tottenham: 2, aston_villa: 2, newcastle: 2 } }
                ]
            },
            {
                text: "คอนเทนต์สื่อฟุตบอลที่คุณชอบ？",
                options: [
                    { text: "ไฮไลท์และรวมประตู", teams: { man_city: 2, liverpool: 2, arsenal: 2, chelsea: 2 } },
                    { text: "การวิเคราะห์ยุทธวิธีและการแก้ไข", teams: { man_city: 3, arsenal: 2, brighton: 3, brentford: 2 } },
                    { text: "สัมภาษณ์นักเตะและเบื้องหลัง", teams: { liverpool: 2, man_united: 2, tottenham: 2, aston_villa: 2 } },
                    { text: "ปฏิกิริยาแฟนและชุมชน", teams: { newcastle: 3, west_ham: 2, crystal_palace: 2, fulham: 2 } }
                ]
            },
            {
                text: "สิ่งที่น่าสนใจที่สุดในพรีเมียร์ลีก？",
                options: [
                    { text: "ระดับสูงและความเร็ว", teams: { man_city: 3, liverpool: 3, arsenal: 2, chelsea: 2 } },
                    { text: "ผลลัพธ์ที่คาดเดาไม่ได้", teams: { tottenham: 3, west_ham: 2, wolves: 2, crystal_palace: 2 } },
                    { text: "การรวมตัวของนักเตะระดับโลก", teams: { man_city: 2, chelsea: 3, man_united: 2, arsenal: 2 } },
                    { text: "วัฒนธรรมแฟนที่เร่าร้อน", teams: { liverpool: 2, newcastle: 3, west_ham: 2, aston_villa: 2 } }
                ]
            },
            {
                text: "สุดท้าย ฟุตบอลคืออะไรสำหรับคุณ？",
                options: [
                    { text: "ความสุขและความหลงใหลที่ยิ่งใหญ่ในชีวิต", teams: { liverpool: 3, man_united: 2, newcastle: 3, west_ham: 2 } },
                    { text: "การคลายเครียดและความบันเทิง", teams: { brighton: 2, fulham: 2, brentford: 2, crystal_palace: 2 } },
                    { text: "วิธีการสื่อสารกับเพื่อน", teams: { tottenham: 2, aston_villa: 2, wolves: 2, luton: 2 } },
                    { text: "ศิลปะและกีฬาที่สวยงาม", teams: { man_city: 3, arsenal: 3, chelsea: 2, brighton: 2 } }
                ]
            }
        ]
    }
};

// Team data
const teams = {
    man_city: {
        name: { ko: "맨체스터 시티", en: "Manchester City", zh: "曼城", ja: "マンチェスター・シティ", th: "แมนเชสเตอร์ ซิตี้" },
        description: {
            ko: "현대 축구의 정점을 보여주는 팀. 완벽한 전술과 화려한 플레이로 많은 팬들을 매료시키고 있습니다.",
            en: "A team that represents the pinnacle of modern football with perfect tactics and spectacular play.",
            zh: "代表现代足球巅峰的球队，以完美的战术和华丽的比赛吸引众多球迷。",
            ja: "現代サッカーの頂点を示すチーム。完璧な戦術と華麗なプレーで多くのファンを魅了している。",
            th: "ทีมที่แสดงจุดสูงสุดของฟุตบอลสมัยใหม่ด้วยยุทธวิธีที่สมบูรณ์แบบและการเล่นที่น่าตื่นตา"
        },
        logo: "./img/ManchesterCity.png",
        stats: {
            ko: {
                "설립년도": "1880년",
                "홈구장": "에티하드 스타디움",
                "별명": "시티즌스",
                "최근 성과": "프리미어리그 우승 (23-24)"
            },
            en: {
                "Founded": "1880",
                "Home Ground": "Etihad Stadium",
                "Nickname": "Citizens",
                "Recent Achievement": "Premier League Champions (23-24)"
            },
            zh: {
                "成立年份": "1880年",
                "主场": "阿提哈德球场",
                "昵称": "市民",
                "最近成就": "英超冠军 (23-24)"
            },
            ja: {
                "設立年": "1880年",
                "ホームスタジアム": "エティハド・スタジアム",
                "愛称": "シティズンズ",
                "最近の成果": "プレミアリーグ優勝 (23-24)"
            },
            th: {
                "ก่อตั้ง": "1880",
                "สนามเหย้า": "เอติฮัด สเตเดียม",
                "ชื่อเล่น": "ซิตี้เซนส์",
                "ผลงานล่าสุด": "แชมป์พรีเมียร์ลีก (23-24)"
            }
        },
        attributes: { attack: 95, defense: 85, tradition: 60, passion: 75, tactics: 95, entertainment: 85 }
    },
    liverpool: {
        name: { ko: "리버풀", en: "Liverpool", zh: "利物浦", ja: "リバプール", th: "ลิเวอร์พูล" },
        description: {
            ko: "역사와 전통이 깊은 명문 클럽. '유 윌 네버 워크 얼론'의 정신으로 뭉친 열정적인 팬들과 함께합니다.",
            en: "A prestigious club with deep history and tradition, united with passionate fans under 'You'll Never Walk Alone'.",
            zh: "历史悠久、传统深厚的名门俱乐部，与充满激情的球迷一起秉承'你永远不会独行'的精神。",
            ja: "歴史と伝統の深い名門クラブ。'You'll Never Walk Alone'の精神で結ばれた情熱的なファンと共にある。",
            th: "สโมสรชื่อดังที่มีประวัติศาสตร์และประเพณีอันยาวนาน รวมตัวกับแฟนบอลที่เร่าร้อนภายใต้จิตวิญญาณ 'You'll Never Walk Alone'"
        },
        logo: "./img/Liverpool.png",
        stats: {
            ko: {
                "설립년도": "1892년",
                "홈구장": "안필드",
                "별명": "더 레즈",
                "최근 성과": "프리미어리그 3위 (23-24)"
            },
            en: {
                "Founded": "1892",
                "Home Ground": "Anfield",
                "Nickname": "The Reds",
                "Recent Achievement": "3rd in Premier League (23-24)"
            },
            zh: {
                "成立年份": "1892年",
                "主场": "安菲尔德",
                "昵称": "红军",
                "最近成就": "英超第3名 (23-24)"
            },
            ja: {
                "設立年": "1892年",
                "ホームスタジアム": "アンフィールド",
                "愛称": "ザ・レッズ",
                "最近の成果": "プレミアリーグ3位 (23-24)"
            },
            th: {
                "ก่อตั้ง": "1892",
                "สนามเหย้า": "แอนฟิลด์",
                "ชื่อเล่น": "เดอะ เรดส์",
                "ผลงานล่าสุด": "อันดับ 3 พรีเมียร์ลีก (23-24)"
            }
        },
        attributes: { attack: 90, defense: 80, tradition: 95, passion: 95, tactics: 85, entertainment: 90 }
    },
    arsenal: {
        name: { ko: "아스날", en: "Arsenal", zh: "阿森纳", ja: "アーセナル", th: "อาร์เซนอล" },
        description: {
            ko: "아름다운 축구로 유명한 북런던의 자랑. 젊은 선수들과 함께 새로운 도약을 준비하고 있습니다.",
            en: "North London's pride known for beautiful football, preparing for a new leap with young players.",
            zh: "以美丽足球著称的北伦敦骄傲，正与年轻球员一起准备新的飞跃。",
            ja: "美しいサッカーで有名な北ロンドンの誇り。若い選手たちと共に新たな飛躍を準備している。",
            th: "ความภาคภูมิใจของลอนดอนเหนือที่มีชื่อเสียงในเรื่องฟุตบอลที่สวยงาม กำลังเตรียมตัวสำหรับการก้าวกระโดดครั้งใหม่กับนักเตะรุ่นเยาว์"
        },
        logo: "./img/Arsenal.png",
        stats: {
            ko: {
                "설립년도": "1886년",
                "홈구장": "에미레이츠 스타디움",
                "별명": "거너스",
                "최근 성과": "프리미어리그 2위 (23-24)"
            },
            en: {
                "Founded": "1886",
                "Home Ground": "Emirates Stadium",
                "Nickname": "Gunners",
                "Recent Achievement": "2nd in Premier League (23-24)"
            },
            zh: {
                "成立年份": "1886年",
                "主场": "酋长球场",
                "昵称": "枪手",
                "最近成就": "英超第2名 (23-24)"
            },
            ja: {
                "設立年": "1886年",
                "ホームスタジアム": "エミレーツ・スタジアム",
                "愛称": "ガナーズ",
                "最近の成果": "プレミアリーグ2位 (23-24)"
            },
            th: {
                "ก่อตั้ง": "1886",
                "สนามเหย้า": "เอมิเรตส์ สเตเดียม",
                "ชื่อเล่น": "กันเนอร์ส",
                "ผลงานล่าสุด": "อันดับ 2 พรีเมียร์ลีก (23-24)"
            }
        },
        attributes: { attack: 85, defense: 75, tradition: 85, passion: 80, tactics: 90, entertainment: 85 }
    },
    man_united: {
        name: { ko: "맨체스터 유나이티드", en: "Manchester United", zh: "曼联", ja: "マンチェスター・ユナイテッド", th: "แมนเชสเตอร์ ยูไนเต็ด" },
        description: {
            ko: "영국 축구의 상징적인 클럽. 글로벌 팬베이스와 함께 다시 한 번 정상 복귀를 노리고 있습니다.",
            en: "An iconic club in English football, aiming to return to the top with a global fanbase.",
            zh: "英格兰足球的标志性俱乐部，正与全球球迷基础一起力争重返巅峰。",
            ja: "イングランドサッカーの象徴的なクラブ。グローバルなファンベースと共に再び頂点復帰を狙っている。",
            th: "สโมสรที่เป็นสัญลักษณ์ของฟุตบอลอังกฤษ กำลังมุ่งหวังที่จะกลับสู่จุดสูงสุดพร้อมกับฐานแฟนทั่วโลก"
        },
        logo: "./img/ManchesterUnited.png",
        stats: {
            ko: {
                "설립년도": "1878년",
                "홈구장": "올드 트래포드",
                "별명": "레드 데빌스",
                "최근 성과": "프리미어리그 8위 (23-24)"
            },
            en: {
                "Founded": "1878",
                "Home Ground": "Old Trafford",
                "Nickname": "Red Devils",
                "Recent Achievement": "8th in Premier League (23-24)"
            },
            zh: {
                "成立年份": "1878年",
                "主场": "老特拉福德",
                "昵称": "红魔",
                "最近成就": "英超第8名 (23-24)"
            },
            ja: {
                "設立年": "1878年",
                "ホームスタジアム": "オールド・トラッフォード",
                "愛称": "レッドデビルズ",
                "最近の成果": "プレミアリーグ8位 (23-24)"
            },
            th: {
                "ก่อตั้ง": "1878",
                "สนามเหย้า": "โอลด์ แทรฟฟอร์ด",
                "ชื่อเล่น": "เรด เดวิลส์",
                "ผลงานล่าสุด": "อันดับ 8 พรีเมียร์ลีก (23-24)"
            }
        },
        attributes: { attack: 75, defense: 80, tradition: 95, passion: 90, tactics: 75, entertainment: 80 }
    },
    chelsea: {
        name: { ko: "첼시", en: "Chelsea", zh: "切尔西", ja: "チェルシー", th: "เชลซี" },
        description: {
            ko: "런던을 대표하는 블루스. 강력한 재정력을 바탕으로 세계 최고의 선수들과 함께합니다.",
            en: "London's Blues with strong financial power, playing alongside the world's best players.",
            zh: "代表伦敦的蓝军，凭借强大的财力与世界顶级球员并肩作战。",
            ja: "ロンドンを代表するブルース。強力な財政力を背景に世界最高の選手たちと共にプレーしている。",
            th: "บลูส์แห่งลอนดอนที่มีพลังทางการเงินอันแข็งแกร่ง เล่นเคียงข้างกับนักเตะระดับโลก"
        },
        logo: "./img/Chelsea.png",
        stats: {
            ko: {
                "설립년도": "1905년",
                "홈구장": "스탬포드 브리지",
                "별명": "더 블루스",
                "최근 성과": "프리미어리그 6위 (23-24)"
            },
            en: {
                "Founded": "1905",
                "Home Ground": "Stamford Bridge",
                "Nickname": "The Blues",
                "Recent Achievement": "6th in Premier League (23-24)"
            },
            zh: {
                "成立年份": "1905年",
                "主场": "斯坦福桥",
                "昵称": "蓝军",
                "最近成就": "英超第6名 (23-24)"
            },
            ja: {
                "設立年": "1905年",
                "ホームスタジアム": "スタンフォード・ブリッジ",
                "愛称": "ザ・ブルース",
                "最近の成果": "プレミアリーグ6位 (23-24)"
            },
            th: {
                "ก่อตั้ง": "1905",
                "สนามเหย้า": "สแตมฟอร์ด บริดจ์",
                "ชื่อเล่น": "เดอะ บลูส์",
                "ผลงานล่าสุด": "อันดับ 6 พรีเมียร์ลีก (23-24)"
            }
        },
        attributes: { attack: 80, defense: 75, tradition: 70, passion: 75, tactics: 85, entertainment: 80 }
    },
    tottenham: {
        name: { ko: "토트넘", en: "Tottenham", zh: "热刺", ja: "トッテナム", th: "ท็อตแน่ม" },
        description: {
            ko: "화려한 공격축구로 팬들을 즐겁게 하는 팀. 항상 예상치 못한 드라마를 선사합니다.",
            en: "A team that entertains fans with spectacular attacking football, always delivering unexpected drama.",
            zh: "以华丽攻击足球娱乐球迷的球队，总是带来意想不到的戏剧性。",
            ja: "華麗な攻撃サッカーでファンを楽しませるチーム。常に予想外のドラマを提供する。",
            th: "ทีมที่สร้างความบันเทิงให้แฟนบอลด้วยฟุตบอลจู่โจมที่งดงาม มักจะมอบความน่าตื่นเต้นที่ไม่คาดคิด"
        },
        logo: "./img/Tottenham.png",
        stats: {
            ko: {
                "설립년도": "1882년",
                "홈구장": "토트넘 홋스퍼 스타디움",
                "별명": "스퍼스",
                "최근 성과": "프리미어리그 5위 (23-24)"
            },
            en: {
                "Founded": "1882",
                "Home Ground": "Tottenham Hotspur Stadium",
                "Nickname": "Spurs",
                "Recent Achievement": "5th in Premier League (23-24)"
            },
            zh: {
                "成立年份": "1882年",
                "主场": "托特纳姆热刺球场",
                "昵称": "热刺",
                "最近成就": "英超第5名 (23-24)"
            },
            ja: {
                "設立年": "1882年",
                "ホームスタジアム": "トッテナム・ホットスパー・スタジアム",
                "愛称": "スパーズ",
                "最近の成果": "プレミアリーグ5位 (23-24)"
            },
            th: {
                "ก่อตั้ง": "1882",
                "สนามเหย้า": "ท็อตแน่ม ฮ็อทสเปอร์ สเตเดียม",
                "ชื่อเล่น": "สเปอร์ส",
                "ผลงานล่าสุด": "อันดับ 5 พรีเมียร์ลีก (23-24)"
            }
        },
        attributes: { attack: 85, defense: 65, tradition: 75, passion: 85, tactics: 75, entertainment: 90 }
    },
    newcastle: {
        name: { ko: "뉴캐슬", en: "Newcastle", zh: "纽卡斯尔", ja: "ニューカッスル", th: "นิวคาสเซิล" },
        description: {
            ko: "열정적인 지역 팬들과 함께하는 마그파이즈. 새로운 투자로 더 큰 꿈을 키우고 있습니다.",
            en: "The Magpies with passionate local fans, growing bigger dreams with new investment.",
            zh: "与充满激情的当地球迷一起的喜鹊，正通过新投资培育更大的梦想。",
            ja: "情熱的な地元ファンと共にあるマグパイズ。新しい投資でより大きな夢を育てている。",
            th: "แมกพายส์พร้อมแฟนบอลท้องถิ่นที่เร่าร้อน กำลังเติบโตความฝันที่ใหญ่ขึ้นด้วยการลงทุนใหม่"
        },
        logo: "./img/Newcastle.png",
        stats: {
            ko: {
                "설립년도": "1892년",
                "홈구장": "세인트 제임스 파크",
                "별명": "마그파이즈",
                "최근 성과": "프리미어리그 7위 (23-24)"
            }
        },
        attributes: { attack: 70, defense: 80, tradition: 80, passion: 95, tactics: 75, entertainment: 75 }
    },
    west_ham: {
        name: { ko: "웨스트햄", en: "West Ham", zh: "西汉姆", ja: "ウェストハム", th: "เวสต์แฮม" },
        description: {
            ko: "런던 이스트의 자랑스러운 해머스. 끈끈한 팬 문화와 투철한 정신력을 자랑합니다.",
            en: "East London's proud Hammers, boasting strong fan culture and unwavering spirit.",
            zh: "东伦敦骄傲的铁锤帮，拥有浓厚的球迷文化和坚韧不拔的精神。",
            ja: "イーストロンドンの誇り高いハマーズ。結束の強いファン文化と不屈の精神を誇る。",
            th: "แฮมเมอร์ส์ที่เป็นความภาคภูมิใจของลอนดอนตะวันออก มีวัฒนธรรมแฟนบอลที่แน่นแฟ้นและจิตวิญญาณที่ไม่หวั่นไหว"
        },
        logo: "./img/WestHam.png",
        stats: {
            ko: {
                "설립년도": "1895년",
                "홈구장": "런던 스타디움",
                "별명": "해머스",
                "최근 성과": "프리미어리그 9위 (23-24)"
            }
        },
        attributes: { attack: 75, defense: 75, tradition: 85, passion: 90, tactics: 70, entertainment: 80 }
    },
    aston_villa: {
        name: { ko: "아스톤 빌라", en: "Aston Villa", zh: "阿斯顿维拉", ja: "アストン・ヴィラ", th: "แอสตัน วิลล่า" },
        description: {
            ko: "버밍엄의 명문 클럽. 깊은 역사를 가진 전통 있는 팀으로 새로운 도약을 준비 중입니다.",
            en: "Birmingham's prestigious club with deep history, preparing for a new leap as a traditional team.",
            zh: "伯明翰的名门俱乐部，作为拥有深厚历史的传统球队正在准备新的飞跃。",
            ja: "バーミンガムの名門クラブ。深い歴史を持つ伝統的なチームとして新たな飛躍を準備中。",
            th: "สโมสรชื่อดังของเบอร์มิงแฮม ทีมดั้งเดิมที่มีประวัติศาสตร์อันยาวนาน กำลังเตรียมพร้อมสำหรับการก้าวกระโดดใหม่"
        },
        logo: "./img/aston.png",
        stats: {
            ko: {
                "설립년도": "1874년",
                "홈구장": "빌라 파크",
                "별명": "빌란스",
                "최근 성과": "프리미어리그 4위 (23-24)"
            }
        },
        attributes: { attack: 80, defense: 75, tradition: 90, passion: 85, tactics: 75, entertainment: 80 }
    },
    brighton: {
        name: { ko: "브라이튼", en: "Brighton", zh: "布莱顿", ja: "ブライトン", th: "ไบรท์ตัน" },
        description: {
            ko: "혁신적인 전술과 스마트한 운영으로 주목받는 팀. 작지만 강한 갈매기들의 도전이 계속됩니다.",
            en: "A team gaining attention with innovative tactics and smart management. The small but strong Seagulls continue their challenge.",
            zh: "以创新战术和聪明运营而备受关注的球队。虽小但强的海鸥们继续他们的挑战。",
            ja: "革新的な戦術とスマートな運営で注目を集めるチーム。小さくとも強いシーガルズの挑戦が続く。",
            th: "ทีมที่ได้รับความสนใจด้วยยุทธวิธีที่นวัตกรรมและการจัดการที่ชาญฉลาด นกนางนวลที่เล็กแต่แข็งแกร่งยังคงความท้าทายต่อไป"
        },
        logo: "./img/brighten.png",
        stats: {
            ko: {
                "설립년도": "1901년",
                "홈구장": "파루머 스타디움",
                "별명": "시걸스",
                "최근 성과": "프리미어리그 11위 (23-24)"
            },
            en: {
                "Founded": "1901",
                "Home Ground": "Falmer Stadium",
                "Nickname": "Seagulls",
                "Recent Achievement": "11th in Premier League (23-24)"
            },
            zh: {
                "成立年份": "1901年",
                "主场": "法尔默球场",
                "昵称": "海鸥",
                "最近成就": "英超第11名 (23-24)"
            },
            ja: {
                "設立年": "1901年",
                "ホームスタジアム": "ファルマー・スタジアム",
                "愛称": "シーガルズ",
                "最近の成果": "プレミアリーグ11位 (23-24)"
            },
            th: {
                "ก่อตั้ง": "1901",
                "สนามเหย้า": "ฟาลเมอร์ สเตเดียม",
                "ชื่อเล่น": "นกนางนวล",
                "ผลงานล่าสุด": "อันดับ 11 พรีเมียร์ลีก (23-24)"
            }
        },
        attributes: { attack: 70, defense: 70, tradition: 50, passion: 75, tactics: 90, entertainment: 75 }
    },
    fulham: {
        name: { ko: "풀럼", en: "Fulham", zh: "富勒姆", ja: "フラム", th: "ฟูแล่ม" },
        description: {
            ko: "템스강변의 아름다운 크레이븐 코티지를 홈으로 하는 평화로운 팀. 꾸준함이 무기입니다.",
            en: "A peaceful team with the beautiful Craven Cottage by the Thames as home. Consistency is their strength.",
            zh: "以泰晤士河畔美丽的克拉文别墅为主场的平和球队。稳定性是他们的武器。",
            ja: "テムズ川沿いの美しいクレイヴン・コテージをホームとする平和なチーム。一貫性が武器。",
            th: "ทีมที่สงบสุขซึ่งมีเครเวน คอตเทจที่สวยงามริมแม่น้ำเทมส์เป็นบ้าน ความมั่นคงคือจุดแข็งของพวกเขา"
        },
        logo: "./img/Fulham.png",
        stats: {
            ko: {
                "설립년도": "1879년",
                "홈구장": "크레이븐 코티지",
                "별명": "코테이저스",
                "최근 성과": "프리미어리그 13위 (23-24)"
            }
        },
        attributes: { attack: 65, defense: 70, tradition: 75, passion: 70, tactics: 75, entertainment: 70 }
    }
};

// Current state
let currentLanguage = 'ko';
let currentQuestionIndex = 0;
let userAnswers = [];
let teamScores = {};

// Initialize team scores
Object.keys(teams).forEach(team => {
    teamScores[team] = 0;
});

// Initialize app
function initializeApp() {
    // Check URL parameters for language
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && translations[langParam]) {
        currentLanguage = langParam;
        document.getElementById('languageSelect').value = currentLanguage;
    }
    
    updateLanguage();
    
    // Make sure we start with the intro screen, not the quiz
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'none';
}

// Change language
function changeLanguage() {
    currentLanguage = document.getElementById('languageSelect').value;
    updateLanguage();
    
    // Update URL
    const url = new URL(window.location);
    url.searchParams.set('lang', currentLanguage);
    window.history.replaceState({}, '', url);
}

// Update UI text based on language
function updateLanguage() {
    const t = translations[currentLanguage];
    
    document.getElementById('mainTitle').textContent = t.mainTitle;
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('homeText').textContent = t.homeText;
    document.getElementById('curiosityText1').textContent = t.curiosityText1;
    document.getElementById('curiosityText2').textContent = t.curiosityText2;
    document.getElementById('curiosityText3').textContent = t.curiosityText3;
    document.getElementById('startButtonText').textContent = t.startButtonText;
    document.getElementById('nextButton').textContent = t.nextButton;
    document.getElementById('totalQuestions').textContent = t.questions.length;
    
    // Update meta tags
    document.title = t.mainTitle;
    document.querySelector('meta[name="description"]').content = t.subtitle;
    
    // Show current question only if quiz is already active
    if (document.getElementById('quizSection').style.display === 'block') {
        showQuestion();
    }
}

// Show question
function showQuestion() {
    const t = translations[currentLanguage];
    const question = t.questions[currentQuestionIndex];
    
    if (!question) {
        showResult();
        return;
    }
    
    document.getElementById('questionNumber').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.text;
    
    const optionsContainer = document.getElementById('answerOptions');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'answer-option';
        optionElement.textContent = option.text;
        optionElement.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionElement);
    });
    
    // Update progress
    const progress = ((currentQuestionIndex) / t.questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Disable next button
    document.getElementById('nextButton').disabled = true;
    
    // Add animation
    document.querySelector('.question-container').classList.add('fade-in');
}

// Select answer
function selectAnswer(optionIndex) {
    // Remove previous selection
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    document.querySelectorAll('.answer-option')[optionIndex].classList.add('selected');
    
    // Store answer
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Enable next button
    document.getElementById('nextButton').disabled = false;
}

// Next question
function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) return;
    
    // Update team scores
    const t = translations[currentLanguage];
    const question = t.questions[currentQuestionIndex];
    const selectedOption = question.options[userAnswers[currentQuestionIndex]];
    
    Object.keys(selectedOption.teams).forEach(team => {
        teamScores[team] += selectedOption.teams[team];
    });
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < t.questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Show result
function showResult() {
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'block';
    
    // Find team with highest score
    let maxScore = 0;
    let selectedTeam = 'man_city';
    
    Object.keys(teamScores).forEach(team => {
        if (teamScores[team] > maxScore) {
            maxScore = teamScores[team];
            selectedTeam = team;
        }
    });
    
    const team = teams[selectedTeam];
    const t = translations[currentLanguage];
    
    // Calculate match percentage
    const totalPossibleScore = Object.keys(t.questions).length * 3;
    const matchPercentage = Math.round((maxScore / totalPossibleScore) * 100);
    
    // Update result UI
    updateResultUI(team, t, matchPercentage);
    
    // Create team info section
    createTeamInfoSection(team, t);
    
    // Create why this team section
    createWhyThisTeamSection(team, t);
    
    // Add animation
    document.getElementById('resultSection').classList.add('slide-up');
}

// Update result UI
function updateResultUI(team, t, matchPercentage) {
    document.getElementById('resultTitle').textContent = t.resultTitle;
    document.getElementById('teamName').textContent = team.name[currentLanguage];
    document.getElementById('teamDescription').textContent = team.description[currentLanguage];
    document.getElementById('teamLogo').src = team.logo;
    document.getElementById('matchPercentage').textContent = matchPercentage + '%';
    document.getElementById('chartTitle').textContent = t.chartTitle;
    document.getElementById('statsTitle').textContent = t.statsTitle;
    document.getElementById('shareTitle').textContent = t.shareTitle;
    document.getElementById('restartButton').textContent = t.restartButton;
    
    // Update all the new elements
    updateNewElementTexts(t);
}

// Create team info section
function createTeamInfoSection(team, t) {
    const teamInfoTexts = {
        ko: {
            teamInfoTitle: "팀에 대해 더 알아보기",
            historyTitle: "역사와 전통",
            playingStyleTitle: "경기 스타일", 
            fanCultureTitle: "팬 문화"
        },
        en: {
            teamInfoTitle: "Learn More About The Team",
            historyTitle: "History & Tradition",
            playingStyleTitle: "Playing Style",
            fanCultureTitle: "Fan Culture"
        },
        zh: {
            teamInfoTitle: "了解更多关于球队",
            historyTitle: "历史与传统",
            playingStyleTitle: "比赛风格",
            fanCultureTitle: "球迷文化"
        },
        ja: {
            teamInfoTitle: "チームについてもっと知る",
            historyTitle: "歴史と伝統",
            playingStyleTitle: "プレースタイル",
            fanCultureTitle: "ファン文化"
        },
        th: {
            teamInfoTitle: "เรียนรู้เพิ่มเติมเกี่ยวกับทีม",
            historyTitle: "ประวัติและประเพณี",
            playingStyleTitle: "รูปแบบการเล่น",
            fanCultureTitle: "วัฒนธรรมแฟนบอล"
        }
    };

    const texts = teamInfoTexts[currentLanguage] || teamInfoTexts.ko;
    
    document.getElementById('teamInfoTitle').textContent = texts.teamInfoTitle;
    document.getElementById('historyTitle').textContent = texts.historyTitle;
    document.getElementById('playingStyleTitle').textContent = texts.playingStyleTitle;
    document.getElementById('fanCultureTitle').textContent = texts.fanCultureTitle;
    
    // Add team-specific content based on team
    const teamSpecificInfo = getTeamSpecificInfo(team, currentLanguage);
    document.getElementById('historyDesc').textContent = teamSpecificInfo.history;
    document.getElementById('playingStyleDesc').textContent = teamSpecificInfo.playingStyle;
    document.getElementById('fanCultureDesc').textContent = teamSpecificInfo.fanCulture;
}

// Create why this team section
function createWhyThisTeamSection(team, t) {
    const whyTeamTexts = {
        ko: {
            whyTeamTitle: "왜 이 팀이 나와 잘 맞을까요?",
            reason1Title: "성향 매칭",
            reason1Desc: "당신의 답변을 분석한 결과, 이 팀의 철학과 가장 잘 맞습니다.",
            reason2Title: "스타일 적합성", 
            reason2Desc: "당신이 선호하는 축구 스타일과 이 팀의 플레이 방식이 일치합니다.",
            reason3Title: "팬 문화",
            reason3Desc: "이 팀의 팬 문화와 당신의 성격이 잘 어울립니다."
        },
        en: {
            whyTeamTitle: "Why This Team Matches You?",
            reason1Title: "Personality Match",
            reason1Desc: "Based on your answers, this team's philosophy matches you best.",
            reason2Title: "Style Compatibility",
            reason2Desc: "Your preferred football style aligns with this team's playing approach.",
            reason3Title: "Fan Culture",
            reason3Desc: "This team's fan culture suits your personality well."
        },
        zh: {
            whyTeamTitle: "为什么这支球队适合你？",
            reason1Title: "性格匹配",
            reason1Desc: "根据您的回答分析，这支球队的理念最符合您。",
            reason2Title: "风格兼容性",
            reason2Desc: "您偏好的足球风格与这支球队的比赛方式一致。",
            reason3Title: "球迷文化",
            reason3Desc: "这支球队的球迷文化很适合您的性格。"
        },
        ja: {
            whyTeamTitle: "なぜこのチームがあなたに合うのか？",
            reason1Title: "性格マッチ",
            reason1Desc: "あなたの回答を分析した結果、このチームの哲学が最も合っています。",
            reason2Title: "スタイル適合性",
            reason2Desc: "あなたが好むサッカースタイルとこのチームのプレー方式が一致します。",
            reason3Title: "ファン文化",
            reason3Desc: "このチームのファン文化があなたの性格によく合います。"
        },
        th: {
            whyTeamTitle: "ทำไมทีมนี้เหมาะกับคุณ？",
            reason1Title: "การจับคู่บุคลิกภาพ",
            reason1Desc: "จากการวิเคราะห์คำตอบของคุณ ปรัชญาของทีมนี้เข้ากับคุณมากที่สุด",
            reason2Title: "ความเข้ากันได้ของสไตล์",
            reason2Desc: "สไตล์ฟุตบอลที่คุณชอบสอดคล้องกับวิธีการเล่นของทีมนี้",
            reason3Title: "วัฒนธรรมแฟนบอล",
            reason3Desc: "วัฒนธรรมแฟนบอลของทีมนี้เหมาะกับบุคลิกภาพของคุณ"
        }
    };

    const texts = whyTeamTexts[currentLanguage] || whyTeamTexts.ko;
    
    document.getElementById('whyTeamTitle').textContent = texts.whyTeamTitle;
    document.getElementById('reason1Title').textContent = texts.reason1Title;
    document.getElementById('reason1Desc').textContent = texts.reason1Desc;
    document.getElementById('reason2Title').textContent = texts.reason2Title;
    document.getElementById('reason2Desc').textContent = texts.reason2Desc;
    document.getElementById('reason3Title').textContent = texts.reason3Title;
    document.getElementById('reason3Desc').textContent = texts.reason3Desc;
}

// Get team-specific information
function getTeamSpecificInfo(team, language) {
    const teamInfo = {
        man_city: {
            ko: {
                history: "2008년 아부다비 유나이티드 그룹 인수 후 현대 축구의 새로운 강자로 부상했습니다. 혁신적인 시설과 전술로 유명합니다.",
                playingStyle: "펩 과르디올라의 철학이 담긴 점유율 기반 티키타카와 빠른 패스 플레이가 특징입니다.",
                fanCulture: "전통적인 맨체스터 지역 팬들과 새로운 글로벌 팬들이 조화를 이루며 열정적인 응원을 보여줍니다."
            },
            en: {
                history: "Emerged as a modern football powerhouse after the 2008 acquisition by Abu Dhabi United Group, known for innovative facilities and tactics.",
                playingStyle: "Features possession-based tiki-taka and quick passing play embodying Pep Guardiola's philosophy.",
                fanCulture: "Traditional local Manchester fans and new global supporters come together in passionate support."
            }
        },
        liverpool: {
            ko: {
                history: "1892년 창단된 잉글랜드 축구의 명문 클럽으로, 'You'll Never Walk Alone' 정신으로 유명합니다.",
                playingStyle: "클롭의 게겐프레싱과 강도 높은 압박, 빠른 역습이 특징인 역동적인 축구를 구사합니다.",
                fanCulture: "안필드의 Kop 스탠드는 세계에서 가장 열정적인 축구 응원 문화를 자랑합니다."
            },
            en: {
                history: "Founded in 1892, a prestigious English football club famous for the 'You'll Never Walk Alone' spirit.",
                playingStyle: "Features dynamic football with Klopp's gegenpressing, high-intensity pressing, and quick counter-attacks.",
                fanCulture: "Anfield's Kop stand boasts the most passionate football support culture in the world."
            }
        },
        arsenal: {
            ko: {
                history: "1886년 창단된 북런던의 명문으로, '아름다운 축구'의 대명사입니다. 하이버리에서 에미레이츠로 이전하며 새로운 역사를 써가고 있습니다.",
                playingStyle: "기술적이고 창의적인 패싱 게임과 젊은 선수들의 에너지가 결합된 현대적인 축구를 추구합니다.",
                fanCulture: "지적이고 축구에 대한 이해도가 높은 팬들로 유명하며, 팀의 철학을 중시하는 문화를 가지고 있습니다."
            },
            en: {
                history: "Founded in 1886, a prestigious North London club synonymous with 'beautiful football', writing new history since moving from Highbury to Emirates.",
                playingStyle: "Pursues modern football combining technical and creative passing games with young players' energy.",
                fanCulture: "Famous for intelligent fans with high football understanding, having a culture that values the team's philosophy."
            }
        },
        man_united: {
            ko: {
                history: "1878년 창단된 잉글랜드 축구의 전설적인 클럽으로, 알렉스 퍼거슨 시대의 영광을 되찾기 위해 노력하고 있습니다.",
                playingStyle: "전통적인 윙 플레이와 공격적인 축구를 바탕으로 하되, 현대적인 전술 요소를 접목하려 시도하고 있습니다.",
                fanCulture: "전 세계에서 가장 큰 팬베이스를 보유하고 있으며, '레드 데빌스'라는 별명처럼 열정적이고 충성도 높은 팬 문화를 자랑합니다."
            },
            en: {
                history: "Founded in 1878, a legendary English football club working to regain the glory of the Alex Ferguson era.",
                playingStyle: "Based on traditional wing play and attacking football, attempting to incorporate modern tactical elements.",
                fanCulture: "Boasts the largest fanbase worldwide and passionate, loyal fan culture befitting the 'Red Devils' nickname."
            }
        }
    };

    const defaultInfo = {
        ko: {
            history: "이 팀은 프리미어리그의 독특한 역사와 전통을 가지고 있습니다.",
            playingStyle: "현대 축구의 트렌드를 반영한 전술적 접근을 보여줍니다.",
            fanCulture: "열정적이고 충성도 높은 팬들이 팀을 뒷받침하고 있습니다."
        },
        en: {
            history: "This team has a unique history and tradition in the Premier League.",
            playingStyle: "Shows tactical approach reflecting modern football trends.",
            fanCulture: "Passionate and loyal fans support the team."
        }
    };

    const teamKey = Object.keys(teams).find(key => teams[key] === team);
    return teamInfo[teamKey]?.[language] || teamInfo[teamKey]?.ko || defaultInfo[language] || defaultInfo.ko;
}

// Update new element texts
function updateNewElementTexts(t) {
    const textUpdates = {
        ko: {
            matchPercentageText: "매칭도",
            analysisTitle: "상세 분석",
            playStyleTitle: "플레이 스타일",
            strengthTitle: "강점",
            personalityTitle: "성향",
            fanStyleTitle: "팬 스타일",
            playerRecommendTitle: "추천 선수",
            similarTeamsTitle: "비슷한 성향의 팀들",
            rivalTeamsTitle: "라이벌 팀",
            rivalExplanation: "당신의 성향과 대조적인 팀들입니다.",
            funFactsTitle: "재미있는 사실",
            attackLabel: "공격력",
            defenseLabel: "수비력",
            traditionLabel: "전통",
            passionLabel: "열정",
            tacticsLabel: "전술",
            entertainmentLabel: "재미"
        },
        en: {
            matchPercentageText: "Match Rate",
            analysisTitle: "Detailed Analysis",
            playStyleTitle: "Play Style",
            strengthTitle: "Strengths",
            personalityTitle: "Personality",
            fanStyleTitle: "Fan Style",
            playerRecommendTitle: "Recommended Players",
            similarTeamsTitle: "Similar Teams",
            rivalTeamsTitle: "Rival Teams",
            rivalExplanation: "Teams with contrasting styles to yours.",
            funFactsTitle: "Fun Facts",
            attackLabel: "Attack",
            defenseLabel: "Defense",
            traditionLabel: "Tradition",
            passionLabel: "Passion",
            tacticsLabel: "Tactics",
            entertainmentLabel: "Fun"
        },
        zh: {
            matchPercentageText: "匹配度",
            analysisTitle: "详细分析",
            playStyleTitle: "比赛风格",
            strengthTitle: "优势",
            personalityTitle: "性格",
            fanStyleTitle: "球迷风格",
            playerRecommendTitle: "推荐球员",
            similarTeamsTitle: "相似球队",
            rivalTeamsTitle: "对手球队",
            rivalExplanation: "与您性格形成对比的球队。",
            funFactsTitle: "有趣事实",
            attackLabel: "攻击力",
            defenseLabel: "防守力",
            traditionLabel: "传统",
            passionLabel: "热情",
            tacticsLabel: "战术",
            entertainmentLabel: "乐趣"
        },
        ja: {
            matchPercentageText: "マッチ度",
            analysisTitle: "詳細分析",
            playStyleTitle: "プレースタイル",
            strengthTitle: "強み",
            personalityTitle: "性格",
            fanStyleTitle: "ファンスタイル",
            playerRecommendTitle: "おすすめ選手",
            similarTeamsTitle: "似ているチーム",
            rivalTeamsTitle: "ライバルチーム",
            rivalExplanation: "あなたの性格と対照的なチームです。",
            funFactsTitle: "面白い事実",
            attackLabel: "攻撃力",
            defenseLabel: "守備力",
            traditionLabel: "伝統",
            passionLabel: "情熱",
            tacticsLabel: "戦術",
            entertainmentLabel: "楽しさ"
        },
        th: {
            matchPercentageText: "ความเข้ากัน",
            analysisTitle: "การวิเคราะห์โดยละเอียด",
            playStyleTitle: "สไตล์การเล่น",
            strengthTitle: "จุดแข็ง",
            personalityTitle: "บุคลิกภาพ",
            fanStyleTitle: "สไตล์แฟน",
            playerRecommendTitle: "นักเตะที่แนะนำ",
            similarTeamsTitle: "ทีมที่คล้ายกัน",
            rivalTeamsTitle: "ทีมคู่แข่ง",
            rivalExplanation: "ทีมที่มีสไตล์ตรงข้ามกับคุณ",
            funFactsTitle: "ข้อเท็จจริงที่น่าสนใจ",
            attackLabel: "การโจมตี",
            defenseLabel: "การป้องกัน",
            traditionLabel: "ประเพณี",
            passionLabel: "ความเร่าร้อน",
            tacticsLabel: "ยุทธวิธี",
            entertainmentLabel: "ความสนุก"
        }
    };
    
    const texts = textUpdates[currentLanguage] || textUpdates.ko;
    
    Object.keys(texts).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = texts[key];
        }
    });
}

// Create radar chart
function createRadarChart(attributes, language = 'ko') {
    const canvas = document.getElementById('radarChart');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;
    
    // Multi-language labels
    const chartLabels = {
        ko: ['공격력', '수비력', '전통', '열정', '전술', '재미'],
        en: ['Attack', 'Defense', 'Tradition', 'Passion', 'Tactics', 'Fun'],
        zh: ['攻击力', '防守力', '传统', '热情', '战术', '乐趣'],
        ja: ['攻撃力', '守備力', '伝統', '情熱', '戦術', '楽しさ'],
        th: ['การโจมตี', 'การป้องกัน', 'ประเพณี', 'ความเร่าร้อน', 'ยุทธวิธี', 'ความสนุก']
    };
    
    const labels = chartLabels[language] || chartLabels.ko;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    
    for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radius / 5) * i, 0, 2 * Math.PI);
        ctx.stroke();
    }
    
    // Draw axes
    const angles = [];
    
    for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
        angles.push(angle);
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        // Draw labels with better font for international characters
        ctx.fillStyle = '#333';
        ctx.font = 'bold 13px "Segoe UI", "Malgun Gothic", "Microsoft YaHei", "Hiragino Sans", "Noto Sans Thai", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const labelX = centerX + Math.cos(angle) * (radius + 25);
        const labelY = centerY + Math.sin(angle) * (radius + 25);
        ctx.fillText(labels[i], labelX, labelY);
    }
    
    // Draw data
    ctx.strokeStyle = '#667eea';
    ctx.fillStyle = 'rgba(102, 126, 234, 0.3)';
    ctx.lineWidth = 3;
    
    const values = [
        attributes.attack,
        attributes.defense,
        attributes.tradition,
        attributes.passion,
        attributes.tactics,
        attributes.entertainment
    ];
    
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const value = values[i] / 100;
        const x = centerX + Math.cos(angles[i]) * radius * value;
        const y = centerY + Math.sin(angles[i]) * radius * value;
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Draw points
    ctx.fillStyle = '#667eea';
    for (let i = 0; i < 6; i++) {
        const value = values[i] / 100;
        const x = centerX + Math.cos(angles[i]) * radius * value;
        const y = centerY + Math.sin(angles[i]) * radius * value;
        
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// Show team stats
function showTeamStats(team) {
    const statsContainer = document.getElementById('teamStats');
    const stats = team.stats[currentLanguage] || team.stats.ko;
    
    statsContainer.innerHTML = '';
    
    Object.keys(stats).forEach(key => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        
        const label = document.createElement('span');
        label.className = 'stat-label';
        label.textContent = key;
        
        const value = document.createElement('span');
        value.className = 'stat-value';
        value.textContent = stats[key];
        
        statItem.appendChild(label);
        statItem.appendChild(value);
        statsContainer.appendChild(statItem);
    });
}

// Share functions
function shareToTwitter() {
    const text = `나의 프리미어리그 팀은 ${document.getElementById('teamName').textContent}! 당신도 테스트해보세요!`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
}

function shareToFacebook() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        const t = translations[currentLanguage];
        alert(t.copySuccess);
    });
}

// Show player recommendations
function showPlayerRecommendations(teamKey, t) {
    const players = getRecommendedPlayers(teamKey, currentLanguage);
    const container = document.getElementById('playerGrid');
    if (!container) return;
    
    container.innerHTML = '';
    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.innerHTML = `
            <div class="player-name">${player.name}</div>
            <div class="player-position">${player.position}</div>
            <div class="player-description">${player.description}</div>
        `;
        container.appendChild(playerCard);
    });
}

// Get recommended players
function getRecommendedPlayers(teamKey, lang) {
    const playerData = {
        man_city: {
            ko: [
                { name: "케빈 데 브라위너", position: "미드필더", description: "창의적이고 정확한 패스로 경기를 만들어가는 플레이메이커" },
                { name: "엘링 홀란드", position: "공격수", description: "강력한 피니시와 골 결정력을 가진 현대 축구의 완벽한 스트라이커" },
                { name: "로드리", position: "수비형 미드필더", description: "팀의 밸런스를 맞추고 안정감을 주는 핵심 선수" }
            ],
            en: [
                { name: "Kevin De Bruyne", position: "Midfielder", description: "Playmaker who creates games with creative and accurate passes" },
                { name: "Erling Haaland", position: "Forward", description: "Perfect striker of modern football with powerful finishing and goal-scoring ability" },
                { name: "Rodri", position: "Defensive Midfielder", description: "Key player who balances the team and provides stability" }
            ],
            zh: [
                { name: "凯文·德布劳内", position: "中场", description: "用创造性和精确的传球创造比赛的组织者" },
                { name: "埃尔林·哈兰德", position: "前锋", description: "拥有强大终结能力和进球能力的现代足球完美前锋" },
                { name: "罗德里", position: "防守型中场", description: "平衡球队并提供稳定性的关键球员" }
            ],
            ja: [
                { name: "ケビン・デ・ブライネ", position: "ミッドフィールダー", description: "創造的で正確なパスで試合を作るプレイメーカー" },
                { name: "エルリング・ホーランド", position: "フォワード", description: "強力なフィニッシュとゴール決定力を持つ現代サッカーの完璧なストライカー" },
                { name: "ロドリ", position: "守備的ミッドフィールダー", description: "チームのバランスを取り安定感を与える中心選手" }
            ],
            th: [
                { name: "เควิน เดอ บรอยเนอร์", position: "กองกลาง", description: "ผู้สร้างเกมที่สร้างการเล่นด้วยการส่งบอลที่สร้างสรรค์และแม่นยำ" },
                { name: "เออร์ลิง ฮาแลนด์", position: "กองหน้า", description: "กองหน้าที่สมบูรณ์แบบของฟุตบอลสมัยใหม่ด้วยการยิงที่ทรงพลังและความสามารถในการทำประตู" },
                { name: "โรดรี", position: "กองกลางรับ", description: "นักเตะหลักที่สร้างความสมดุลให้ทีมและให้ความมั่นคง" }
            ]
        },
        man_utd: {
            ko: [
                { name: "브루노 페르난데스", position: "공격형 미드필더", description: "결정적인 순간에 골과 어시스트를 만들어내는 리더" },
                { name: "마르쿠스 래시포드", position: "윙어", description: "빠른 스피드와 강력한 슈팅으로 상대를 위협하는 공격수" },
                { name: "카제미루", position: "수비형 미드필더", description: "경험과 안정감으로 팀의 중심을 잡아주는 베테랑" }
            ],
            en: [
                { name: "Bruno Fernandes", position: "Attacking Midfielder", description: "Leader who creates goals and assists in crucial moments" },
                { name: "Marcus Rashford", position: "Winger", description: "Attacker who threatens opponents with quick speed and powerful shooting" },
                { name: "Casemiro", position: "Defensive Midfielder", description: "Veteran who anchors the team with experience and stability" }
            ],
            zh: [
                { name: "布鲁诺·费尔南德斯", position: "攻击型中场", description: "在关键时刻创造进球和助攻的领袖" },
                { name: "马库斯·拉什福德", position: "边锋", description: "用快速和强力射门威胁对手的攻击手" },
                { name: "卡塞米罗", position: "防守型中场", description: "用经验和稳定性支撑球队的老将" }
            ],
            ja: [
                { name: "ブルーノ・フェルナンデス", position: "攻撃的ミッドフィールダー", description: "決定的な瞬間にゴールとアシストを作り出すリーダー" },
                { name: "マーカス・ラッシュフォード", position: "ウィンガー", description: "素早いスピードと強力なシュートで相手を脅かす攻撃手" },
                { name: "カゼミーロ", position: "守備的ミッドフィールダー", description: "経験と安定感でチームの中心を担うベテラン" }
            ],
            th: [
                { name: "บรูโน่ แฟร์นันเดส", position: "กองกลางโจมตี", description: "ผู้นำที่สร้างประตูและแอสซิสต์ในช่วงเวลาสำคัญ" },
                { name: "มาร์คัส แรชฟอร์ด", position: "ปีกเขว", description: "นักโจมตีที่คุกคามคู่แข่งด้วยความเร็วและการยิงที่ทรงพลัง" },
                { name: "คาเซมิโร่", position: "กองกลางรับ", description: "ผู้เล่นที่มีประสบการณ์ที่ยึดเหนี่ยวทีมด้วยความมั่นคง" }
            ]
        },
        liverpool: {
            ko: [
                { name: "모하메드 살라", position: "윙어", description: "끝없는 열정과 골 감각으로 팀을 이끄는 에이스" },
                { name: "비르질 반 다이크", position: "센터백", description: "강력한 수비력과 리더십으로 팀을 안정시키는 주장" },
                { name: "사디오 마네", position: "윙어", description: "역동적인 움직임과 결정력으로 상대를 압박하는 공격수" }
            ],
            en: [
                { name: "Mohamed Salah", position: "Winger", description: "Ace who leads the team with endless passion and goal sense" },
                { name: "Virgil van Dijk", position: "Centre-back", description: "Captain who stabilizes the team with powerful defense and leadership" },
                { name: "Sadio Mané", position: "Winger", description: "Attacker who pressures opponents with dynamic movement and decisiveness" }
            ],
            zh: [
                { name: "穆罕默德·萨拉赫", position: "边锋", description: "用无尽的激情和进球感觉领导球队的王牌" },
                { name: "维吉尔·范戴克", position: "中卫", description: "用强大的防守和领导力稳定球队的队长" },
                { name: "萨迪奥·马内", position: "边锋", description: "用动态移动和决断力压制对手的攻击手" }
            ],
            ja: [
                { name: "モハメド・サラー", position: "ウィンガー", description: "無限の情熱とゴール感覚でチームを率いるエース" },
                { name: "ヴィルヒル・ファン・ダイク", position: "センターバック", description: "強力な守備力とリーダーシップでチームを安定させるキャプテン" },
                { name: "サディオ・マネ", position: "ウィンガー", description: "ダイナミックな動きと決定力で相手を圧迫する攻撃手" }
            ],
            th: [
                { name: "โมฮาเหม็ด ซาลาห์", position: "ปีกเขว", description: "เอซที่นำทีมด้วยความหลงใหลไม่รู้จบและประสาทการทำประตู" },
                { name: "เวอร์จิล ฟาน ไดค์", position: "กองหลังตัวกลาง", description: "กัปตันที่ทำให้ทีมมั่นคงด้วยการป้องกันที่แข็งแกร่งและความเป็นผู้นำ" },
                { name: "ซาดิโอ มาเน", position: "ปีกเขว", description: "นักโจมตีที่กดดันคู่แข่งด้วยการเคลื่อนไหวที่มีชีวิตชีวาและความเด็ดขาด" }
            ]
        },
        arsenal: {
            ko: [
                { name: "부카요 사카", position: "윙어", description: "젊은 나이에도 불구하고 뛰어난 기술과 창의성을 보여주는 미래의 스타" },
                { name: "마르틴 외데고르", position: "공격형 미드필더", description: "우아한 터치와 정확한 패스로 공격을 조율하는 플레이메이커" },
                { name: "가브리엘 예수스", position: "공격수", description: "빠른 움직임과 다양한 공격 패턴으로 상대를 괴롭히는 스트라이커" }
            ],
            en: [
                { name: "Bukayo Saka", position: "Winger", description: "Future star who shows excellent technique and creativity despite young age" },
                { name: "Martin Ødegaard", position: "Attacking Midfielder", description: "Playmaker who coordinates attacks with elegant touch and accurate passes" },
                { name: "Gabriel Jesus", position: "Forward", description: "Striker who troubles opponents with quick movement and various attacking patterns" }
            ],
            zh: [
                { name: "布卡约·萨卡", position: "边锋", description: "尽管年轻但展现出优秀技术和创造力的未来之星" },
                { name: "马丁·厄德高", position: "攻击型中场", description: "用优雅的触球和精确传球协调攻击的组织者" },
                { name: "加布里埃尔·热苏斯", position: "前锋", description: "用快速移动和多样攻击模式困扰对手的前锋" }
            ],
            ja: [
                { name: "ブカヨ・サカ", position: "ウィンガー", description: "若い年齢にも関わらず優れた技術と創造性を見せる未来のスター" },
                { name: "マルティン・ウーデゴール", position: "攻撃的ミッドフィールダー", description: "優雅なタッチと正確なパスで攻撃を調整するプレイメーカー" },
                { name: "ガブリエウ・ジェズス", position: "フォワード", description: "素早い動きと様々な攻撃パターンで相手を困らせるストライカー" }
            ],
            th: [
                { name: "บูคาโย ซากะ", position: "ปีกเขว", description: "ดาวรุ่งที่แสดงเทคนิคยอดเยี่ยมและความคิดสร้างสรรค์แม้จะยังอายุน้อย" },
                { name: "มาร์ติน เอาเดอการ์ด", position: "กองกลางโจมตี", description: "ผู้สร้างเกมที่ประสานการโจมตีด้วยการสัมผัสที่สง่างามและการส่งบอลที่แม่นยำ" },
                { name: "กาเบรียล เชซุส", position: "กองหน้า", description: "กองหน้าที่สร้างความยุ่งยากให้คู่แข่งด้วยการเคลื่อนไหวที่รวดเร็วและรูปแบบการโจมตีที่หลากหลาย" }
            ]
        },
        chelsea: {
            ko: [
                { name: "은솔로 칸테", position: "수비형 미드필더", description: "끝없는 활동량과 정확한 태클로 상대 공격을 차단하는 수비의 핵심" },
                { name: "메이슨 마운트", position: "공격형 미드필더", description: "창의적인 플레이와 골 결정력을 갖춘 첼시의 미래" },
                { name: "틸로 케어", position: "골키퍼", description: "뛰어난 반사신경과 안정감으로 골문을 지키는 믿음직한 수문장" }
            ],
            en: [
                { name: "N'Golo Kanté", position: "Defensive Midfielder", description: "Core of defense who blocks opponent attacks with endless activity and accurate tackles" },
                { name: "Mason Mount", position: "Attacking Midfielder", description: "Chelsea's future with creative play and goal-scoring ability" },
                { name: "Thiago Silva", position: "Centre-back", description: "Experienced defender who leads the backline with wisdom and stability" }
            ],
            zh: [
                { name: "恩戈洛·坎特", position: "防守型中场", description: "用无尽的活动量和精确的铲球阻挡对手攻击的防守核心" },
                { name: "梅森·芒特", position: "攻击型中场", description: "拥有创造性比赛和进球能力的切尔西未来" },
                { name: "蒂亚戈·席尔瓦", position: "中卫", description: "用智慧和稳定性领导后防线的经验丰富的后卫" }
            ],
            ja: [
                { name: "エンゴロ・カンテ", position: "守備的ミッドフィールダー", description: "無限の活動量と正確なタックルで相手攻撃を遮断する守備の核心" },
                { name: "メイソン・マウント", position: "攻撃的ミッドフィールダー", description: "創造的なプレーとゴール決定力を持つチェルシーの未来" },
                { name: "チアゴ・シウバ", position: "センターバック", description: "知恵と安定感で最終ラインを率いる経験豊富なディフェンダー" }
            ],
            th: [
                { name: "เอ็นโกโล่ คานเต้", position: "กองกลางรับ", description: "แกนกลางการป้องกันที่ปิดกั้นการโจมตีของฝ่ายตรงข้ามด้วยความอดทนไม่รู้จบและการเข้าทำลายที่แม่นยำ" },
                { name: "เมสัน เมาท์", position: "กองกลางโจมตี", description: "อนาคตของเชลซีที่มีการเล่นสร้างสรรค์และความสามารถในการทำประตู" },
                { name: "ติอาโก้ ซิลวา", position: "กองหลังตัวกลาง", description: "กองหลังที่มีประสบการณ์ที่นำแนวรับด้วยปัญญาและความมั่นคง" }
            ]
        },
        tottenham: {
            ko: [
                { name: "해리 케인", position: "공격수", description: "뛰어난 골 결정력과 창의적인 플레이로 팀을 이끄는 주장" },
                { name: "손흥민", position: "윙어", description: "빠른 스피드와 정확한 슈팅으로 상대를 위협하는 아시아의 자랑" },
                { name: "크리스티안 에릭센", position: "공격형 미드필더", description: "정교한 패스와 세트피스로 공격을 만들어내는 마법사" }
            ],
            en: [
                { name: "Harry Kane", position: "Forward", description: "Captain who leads the team with excellent goal-scoring ability and creative play" },
                { name: "Son Heung-min", position: "Winger", description: "Pride of Asia who threatens opponents with quick speed and accurate shooting" },
                { name: "Christian Eriksen", position: "Attacking Midfielder", description: "Magician who creates attacks with precise passes and set pieces" }
            ],
            zh: [
                { name: "哈里·凯恩", position: "前锋", description: "用出色的进球能力和创造性比赛领导球队的队长" },
                { name: "孙兴慜", position: "边锋", description: "用快速和精确射门威胁对手的亚洲骄傲" },
                { name: "克里斯蒂安·埃里克森", position: "攻击型中场", description: "用精确传球和定位球创造攻击的魔术师" }
            ],
            ja: [
                { name: "ハリー・ケイン", position: "フォワード", description: "優れたゴール決定力と創造的なプレーでチームを率いるキャプテン" },
                { name: "ソン・フンミン", position: "ウィンガー", description: "素早いスピードと正確なシュートで相手を脅かすアジアの誇り" },
                { name: "クリスティアン・エリクセン", position: "攻撃的ミッドフィールダー", description: "精密なパスとセットピースで攻撃を作り出す魔術師" }
            ],
            th: [
                { name: "แฮร์รี่ เคน", position: "กองหน้า", description: "กัปตันที่นำทีมด้วยความสามารถในการทำประตูที่ยอดเยี่ยมและการเล่นสร้างสรรค์" },
                { name: "ซน ฮึง-มิน", position: "ปีกเขว", description: "ความภาคภูมิใจของเอเชียที่คุกคามคู่แข่งด้วยความเร็วและการยิงที่แม่นยำ" },
                { name: "คริสเตียน เอริคเซน", position: "กองกลางโจมตี", description: "นักมายากลที่สร้างการโจมตีด้วยการส่งบอลที่แม่นยำและลูกตาย" }
            ]
        },
        leicester: {
            ko: [
                { name: "제이미 바디", position: "공격수", description: "Leicester의 레전드로 강력한 헤딩과 골 결정력을 자랑하는 스트라이커" },
                { name: "윌프레드 은디디", position: "수비형 미드필더", description: "팀의 균형을 맞추고 수비를 안정시키는 핵심 미드필더" },
                { name: "매디슨", position: "공격형 미드필더", description: "창의적인 패스와 프리킥으로 팀 공격을 이끄는 플레이메이커" }
            ],
            en: [
                { name: "Jamie Vardy", position: "Forward", description: "Leicester legend striker with powerful heading and goal-scoring ability" },
                { name: "Wilfred Ndidi", position: "Defensive Midfielder", description: "Key midfielder who balances the team and stabilizes defense" },
                { name: "James Maddison", position: "Attacking Midfielder", description: "Playmaker who leads team attacks with creative passes and free kicks" }
            ],
            zh: [
                { name: "杰米·瓦尔迪", position: "前锋", description: "莱斯特传奇前锋，拥有强大的头球和进球能力" },
                { name: "威尔弗雷德·恩迪迪", position: "防守型中场", description: "平衡球队并稳定防守的关键中场" },
                { name: "詹姆斯·麦迪逊", position: "攻击型中场", description: "用创造性传球和任意球领导球队攻击的组织者" }
            ],
            ja: [
                { name: "ジェイミー・バーディ", position: "フォワード", description: "レスターのレジェンドで強力なヘディングとゴール決定力を誇るストライカー" },
                { name: "ウィルフレッド・ンディディ", position: "守備的ミッドフィールダー", description: "チームのバランスを取り守備を安定させる中心的ミッドフィールダー" },
                { name: "ジェームズ・マディソン", position: "攻撃的ミッドフィールダー", description: "創造的なパスとフリーキックでチーム攻撃を率いるプレイメーカー" }
            ],
            th: [
                { name: "เจมี่ วาร์ดี", position: "กองหน้า", description: "กองหน้าตำนานของเลสเตอร์ที่มีการหัวบอลที่ทรงพลังและความสามารถในการทำประตู" },
                { name: "วิลเฟรด เอ็นดิดี", position: "กองกลางรับ", description: "กองกลางหลักที่สร้างความสมดุลให้ทีมและทำให้การป้องกันมั่นคง" },
                { name: "เจมส์ แมดดิสัน", position: "กองกลางโจมตี", description: "ผู้สร้างเกมที่นำการโจมตีของทีมด้วยการส่งบอลสร้างสรรค์และลูกตาย" }
            ]
        },
        west_ham: {
            ko: [
                { name: "데클란 라이스", position: "수비형 미드필더", description: "젊지만 성숙한 리더십으로 팀의 중심을 담당하는 주장" },
                { name: "미카일 안토니오", position: "공격수", description: "강력한 피지컬과 다재다능함으로 상대 수비를 괴롭히는 공격수" },
                { name: "토마스 수체크", position: "수비수", description: "체코의 거대한 수비수로 공중볼과 세트피스에서 위력을 발휘" }
            ],
            en: [
                { name: "Declan Rice", position: "Defensive Midfielder", description: "Captain who takes charge of the team's core with young but mature leadership" },
                { name: "Michail Antonio", position: "Forward", description: "Attacker who troubles opponent defense with powerful physicality and versatility" },
                { name: "Tomas Soucek", position: "Defender", description: "Czech giant defender who shows power in aerial balls and set pieces" }
            ],
            zh: [
                { name: "德克兰·赖斯", position: "防守型中场", description: "年轻但成熟的队长，担任球队的核心" },
                { name: "米哈伊尔·安东尼奥", position: "前锋", description: "用强大的身体素质和多样性困扰对手防守的攻击手" },
                { name: "托马斯·苏切克", position: "后卫", description: "捷克巨人后卫，在空中球和定位球中展现威力" }
            ],
            ja: [
                { name: "デクラン・ライス", position: "守備的ミッドフィールダー", description: "若いながら成熟したリーダーシップでチームの中心を担うキャプテン" },
                { name: "ミハイル・アントニオ", position: "フォワード", description: "強力なフィジカルと多才さで相手守備を困らせる攻撃手" },
                { name: "トマシュ・スーチェク", position: "ディフェンダー", description: "チェコの巨大な守備選手で空中戦とセットピースで威力を発揮" }
            ],
            th: [
                { name: "เดคลาน ไรซ์", position: "กองกลางรับ", description: "กัปตันที่รับผิดชอบแกนกลางของทีมด้วยความเป็นผู้นำที่เยาว์วัยแต่เป็นผู้ใหญ่" },
                { name: "มิเคล แอนโตนิโอ", position: "กองหน้า", description: "นักโจมตีที่สร้างปัญหาให้การป้องกันของคู่แข่งด้วยความแข็งแกร่งทางกายภาพและความหลากหลาย" },
                { name: "โทมาส ซูเช็ค", position: "กองหลัง", description: "กองหลังยักษ์จากสาธารณรัฐเช็กที่แสดงพลังในลูกลอยและลูกตาย" }
            ]
        },
        everton: {
            ko: [
                { name: "도미닉 칼버트-르윈", position: "공격수", description: "높은 신장과 강력한 헤딩으로 골을 양산하는 타겟맨" },
                { name: "조던 픽포드", position: "골키퍼", description: "잉글랜드 대표팀 주전으로 뛰어난 반사신경을 가진 골키퍼" },
                { name: "앙드레 고메스", position: "미드필더", description: "바르셀로나 출신의 기술적인 미드필더로 패스 능력이 뛰어남" }
            ],
            en: [
                { name: "Dominic Calvert-Lewin", position: "Forward", description: "Target man who scores goals with tall height and powerful heading" },
                { name: "Jordan Pickford", position: "Goalkeeper", description: "England national team starter goalkeeper with excellent reflexes" },
                { name: "André Gomes", position: "Midfielder", description: "Technical midfielder from Barcelona with excellent passing ability" }
            ],
            zh: [
                { name: "多米尼克·卡尔弗特-勒温", position: "前锋", description: "用高身材和强力头球进球的目标中锋" },
                { name: "乔丹·皮克福德", position: "守门员", description: "英格兰国家队主力守门员，反应能力出色" },
                { name: "安德烈·戈麦斯", position: "中场", description: "来自巴塞罗那的技术型中场，传球能力出色" }
            ],
            ja: [
                { name: "ドミニク・カルバート・レウィン", position: "フォワード", description: "高身長と強力なヘディングでゴールを量産するターゲットマン" },
                { name: "ジョーダン・ピックフォード", position: "ゴールキーパー", description: "イングランド代表正ゴールキーパーで優れた反射神経を持つ" },
                { name: "アンドレ・ゴメス", position: "ミッドフィールダー", description: "バルセロナ出身の技術的なミッドフィールダーでパス能力が優秀" }
            ],
            th: [
                { name: "โดมินิค คาลเวิร์ต-เลวิน", position: "กองหน้า", description: "เป้าหมายที่ทำประตูด้วยความสูงและการหัวบอลที่ทรงพลัง" },
                { name: "จอร์แดน พิคฟอร์ด", position: "ผู้รักษาประตู", description: "ผู้รักษาประตูตัวจริงของทีมชาติอังกฤษที่มีการตอบสนองที่ยอดเยี่ยม" },
                { name: "อังเดร โกเมส", position: "กองกลาง", description: "กองกลางเทคนิคจากบาร์เซโลนาที่มีความสามารถในการส่งบอลยอดเยี่ยม" }
            ]
        },
        aston_villa: {
            ko: [
                { name: "잭 그릴리쉬", position: "윙어", description: "화려한 드리블과 창의적인 플레이로 관중들을 매혹시키는 윙어" },
                { name: "존 맥긴", position: "미드필더", description: "스코틀랜드 대표팀 주장으로 투지와 리더십을 겸비한 미드필더" },
                { name: "에밀리아노 마르티네스", position: "골키퍼", description: "아르헨티나 대표팀 골키퍼로 뛰어난 선방 능력을 자랑" }
            ],
            en: [
                { name: "Jack Grealish", position: "Winger", description: "Winger who captivates audiences with flashy dribbling and creative play" },
                { name: "John McGinn", position: "Midfielder", description: "Scotland national team captain midfielder with fighting spirit and leadership" },
                { name: "Emiliano Martínez", position: "Goalkeeper", description: "Argentina national team goalkeeper who boasts excellent save ability" }
            ],
            zh: [
                { name: "杰克·格拉利什", position: "边锋", description: "用华丽的盘带和创造性比赛吸引观众的边锋" },
                { name: "约翰·麦金", position: "中场", description: "苏格兰国家队队长中场，兼具斗志和领导力" },
                { name: "埃米利亚诺·马丁内斯", position: "守门员", description: "阿根廷国家队守门员，拥有出色的扑救能力" }
            ],
            ja: [
                { name: "ジャック・グリーリッシュ", position: "ウィンガー", description: "華麗なドリブルと創造的なプレーで観客を魅了するウィンガー" },
                { name: "ジョン・マクギン", position: "ミッドフィールダー", description: "スコットランド代表キャプテンで闘志とリーダーシップを兼ね備えたミッドフィールダー" },
                { name: "エミリアーノ・マルティネス", position: "ゴールキーパー", description: "アルゼンチン代表ゴールキーパーで優れたセーブ能力を誇る" }
            ],
            th: [
                { name: "แจ็ค กรีลิช", position: "ปีกเขว", description: "ปีกที่ดึงดูดผู้ชมด้วยการดริบเบิลที่หรูหราและการเล่นสร้างสรรค์" },
                { name: "จอห์น แม็คกิน", position: "กองกลาง", description: "กัปตันทีมชาติสกอตแลนด์กองกลางที่มีจิตวิญญาณการต่อสู้และความเป็นผู้นำ" },
                { name: "เอมิเลียโน มาร์ติเนซ", position: "ผู้รักษาประตู", description: "ผู้รักษาประตูทีมชาติอาร์เจนตินาที่ภาคภูมิใจในความสามารถในการเซฟยอดเยี่ยม" }
            ]
        },
        newcastle: {
            ko: [
                { name: "앨런 생막시맹", position: "윙어", description: "프랑스 출신의 빠른 윙어로 창의적인 플레이와 골 감각을 가진 선수" },
                { name: "칼럼 윌슨", position: "공격수", description: "경험 많은 잉글랜드 공격수로 골 결정력이 뛰어남" },
                { name: "브루노 기마라이스", position: "미드필더", description: "브라질 출신의 기술적인 미드필더로 팀의 중심 역할" }
            ],
            en: [
                { name: "Allan Saint-Maximin", position: "Winger", description: "Fast French winger with creative play and goal sense" },
                { name: "Callum Wilson", position: "Forward", description: "Experienced English striker with excellent goal-scoring ability" },
                { name: "Bruno Guimarães", position: "Midfielder", description: "Technical Brazilian midfielder who plays a central role in the team" }
            ],
            zh: [
                { name: "阿兰·圣马克西曼", position: "边锋", description: "来自法国的快速边锋，具有创造性比赛和进球感觉" },
                { name: "卡勒姆·威尔逊", position: "前锋", description: "经验丰富的英格兰前锋，进球能力出色" },
                { name: "布鲁诺·吉马良斯", position: "中场", description: "来自巴西的技术型中场，在球队中发挥核心作用" }
            ],
            ja: [
                { name: "アラン・サンマクシマン", position: "ウィンガー", description: "フランス出身の速いウィンガーで創造的なプレーとゴール感覚を持つ選手" },
                { name: "カラム・ウィルソン", position: "フォワード", description: "経験豊富なイングランド攻撃手でゴール決定力が優秀" },
                { name: "ブルーノ・ギマラエス", position: "ミッドフィールダー", description: "ブラジル出身の技術的なミッドフィールダーでチームの中心的役割" }
            ],
            th: [
                { name: "อัลลัน แซงต์-แม็กซิแมง", position: "ปีกเขว", description: "ปีกเร็วจากฝรั่งเศสที่มีการเล่นสร้างสรรค์และประสาทการทำประตู" },
                { name: "คัลลัม วิลสัน", position: "กองหน้า", description: "กองหน้าอังกฤษที่มีประสบการณ์และความสามารถในการทำประตูยอดเยี่ยม" },
                { name: "บรูโน่ กิมาไรส์", position: "กองกลาง", description: "กองกลางเทคนิคจากบราซิลที่มีบทบาทสำคัญในทีม" }
            ]
        },
        brighton: {
            ko: [
                { name: "닐 모패이", position: "공격수", description: "스코틀랜드 대표팀 공격수로 득점 감각이 뛰어난 선수" },
                { name: "르로이 사네", position: "윙어", description: "독일 출신의 빠른 윙어로 창의적인 플레이가 특징" },
                { name: "알렉시스 맥 알리스터", position: "미드필더", description: "아르헨티나 출신의 기술적인 미드필더로 패스와 슈팅 모두 뛰어남" }
            ],
            en: [
                { name: "Neal Maupay", position: "Forward", description: "Scotland national team striker with excellent scoring sense" },
                { name: "Leroy Sané", position: "Winger", description: "Fast German winger characterized by creative play" },
                { name: "Alexis Mac Allister", position: "Midfielder", description: "Technical Argentine midfielder excellent in both passing and shooting" }
            ],
            zh: [
                { name: "尼尔·莫派", position: "前锋", description: "苏格兰国家队前锋，得分感觉出色" },
                { name: "勒罗伊·萨内", position: "边锋", description: "来自德国的快速边锋，以创造性比赛为特色" },
                { name: "阿莱克西斯·麦克·阿利斯特", position: "中场", description: "来自阿根廷的技术型中场，传球和射门都很出色" }
            ],
            ja: [
                { name: "ニール・モーペイ", position: "フォワード", description: "スコットランド代表攻撃手で得点感覚が優秀な選手" },
                { name: "レロイ・サネ", position: "ウィンガー", description: "ドイツ出身の速いウィンガーで創造的なプレーが特徴" },
                { name: "アレクシス・マック・アリスター", position: "ミッドフィールダー", description: "アルゼンチン出身の技術的なミッドフィールダーでパスとシュート両方が優秀" }
            ],
            th: [
                { name: "นีล โมเป", position: "กองหน้า", description: "กองหน้าทีมชาติสกอตแลนด์ที่มีประสาทการทำประตูยอดเยี่ยม" },
                { name: "เลอรอย ซาเน่", position: "ปีกเขว", description: "ปีกเร็วจากเยอรมนีที่มีลักษณะการเล่นสร้างสรรค์" },
                { name: "อเล็กซิส แม็ค อลลิสเตอร์", position: "กองกลาง", description: "กองกลางเทคนิคจากอาร์เจนตินาที่เก่งทั้งการส่งบอลและการยิง" }
            ]
        }
        // 나머지 팀들도 추가 가능...
    };
    
    return playerData[teamKey]?.[lang] || playerData[teamKey]?.ko || [
        { name: "선수 정보", position: "준비 중", description: "곧 업데이트될 예정입니다." }
    ];
}

// Show similar teams
function showSimilarTeams(teamKey, t) {
    const similarTeams = getSimilarTeams(teamKey, currentLanguage);
    const container = document.getElementById('similarTeamsGrid');
    if (!container) return;
    
    container.innerHTML = '';
    similarTeams.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-mini-card';
        teamCard.innerHTML = `
            <div class="mini-team-logo">
                <img src="${teams[team.key].logo}" alt="${team.name}">
            </div>
            <div class="mini-team-name">${team.name}</div>
            <div class="similarity-reason">${team.reason}</div>
        `;
        container.appendChild(teamCard);
    });
}

// Show rival teams
function showRivalTeams(teamKey, t) {
    const rivalTeams = getRivalTeams(teamKey, currentLanguage);
    const container = document.getElementById('rivalTeamsGrid');
    if (!container) return;
    
    container.innerHTML = '';
    rivalTeams.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-mini-card rival-card';
        teamCard.innerHTML = `
            <div class="mini-team-logo">
                <img src="${teams[team.key].logo}" alt="${team.name}">
            </div>
            <div class="mini-team-name">${team.name}</div>
            <div class="rivalry-reason">${team.reason}</div>
        `;
        container.appendChild(teamCard);
    });
}

// Show fun facts
function showFunFacts(teamKey, t) {
    const facts = getFunFacts(teamKey, currentLanguage);
    const container = document.getElementById('funFactsList');
    if (!container) return;
    
    container.innerHTML = '';
    facts.forEach(fact => {
        const factItem = document.createElement('div');
        factItem.className = 'fun-fact-item';
        factItem.innerHTML = `
            <div class="fact-icon">${fact.icon}</div>
            <div class="fact-text">${fact.text}</div>
        `;
        container.appendChild(factItem);
    });
}

// Get similar teams
function getSimilarTeams(teamKey, lang) {
    const similarityData = {
        man_city: {
            ko: [
                { key: 'arsenal', name: '아스날', reason: '아름다운 축구를 추구하는 공통점' },
                { key: 'chelsea', name: '첼시', reason: '현대적이고 전술적인 접근법' }
            ],
            en: [
                { key: 'arsenal', name: 'Arsenal', reason: 'Common pursuit of beautiful football' },
                { key: 'chelsea', name: 'Chelsea', reason: 'Modern and tactical approach' }
            ]
        },
        man_utd: {
            ko: [
                { key: 'liverpool', name: '리버풀', reason: '강한 전통과 열정적인 팬 문화' },
                { key: 'arsenal', name: '아스날', reason: '역사와 자부심을 중시하는 명문클럽' }
            ],
            en: [
                { key: 'liverpool', name: 'Liverpool', reason: 'Strong tradition and passionate fan culture' },
                { key: 'arsenal', name: 'Arsenal', reason: 'Prestigious clubs that value history and pride' }
            ]
        },
        liverpool: {
            ko: [
                { key: 'man_utd', name: '맨체스터 유나이티드', reason: '강한 전통과 열정적인 팬 문화' },
                { key: 'tottenham', name: '토트넘', reason: '역동적이고 공격적인 플레이 스타일' }
            ],
            en: [
                { key: 'man_utd', name: 'Manchester United', reason: 'Strong tradition and passionate fan culture' },
                { key: 'tottenham', name: 'Tottenham', reason: 'Dynamic and attacking play style' }
            ]
        },
        arsenal: {
            ko: [
                { key: 'man_city', name: '맨체스터 시티', reason: '기술적이고 세련된 축구 철학' },
                { key: 'aston_villa', name: '아스톤 빌라', reason: '우아하고 전통적인 축구 스타일' }
            ],
            en: [
                { key: 'man_city', name: 'Manchester City', reason: 'Technical and sophisticated football philosophy' },
                { key: 'aston_villa', name: 'Aston Villa', reason: 'Elegant and traditional football style' }
            ]
        },
        chelsea: {
            ko: [
                { key: 'man_city', name: '맨체스터 시티', reason: '실용적이고 효율적인 접근법' },
                { key: 'tottenham', name: '토트넘', reason: '런던 기반의 야심찬 클럽' }
            ],
            en: [
                { key: 'man_city', name: 'Manchester City', reason: 'Practical and efficient approach' },
                { key: 'tottenham', name: 'Tottenham', reason: 'Ambitious London-based clubs' }
            ]
        },
        tottenham: {
            ko: [
                { key: 'liverpool', name: '리버풀', reason: '감정적이고 열정적인 축구' },
                { key: 'newcastle', name: '뉴캐슬', reason: '도전적이고 야심찬 정신' }
            ],
            en: [
                { key: 'liverpool', name: 'Liverpool', reason: 'Emotional and passionate football' },
                { key: 'newcastle', name: 'Newcastle', reason: 'Challenging and ambitious spirit' }
            ]
        },
        leicester: {
            ko: [
                { key: 'brighton', name: '브라이튼', reason: '혁신적이고 창의적인 접근법' },
                { key: 'west_ham', name: '웨스트햄', reason: '실용적이고 끈질긴 정신' }
            ],
            en: [
                { key: 'brighton', name: 'Brighton', reason: 'Innovative and creative approach' },
                { key: 'west_ham', name: 'West Ham', reason: 'Practical and persistent spirit' }
            ]
        },
        west_ham: {
            ko: [
                { key: 'newcastle', name: '뉴캐슬', reason: '진정성 있고 노동자 계층의 정신' },
                { key: 'everton', name: '에버튼', reason: '전통적이고 꾸준한 가치관' }
            ],
            en: [
                { key: 'newcastle', name: 'Newcastle', reason: 'Authentic working-class spirit' },
                { key: 'everton', name: 'Everton', reason: 'Traditional and steady values' }
            ]
        },
        everton: {
            ko: [
                { key: 'aston_villa', name: '아스톤 빌라', reason: '전통과 품격을 중시하는 클럽' },
                { key: 'west_ham', name: '웨스트햄', reason: '꾸준함과 충성심을 가진 팬 문화' }
            ],
            en: [
                { key: 'aston_villa', name: 'Aston Villa', reason: 'Clubs that value tradition and dignity' },
                { key: 'west_ham', name: 'West Ham', reason: 'Fan culture with consistency and loyalty' }
            ]
        },
        aston_villa: {
            ko: [
                { key: 'arsenal', name: '아스날', reason: '우아하고 예술적인 축구 추구' },
                { key: 'everton', name: '에버튼', reason: '클래식하고 전통적인 가치관' }
            ],
            en: [
                { key: 'arsenal', name: 'Arsenal', reason: 'Pursuit of elegant and artistic football' },
                { key: 'everton', name: 'Everton', reason: 'Classic and traditional values' }
            ]
        },
        newcastle: {
            ko: [
                { key: 'west_ham', name: '웨스트햄', reason: '진정성 있고 지역 중심적인 문화' },
                { key: 'tottenham', name: '토트넘', reason: '열정적이고 도전적인 정신' }
            ],
            en: [
                { key: 'west_ham', name: 'West Ham', reason: 'Authentic and community-centered culture' },
                { key: 'tottenham', name: 'Tottenham', reason: 'Passionate and challenging spirit' }
            ]
        },
        brighton: {
            ko: [
                { key: 'leicester', name: '레스터 시티', reason: '혁신적이고 예측 불가능한 스타일' },
                { key: 'man_city', name: '맨체스터 시티', reason: '현대적이고 창의적인 접근법' }
            ],
            en: [
                { key: 'leicester', name: 'Leicester City', reason: 'Innovative and unpredictable style' },
                { key: 'man_city', name: 'Manchester City', reason: 'Modern and creative approach' }
            ]
        }
    };
    
    return similarityData[teamKey]?.[lang] || similarityData[teamKey]?.ko || [];
}

// Get rival teams
function getRivalTeams(teamKey, lang) {
    const rivalryData = {
        man_city: {
            ko: [
                { key: 'west_ham', name: '웨스트햄', reason: '화려함 vs 소박함의 대조' },
                { key: 'leicester', name: '레스터 시티', reason: '완벽함 vs 기적의 대비' }
            ],
            en: [
                { key: 'west_ham', name: 'West Ham', reason: 'Contrast between glamour vs simplicity' },
                { key: 'leicester', name: 'Leicester City', reason: 'Contrast between perfection vs miracle' }
            ]
        },
        man_utd: {
            ko: [
                { key: 'man_city', name: '맨체스터 시티', reason: '맨체스터 더비의 전통적 라이벌' },
                { key: 'brighton', name: '브라이튼', reason: '전통 vs 혁신의 대조' }
            ],
            en: [
                { key: 'man_city', name: 'Manchester City', reason: 'Traditional rivals of Manchester Derby' },
                { key: 'brighton', name: 'Brighton', reason: 'Contrast between tradition vs innovation' }
            ]
        },
        liverpool: {
            ko: [
                { key: 'everton', name: '에버튼', reason: '머지사이드 더비의 영원한 라이벌' },
                { key: 'chelsea', name: '첼시', reason: '열정 vs 냉철함의 대조' }
            ],
            en: [
                { key: 'everton', name: 'Everton', reason: 'Eternal rivals of Merseyside Derby' },
                { key: 'chelsea', name: 'Chelsea', reason: 'Contrast between passion vs coolness' }
            ]
        },
        arsenal: {
            ko: [
                { key: 'tottenham', name: '토트넘', reason: '북런던 더비의 영원한 라이벌' },
                { key: 'west_ham', name: '웨스트햄', reason: '예술적 축구 vs 실용적 축구' }
            ],
            en: [
                { key: 'tottenham', name: 'Tottenham', reason: 'Eternal rivals of North London Derby' },
                { key: 'west_ham', name: 'West Ham', reason: 'Artistic football vs practical football' }
            ]
        },
        chelsea: {
            ko: [
                { key: 'tottenham', name: '토트넘', reason: '런던 서부 vs 북부의 라이벌리' },
                { key: 'liverpool', name: '리버풀', reason: '냉정함 vs 열정의 대조' }
            ],
            en: [
                { key: 'tottenham', name: 'Tottenham', reason: 'West vs North London rivalry' },
                { key: 'liverpool', name: 'Liverpool', reason: 'Contrast between coolness vs passion' }
            ]
        },
        tottenham: {
            ko: [
                { key: 'arsenal', name: '아스날', reason: '북런던 더비의 클래식 라이벌' },
                { key: 'chelsea', name: '첼시', reason: '런던 내 야심찬 클럽들의 경쟁' }
            ],
            en: [
                { key: 'arsenal', name: 'Arsenal', reason: 'Classic rivals of North London Derby' },
                { key: 'chelsea', name: 'Chelsea', reason: 'Competition between ambitious London clubs' }
            ]
        },
        leicester: {
            ko: [
                { key: 'man_city', name: '맨체스터 시티', reason: '기적 vs 완벽함의 대조' },
                { key: 'everton', name: '에버튼', reason: '혁신 vs 전통의 충돌' }
            ],
            en: [
                { key: 'man_city', name: 'Manchester City', reason: 'Contrast between miracle vs perfection' },
                { key: 'everton', name: 'Everton', reason: 'Clash between innovation vs tradition' }
            ]
        },
        west_ham: {
            ko: [
                { key: 'arsenal', name: '아스날', reason: '실용성 vs 예술성의 대조' },
                { key: 'man_city', name: '맨체스터 시티', reason: '서민 vs 엘리트의 대비' }
            ],
            en: [
                { key: 'arsenal', name: 'Arsenal', reason: 'Contrast between practicality vs artistry' },
                { key: 'man_city', name: 'Manchester City', reason: 'Contrast between working class vs elite' }
            ]
        },
        everton: {
            ko: [
                { key: 'liverpool', name: '리버풀', reason: '머지사이드 더비의 전통적 라이벌' },
                { key: 'brighton', name: '브라이튼', reason: '전통 vs 혁신의 대조' }
            ],
            en: [
                { key: 'liverpool', name: 'Liverpool', reason: 'Traditional rivals of Merseyside Derby' },
                { key: 'brighton', name: 'Brighton', reason: 'Contrast between tradition vs innovation' }
            ]
        },
        aston_villa: {
            ko: [
                { key: 'tottenham', name: '토트넘', reason: '우아함 vs 역동성의 대조' },
                { key: 'west_ham', name: '웨스트햄', reason: '품격 vs 거침없음의 대비' }
            ],
            en: [
                { key: 'tottenham', name: 'Tottenham', reason: 'Contrast between elegance vs dynamism' },
                { key: 'west_ham', name: 'West Ham', reason: 'Contrast between dignity vs roughness' }
            ]
        },
        newcastle: {
            ko: [
                { key: 'chelsea', name: '첼시', reason: '진정성 vs 계산된 접근법의 대조' },
                { key: 'man_city', name: '맨체스터 시티', reason: '전통적 팬 문화 vs 모던한 성공' }
            ],
            en: [
                { key: 'chelsea', name: 'Chelsea', reason: 'Contrast between authenticity vs calculated approach' },
                { key: 'man_city', name: 'Manchester City', reason: 'Traditional fan culture vs modern success' }
            ]
        },
        brighton: {
            ko: [
                { key: 'everton', name: '에버튼', reason: '혁신 vs 전통의 명확한 대조' },
                { key: 'man_utd', name: '맨체스터 유나이티드', reason: '신선함 vs 기존 질서의 대비' }
            ],
            en: [
                { key: 'everton', name: 'Everton', reason: 'Clear contrast between innovation vs tradition' },
                { key: 'man_utd', name: 'Manchester United', reason: 'Contrast between freshness vs established order' }
            ]
        }
    };
    
    return rivalryData[teamKey]?.[lang] || rivalryData[teamKey]?.ko || [];
}

// Get fun facts
function getFunFacts(teamKey, lang) {
    const factsData = {
        man_city: {
            ko: [
                { icon: '🏆', text: '펩 과르디올라 감독은 바르셀로나에서도 같은 철학으로 성공했습니다' },
                { icon: '💰', text: '에티하드 스타디움은 원래 2002 영연방 게임을 위해 지어졌습니다' },
                { icon: '⚽', text: '시티는 프리미어리그 한 시즌 최다 승점 기록(100점)을 보유하고 있습니다' },
                { icon: '🎵', text: '팬들의 응원가 "Blue Moon"은 1930년대 재즈 스탠다드입니다' }
            ],
            en: [
                { icon: '🏆', text: 'Manager Pep Guardiola succeeded with the same philosophy at Barcelona' },
                { icon: '💰', text: 'Etihad Stadium was originally built for the 2002 Commonwealth Games' },
                { icon: '⚽', text: 'City holds the Premier League record for most points in a season (100 points)' },
                { icon: '🎵', text: 'The fans\' anthem "Blue Moon" is a 1930s jazz standard' }
            ],
            zh: [
                { icon: '🏆', text: '主教练瓜迪奥拉在巴塞罗那也用同样的哲学取得了成功' },
                { icon: '💰', text: '伊蒂哈德球场最初是为2002年英联邦运动会而建造的' },
                { icon: '⚽', text: '曼城保持着英超单赛季最高积分纪录（100分）' },
                { icon: '🎵', text: '球迷们的队歌"Blue Moon"是1930年代的爵士标准曲' }
            ],
            ja: [
                { icon: '🏆', text: 'ペップ・グアルディオラ監督はバルセロナでも同じ哲学で成功しました' },
                { icon: '💰', text: 'エティハド・スタジアムは元々2002年コモンウェルスゲームのために建設されました' },
                { icon: '⚽', text: 'シティはプレミアリーグ1シーズン最多勝点記録（100点）を保持しています' },
                { icon: '🎵', text: 'ファンの応援歌"Blue Moon"は1930年代のジャズスタンダードです' }
            ],
            th: [
                { icon: '🏆', text: 'ผู้จัดการทีมเปป กวาร์ดิโอลาประสบความสำเร็จด้วยปรัชญาเดียวกันที่บาร์เซโลนา' },
                { icon: '💰', text: 'สนามอีติฮัดถูกสร้างขึ้นเดิมสำหรับเกมส์เครือจักรภพ 2002' },
                { icon: '⚽', text: 'ซิตี้ถือสถิติคะแนนสูงสุดในหนึ่งฤดูกาลพรีเมียร์ลีก (100 คะแนน)' },
                { icon: '🎵', text: 'เพลงเชียร์ของแฟน "Blue Moon" เป็นมาตรฐานแจ๊สยุค 1930' }
            ]
        },
        man_utd: {
            ko: [
                { icon: '👹', text: '레드 데빌스라는 별명은 1960년대부터 사용되기 시작했습니다' },
                { icon: '🏟️', text: '올드 트래포드는 "꿈의 극장"이라고 불립니다' },
                { icon: '⏰', text: '퍼거슨 타임은 추가시간에 골을 넣는 맨유의 전설적인 능력을 뜻합니다' },
                { icon: '🌟', text: '1999년 트레블 달성은 축구 역사상 가장 극적인 순간 중 하나입니다' }
            ],
            en: [
                { icon: '👹', text: 'The Red Devils nickname started being used in the 1960s' },
                { icon: '🏟️', text: 'Old Trafford is called the "Theatre of Dreams"' },
                { icon: '⏰', text: 'Fergie Time refers to United\'s legendary ability to score in added time' },
                { icon: '🌟', text: 'The 1999 Treble achievement is one of the most dramatic moments in football history' }
            ],
            zh: [
                { icon: '👹', text: '红魔的绰号从1960年代开始使用' },
                { icon: '🏟️', text: '老特拉福德被称为"梦剧场"' },
                { icon: '⏰', text: '弗格森时间指的是曼联在补时阶段进球的传奇能力' },
                { icon: '🌟', text: '1999年三冠王成就是足球史上最戏剧性的时刻之一' }
            ],
            ja: [
                { icon: '👹', text: 'レッドデビルズという愛称は1960年代から使われ始めました' },
                { icon: '🏟️', text: 'オールド・トラッフォードは「夢の劇場」と呼ばれています' },
                { icon: '⏰', text: 'ファーガソンタイムは追加時間にゴールを決めるユナイテッドの伝説的能力を指します' },
                { icon: '🌟', text: '1999年のトレブル達成はサッカー史上最もドラマチックな瞬間の一つです' }
            ],
            th: [
                { icon: '👹', text: 'ชื่อเล่น Red Devils เริ่มใช้ตั้งแต่ทศวรรษ 1960' },
                { icon: '🏟️', text: 'โอลด์ แทรฟฟอร์ดเรียกว่า "โรงละครแห่งความฝัน"' },
                { icon: '⏰', text: 'เฟอร์กี้ไทม์หมายถึงความสามารถในการทำประตูในเวลาทดเชลาของยูไนเต็ด' },
                { icon: '🌟', text: 'ความสำเร็จแทรบเบิลในปี 1999 เป็นหนึ่งในช่วงเวลาที่น่าตื่นเต้นที่สุดในประวัติศาสตร์ฟุตบอล' }
            ]
        },
        liverpool: {
            ko: [
                { icon: '🎵', text: '"You\'ll Never Walk Alone"은 1945년 뮤지컬에서 나온 곡입니다' },
                { icon: '🔴', text: '안필드의 Kop 스탠드는 세계에서 가장 유명한 축구 응원석입니다' },
                { icon: '🏆', text: '리버풀은 유럽 컵/챔피언스리그를 6번 우승했습니다' },
                { icon: '⚽', text: '2019년 바르셀로나전 4-0 역전승은 축구 역사상 최고의 경기 중 하나입니다' }
            ],
            en: [
                { icon: '🎵', text: '"You\'ll Never Walk Alone" comes from a 1945 musical' },
                { icon: '🔴', text: 'Anfield\'s Kop stand is the most famous football terrace in the world' },
                { icon: '🏆', text: 'Liverpool has won the European Cup/Champions League 6 times' },
                { icon: '⚽', text: 'The 4-0 comeback against Barcelona in 2019 is one of the greatest games in football history' }
            ]
        },
        arsenal: {
            ko: [
                { icon: '🔫', text: '거너스라는 별명은 클럽이 무기 공장에서 시작되었기 때문입니다' },
                { icon: '🏟️', text: '에미레이츠 스타디움은 2006년에 개장한 최신식 경기장입니다' },
                { icon: '👔', text: '아르센 벤거는 22년간 감독으로 재임하며 클럽 역사를 만들었습니다' },
                { icon: '🥇', text: '2003-04시즌 무패 우승은 "인빈시블스"로 불리며 전설이 되었습니다' }
            ],
            en: [
                { icon: '🔫', text: 'The Gunners nickname comes from the club starting at an armaments factory' },
                { icon: '🏟️', text: 'Emirates Stadium is a state-of-the-art venue that opened in 2006' },
                { icon: '👔', text: 'Arsène Wenger served as manager for 22 years, creating club history' },
                { icon: '🥇', text: 'The 2003-04 unbeaten season is called "The Invincibles" and became legendary' }
            ]
        },
        chelsea: {
            ko: [
                { icon: '💙', text: '블루스라는 별명은 파란색 유니폼에서 유래되었습니다' },
                { icon: '🦁', text: '클럽 마스코트는 사자 "스탬포드"입니다' },
                { icon: '🏆', text: '2012년 챔피언스리그 우승은 기적적인 승부차기 승리로 이뤄졌습니다' },
                { icon: '🌟', text: '스탬포드 브리지는 1877년부터 사용되고 있는 역사적인 구장입니다' }
            ],
            en: [
                { icon: '💙', text: 'The Blues nickname comes from their blue jerseys' },
                { icon: '🦁', text: 'The club mascot is a lion named "Stamford"' },
                { icon: '🏆', text: 'The 2012 Champions League victory was achieved through miraculous penalty shootout' },
                { icon: '🌟', text: 'Stamford Bridge has been in use since 1877, making it a historic venue' }
            ]
        },
        tottenham: {
            ko: [
                { icon: '🐓', text: '스퍼스의 마스코트는 수탉이며, 프랑스 농부 전설에서 유래되었습니다' },
                { icon: '🏟️', text: '새로운 토트넘 스타디움은 62,850명을 수용할 수 있습니다' },
                { icon: '⚽', text: '손흥민은 토트넘 역사상 가장 성공한 아시아 선수입니다' },
                { icon: '🎭', text: '"오 when the Spurs go marching in"은 유명한 응원가입니다' }
            ],
            en: [
                { icon: '🐓', text: 'Spurs\' mascot is a cockerel, derived from French farmer legend' },
                { icon: '🏟️', text: 'The new Tottenham Stadium can accommodate 62,850 spectators' },
                { icon: '⚽', text: 'Son Heung-min is the most successful Asian player in Tottenham history' },
                { icon: '🎭', text: '"Oh when the Spurs go marching in" is a famous chant' }
            ]
        },
        leicester: {
            ko: [
                { icon: '🦊', text: '폭시스라는 별명은 여우에서 유래되었으며, 교활함을 의미합니다' },
                { icon: '🏆', text: '2015-16시즌 우승 확률은 5000:1로 역사상 가장 큰 이변이었습니다' },
                { icon: '👑', text: '킹 파워 스타디움은 태국 킹 파워 그룹의 소유입니다' },
                { icon: '⚽', text: '제이미 바디는 논리그에서 프리미어리그 우승까지 올라온 전설입니다' }
            ],
            en: [
                { icon: '🦊', text: 'The Foxes nickname comes from foxes, meaning cunning' },
                { icon: '🏆', text: 'The 2015-16 season victory odds were 5000:1, the biggest upset in history' },
                { icon: '👑', text: 'King Power Stadium is owned by Thailand\'s King Power Group' },
                { icon: '⚽', text: 'Jamie Vardy is a legend who rose from non-league to Premier League champion' }
            ]
        },
        west_ham: {
            ko: [
                { icon: '⚒️', text: '해머스라는 별명은 조선소와 철강업에서 일하던 지역 특성에서 유래되었습니다' },
                { icon: '🏟️', text: '런던 스타디움은 2012 올림픽 메인 스타디움이었습니다' },
                { icon: '🎵', text: '"I\'m Forever Blowing Bubbles"는 1919년부터 불리는 전통 응원가입니다' },
                { icon: '🏆', text: '1966년 월드컵 우승 멤버 3명(무어, 허스트, 피터스)이 웨스트햄 출신입니다' }
            ],
            en: [
                { icon: '⚒️', text: 'The Hammers nickname comes from the local shipyard and steel industry heritage' },
                { icon: '🏟️', text: 'London Stadium was the main venue for the 2012 Olympics' },
                { icon: '🎵', text: '"I\'m Forever Blowing Bubbles" has been sung since 1919' },
                { icon: '🏆', text: 'Three members of the 1966 World Cup winning team (Moore, Hurst, Peters) were from West Ham' }
            ]
        },
        everton: {
            ko: [
                { icon: '🍬', text: '토피스라는 별명은 근처에 있던 토피 가게에서 유래되었습니다' },
                { icon: '🏟️', text: '구디슨 파크는 1892년부터 사용되고 있는 역사적인 홈구장입니다' },
                { icon: '🎭', text: '"Z-Cars" 테마는 경기 전 항상 연주되는 전통 음악입니다' },
                { icon: '⚽', text: '에버튼은 프리미어리그에서 한 번도 강등된 적이 없는 몇 안 되는 팀 중 하나입니다' }
            ],
            en: [
                { icon: '🍬', text: 'The Toffees nickname comes from a nearby toffee shop' },
                { icon: '🏟️', text: 'Goodison Park has been the historic home ground since 1892' },
                { icon: '🎭', text: 'The "Z-Cars" theme is traditional music played before every game' },
                { icon: '⚽', text: 'Everton is one of the few teams never relegated from the Premier League' }
            ]
        },
        aston_villa: {
            ko: [
                { icon: '🦁', text: '빌라의 마스코트는 사자이며, 용기와 자부심을 상징합니다' },
                { icon: '🏆', text: '1982년 유러피언 컵 우승은 클럽 역사상 최고의 순간입니다' },
                { icon: '🏟️', text: '빌라 파크는 1897년부터 사용되고 있는 전통적인 홈구장입니다' },
                { icon: '🎨', text: '클라렛과 블루 색상은 1888년부터 사용되고 있습니다' }
            ],
            en: [
                { icon: '🦁', text: 'Villa\'s mascot is a lion, symbolizing courage and pride' },
                { icon: '🏆', text: 'The 1982 European Cup victory is the greatest moment in club history' },
                { icon: '🏟️', text: 'Villa Park has been the traditional home ground since 1897' },
                { icon: '🎨', text: 'The claret and blue colors have been used since 1888' }
            ]
        },
        newcastle: {
            ko: [
                { icon: '🖤', text: '매그파이스라는 별명은 까치처럼 흑백 줄무늬 유니폼에서 유래되었습니다' },
                { icon: '🏟️', text: '세인트 제임스 파크는 52,305명을 수용하는 잉글랜드에서 7번째로 큰 구장입니다' },
                { icon: '⚽', text: '앨런 시어러는 뉴캐슬에서 147골을 기록한 클럽 레전드입니다' },
                { icon: '🎵', text: '"Local Hero" 테마곡은 경기 전 항상 연주되는 감동적인 음악입니다' }
            ],
            en: [
                { icon: '🖤', text: 'The Magpies nickname comes from the black and white striped kit like magpies' },
                { icon: '🏟️', text: 'St. James\' Park seats 52,305, making it the 7th largest stadium in England' },
                { icon: '⚽', text: 'Alan Shearer scored 147 goals for Newcastle, making him a club legend' },
                { icon: '🎵', text: 'The "Local Hero" theme is moving music played before every game' }
            ]
        },
        brighton: {
            ko: [
                { icon: '🦅', text: '시걸스라는 별명은 바닷가 도시 특성상 갈매기에서 유래되었습니다' },
                { icon: '🏟️', text: '아멕스 스타디움은 2011년에 개장한 현대적인 경기장입니다' },
                { icon: '🌊', text: '브라이튼은 영국 남부 해안의 아름다운 휴양도시입니다' },
                { icon: '📈', text: '그레이엄 포터 감독 시절 혁신적인 전술로 주목받았습니다' }
            ],
            en: [
                { icon: '🦅', text: 'The Seagulls nickname comes from seagulls due to being a seaside city' },
                { icon: '🏟️', text: 'Amex Stadium is a modern venue that opened in 2011' },
                { icon: '🌊', text: 'Brighton is a beautiful seaside resort city on England\'s south coast' },
                { icon: '📈', text: 'Gained attention for innovative tactics during Graham Potter\'s era' }
            ]
        }
    };
    
    return factsData[teamKey]?.[lang] || factsData[teamKey]?.ko || [
        { icon: '⚽', text: '재미있는 사실들이 곧 업데이트될 예정입니다!' }
    ];
}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    Object.keys(teams).forEach(team => {
        teamScores[team] = 0;
    });
    
    document.getElementById('resultSection').style.display = 'none';
    document.querySelector('.curiosity-section').style.display = 'grid';
    document.querySelector('.start-button-container').style.display = 'block';
    document.getElementById('quizSection').style.display = 'none';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializeApp);

// Start quiz function
function startQuiz() {
    document.querySelector('.curiosity-section').style.display = 'none';
    document.querySelector('.start-button-container').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    showQuestion();
}
