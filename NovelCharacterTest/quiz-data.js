// Quiz questions and scoring data for ORV Personality Quiz
const quizData = [
    {
        ko: {
            question: "위험한 상황에서 당신의 첫 번째 반응은?",
            answers: [
                {
                    text: "상황을 빠르게 분석하고 최적의 전략을 세운다",
                    traits: { kimDokja: 3, hanSooyoung: 2, yooSangah: 1, yooJoonghyuk: 1 }
                },
                {
                    text: "앞장서서 직접 문제를 해결한다",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1, shinYoosung: 1 }
                },
                {
                    text: "팀원들의 안전을 먼저 확인한다",
                    traits: { leeHyunsung: 3, yooSangah: 2, jungHeewon: 1, kimDokja: 1 }
                },
                {
                    text: "창의적이고 예상치 못한 방법을 찾는다",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1, kimDokja: 1 }
                }
            ]
        },
        en: {
            question: "What's your first reaction in a dangerous situation?",
            answers: [
                {
                    text: "Quickly analyze the situation and devise an optimal strategy",
                    traits: { kimDokja: 3, hanSooyoung: 2, yooSangah: 1, yooJoonghyuk: 1 }
                },
                {
                    text: "Take the lead and solve the problem directly",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1, shinYoosung: 1 }
                },
                {
                    text: "Check on team members' safety first",
                    traits: { leeHyunsung: 3, yooSangah: 2, jungHeewon: 1, kimDokja: 1 }
                },
                {
                    text: "Look for creative and unexpected solutions",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1, kimDokja: 1 }
                }
            ]
        },
        ja: {
            question: "危険な状況での最初の反応は？",
            answers: [
                {
                    text: "状況を素早く分析し最適な戦略を立てる",
                    traits: { kimDokja: 3, hanSooyoung: 2, yooSangah: 1, yooJoonghyuk: 1 }
                },
                {
                    text: "先頭に立って直接問題を解決する",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1, shinYoosung: 1 }
                },
                {
                    text: "チームメンバーの安全をまず確認する",
                    traits: { leeHyunsung: 3, yooSangah: 2, jungHeewon: 1, kimDokja: 1 }
                },
                {
                    text: "創造的で予想外の方法を探す",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1, kimDokja: 1 }
                }
            ]
        },
        zh: {
            question: "在危险情况下你的第一反应是？",
            answers: [
                {
                    text: "快速分析情况并制定最佳策略",
                    traits: { kimDokja: 3, hanSooyoung: 2, yooSangah: 1, yooJoonghyuk: 1 }
                },
                {
                    text: "带头直接解决问题",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1, shinYoosung: 1 }
                },
                {
                    text: "首先确认队员的安全",
                    traits: { leeHyunsung: 3, yooSangah: 2, jungHeewon: 1, kimDokja: 1 }
                },
                {
                    text: "寻找创造性和意想不到的方法",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1, kimDokja: 1 }
                }
            ]
        }
    },
    
    {
        ko: {
            question: "팀에서 리더십을 발휘할 때 당신의 스타일은?",
            answers: [
                {
                    text: "뒤에서 조용히 지원하며 필요할 때만 나선다",
                    traits: { kimDokja: 3, yooSangah: 2, leeHyunsung: 1 }
                },
                {
                    text: "강력하고 확실한 지시로 팀을 이끈다",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "모든 구성원의 의견을 듣고 조율한다",
                    traits: { yooSangah: 3, leeHyunsung: 2, kimDokja: 1 }
                },
                {
                    text: "독창적인 아이디어로 새로운 방향을 제시한다",
                    traits: { hanSooyoung: 3, leeGilyoung: 1, shinYoosung: 1 }
                }
            ]
        },
        en: {
            question: "What's your leadership style in a team?",
            answers: [
                {
                    text: "Support quietly from behind and step up only when needed",
                    traits: { kimDokja: 3, yooSangah: 2, leeHyunsung: 1 }
                },
                {
                    text: "Lead the team with strong and clear directions",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "Listen to all members' opinions and coordinate",
                    traits: { yooSangah: 3, leeHyunsung: 2, kimDokja: 1 }
                },
                {
                    text: "Present new directions with original ideas",
                    traits: { hanSooyoung: 3, leeGilyoung: 1, shinYoosung: 1 }
                }
            ]
        },
        ja: {
            question: "チームでリーダーシップを発揮する時のスタイルは？",
            answers: [
                {
                    text: "後ろから静かにサポートし必要な時だけ前に出る",
                    traits: { kimDokja: 3, yooSangah: 2, leeHyunsung: 1 }
                },
                {
                    text: "強力で確実な指示でチームを導く",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "全メンバーの意見を聞いて調整する",
                    traits: { yooSangah: 3, leeHyunsung: 2, kimDokja: 1 }
                },
                {
                    text: "独創的なアイデアで新しい方向を提示する",
                    traits: { hanSooyoung: 3, leeGilyoung: 1, shinYoosung: 1 }
                }
            ]
        },
        zh: {
            question: "在团队中发挥领导力时你的风格是？",
            answers: [
                {
                    text: "在后面安静支持，只在需要时挺身而出",
                    traits: { kimDokja: 3, yooSangah: 2, leeHyunsung: 1 }
                },
                {
                    text: "用强有力且明确的指示引导团队",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "听取所有成员的意见并进行协调",
                    traits: { yooSangah: 3, leeHyunsung: 2, kimDokja: 1 }
                },
                {
                    text: "用独创的想法提出新方向",
                    traits: { hanSooyoung: 3, leeGilyoung: 1, shinYoosung: 1 }
                }
            ]
        }
    },
    
    {
        ko: {
            question: "스트레스를 받을 때 당신의 대처 방식은?",
            answers: [
                {
                    text: "혼자 있는 시간을 가지며 생각을 정리한다",
                    traits: { kimDokja: 3, yooSangah: 2, shinYoosung: 1 }
                },
                {
                    text: "더 강해져서 문제를 직접 해결한다",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1 }
                },
                {
                    text: "친구들과 이야기하며 마음을 나눈다",
                    traits: { yooSangah: 3, leeGilyoung: 2, jungHeewon: 1 }
                },
                {
                    text: "창작이나 새로운 활동으로 에너지를 발산한다",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        en: {
            question: "How do you cope with stress?",
            answers: [
                {
                    text: "Take time alone to organize thoughts",
                    traits: { kimDokja: 3, yooSangah: 2, shinYoosung: 1 }
                },
                {
                    text: "Become stronger and solve problems directly",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1 }
                },
                {
                    text: "Talk with friends and share feelings",
                    traits: { yooSangah: 3, leeGilyoung: 2, jungHeewon: 1 }
                },
                {
                    text: "Channel energy through creative or new activities",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        ja: {
            question: "ストレスを受けた時の対処方法は？",
            answers: [
                {
                    text: "一人の時間を持って考えを整理する",
                    traits: { kimDokja: 3, yooSangah: 2, shinYoosung: 1 }
                },
                {
                    text: "より強くなって問題を直接解決する",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1 }
                },
                {
                    text: "友達と話して気持ちを分かち合う",
                    traits: { yooSangah: 3, leeGilyoung: 2, jungHeewon: 1 }
                },
                {
                    text: "創作や新しい活動でエネルギーを発散する",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        zh: {
            question: "面对压力时你的应对方式是？",
            answers: [
                {
                    text: "独处思考整理思绪",
                    traits: { kimDokja: 3, yooSangah: 2, shinYoosung: 1 }
                },
                {
                    text: "变得更强直接解决问题",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1 }
                },
                {
                    text: "与朋友交谈分享心情",
                    traits: { yooSangah: 3, leeGilyoung: 2, jungHeewon: 1 }
                },
                {
                    text: "通过创作或新活动释放能量",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        }
    },
    
    {
        ko: {
            question: "새로운 사람들과 만날 때 당신의 태도는?",
            answers: [
                {
                    text: "조심스럽게 관찰하며 거리를 둔다",
                    traits: { kimDokja: 3, yooJoonghyuk: 2, shinYoosung: 1 }
                },
                {
                    text: "상대방을 평가하고 필요시 협력한다",
                    traits: { yooJoonghyuk: 3, hanSooyoung: 2, kimDokja: 1 }
                },
                {
                    text: "친근하게 다가가며 대화를 시도한다",
                    traits: { yooSangah: 3, jungHeewon: 2, leeGilyoung: 1 }
                },
                {
                    text: "솔직하게 자신의 생각을 표현한다",
                    traits: { hanSooyoung: 3, jungHeewon: 2, leeHyunsung: 1 }
                }
            ]
        },
        en: {
            question: "What's your attitude when meeting new people?",
            answers: [
                {
                    text: "Observe carefully while keeping distance",
                    traits: { kimDokja: 3, yooJoonghyuk: 2, shinYoosung: 1 }
                },
                {
                    text: "Evaluate the person and cooperate when necessary",
                    traits: { yooJoonghyuk: 3, hanSooyoung: 2, kimDokja: 1 }
                },
                {
                    text: "Approach friendly and try to start conversations",
                    traits: { yooSangah: 3, jungHeewon: 2, leeGilyoung: 1 }
                },
                {
                    text: "Express thoughts honestly",
                    traits: { hanSooyoung: 3, jungHeewon: 2, leeHyunsung: 1 }
                }
            ]
        },
        ja: {
            question: "新しい人と会う時の態度は？",
            answers: [
                {
                    text: "慎重に観察しながら距離を置く",
                    traits: { kimDokja: 3, yooJoonghyuk: 2, shinYoosung: 1 }
                },
                {
                    text: "相手を評価し必要時に協力する",
                    traits: { yooJoonghyuk: 3, hanSooyoung: 2, kimDokja: 1 }
                },
                {
                    text: "親しみやすく近づいて会話を試みる",
                    traits: { yooSangah: 3, jungHeewon: 2, leeGilyoung: 1 }
                },
                {
                    text: "率直に自分の考えを表現する",
                    traits: { hanSooyoung: 3, jungHeewon: 2, leeHyunsung: 1 }
                }
            ]
        },
        zh: {
            question: "遇到新朋友时你的态度是？",
            answers: [
                {
                    text: "谨慎观察保持距离",
                    traits: { kimDokja: 3, yooJoonghyuk: 2, shinYoosung: 1 }
                },
                {
                    text: "评估对方，必要时合作",
                    traits: { yooJoonghyuk: 3, hanSooyoung: 2, kimDokja: 1 }
                },
                {
                    text: "友好接近尝试对话",
                    traits: { yooSangah: 3, jungHeewon: 2, leeGilyoung: 1 }
                },
                {
                    text: "坦率表达自己的想法",
                    traits: { hanSooyoung: 3, jungHeewon: 2, leeHyunsung: 1 }
                }
            ]
        }
    },
    
    {
        ko: {
            question: "중요한 결정을 내릴 때 가장 중시하는 것은?",
            answers: [
                {
                    text: "모든 가능성을 분석하고 최선의 결과를 추구",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "경험과 직감을 바탕으로 한 빠른 판단",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1 }
                },
                {
                    text: "다른 사람들에게 미치는 영향을 우선 고려",
                    traits: { yooSangah: 3, leeHyunsung: 2, shinYoosung: 1 }
                },
                {
                    text: "정의롭고 올바른 선택인지 판단",
                    traits: { jungHeewon: 3, leeHyunsung: 2, shinYoosung: 1 }
                }
            ]
        },
        en: {
            question: "What do you prioritize most when making important decisions?",
            answers: [
                {
                    text: "Analyze all possibilities and pursue the best outcome",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "Quick judgment based on experience and intuition",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1 }
                },
                {
                    text: "Consider the impact on others first",
                    traits: { yooSangah: 3, leeHyunsung: 2, shinYoosung: 1 }
                },
                {
                    text: "Judge whether it's just and right",
                    traits: { jungHeewon: 3, leeHyunsung: 2, shinYoosung: 1 }
                }
            ]
        },
        ja: {
            question: "重要な決定を下す時に最も重視することは？",
            answers: [
                {
                    text: "すべての可能性を分析し最善の結果を追求",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "経験と直感に基づく素早い判断",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1 }
                },
                {
                    text: "他の人への影響を優先考慮",
                    traits: { yooSangah: 3, leeHyunsung: 2, shinYoosung: 1 }
                },
                {
                    text: "正義で正しい選択かを判断",
                    traits: { jungHeewon: 3, leeHyunsung: 2, shinYoosung: 1 }
                }
            ]
        },
        zh: {
            question: "做重要决定时你最看重什么？",
            answers: [
                {
                    text: "分析所有可能性追求最佳结果",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "基于经验和直觉的快速判断",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1 }
                },
                {
                    text: "优先考虑对他人的影响",
                    traits: { yooSangah: 3, leeHyunsung: 2, shinYoosung: 1 }
                },
                {
                    text: "判断是否正义和正确",
                    traits: { jungHeewon: 3, leeHyunsung: 2, shinYoosung: 1 }
                }
            ]
        }
    },
    
    {
        ko: {
            question: "갈등 상황에서 당신의 역할은?",
            answers: [
                {
                    text: "중재자가 되어 양쪽의 의견을 조율한다",
                    traits: { yooSangah: 3, kimDokja: 2, leeHyunsung: 1 }
                },
                {
                    text: "명확한 기준으로 옳고 그름을 판단한다",
                    traits: { jungHeewon: 3, yooJoonghyuk: 2, leeHyunsung: 1 }
                },
                {
                    text: "상황을 관찰하며 적절한 때를 기다린다",
                    traits: { kimDokja: 3, shinYoosung: 2, yooSangah: 1 }
                },
                {
                    text: "직설적으로 문제점을 지적한다",
                    traits: { hanSooyoung: 3, jungHeewon: 2, yooJoonghyuk: 1 }
                }
            ]
        },
        en: {
            question: "What's your role in conflict situations?",
            answers: [
                {
                    text: "Become a mediator and coordinate both sides' opinions",
                    traits: { yooSangah: 3, kimDokja: 2, leeHyunsung: 1 }
                },
                {
                    text: "Judge right and wrong with clear standards",
                    traits: { jungHeewon: 3, yooJoonghyuk: 2, leeHyunsung: 1 }
                },
                {
                    text: "Observe the situation and wait for the right moment",
                    traits: { kimDokja: 3, shinYoosung: 2, yooSangah: 1 }
                },
                {
                    text: "Point out problems directly",
                    traits: { hanSooyoung: 3, jungHeewon: 2, yooJoonghyuk: 1 }
                }
            ]
        },
        ja: {
            question: "対立状況でのあなたの役割は？",
            answers: [
                {
                    text: "仲裁者となって双方の意見を調整する",
                    traits: { yooSangah: 3, kimDokja: 2, leeHyunsung: 1 }
                },
                {
                    text: "明確な基準で善悪を判断する",
                    traits: { jungHeewon: 3, yooJoonghyuk: 2, leeHyunsung: 1 }
                },
                {
                    text: "状況を観察し適切な時を待つ",
                    traits: { kimDokja: 3, shinYoosung: 2, yooSangah: 1 }
                },
                {
                    text: "直接的に問題点を指摘する",
                    traits: { hanSooyoung: 3, jungHeewon: 2, yooJoonghyuk: 1 }
                }
            ]
        },
        zh: {
            question: "在冲突情况下你的角色是？",
            answers: [
                {
                    text: "成为调解者协调双方意见",
                    traits: { yooSangah: 3, kimDokja: 2, leeHyunsung: 1 }
                },
                {
                    text: "用明确标准判断对错",
                    traits: { jungHeewon: 3, yooJoonghyuk: 2, leeHyunsung: 1 }
                },
                {
                    text: "观察情况等待适当时机",
                    traits: { kimDokja: 3, shinYoosung: 2, yooSangah: 1 }
                },
                {
                    text: "直接指出问题",
                    traits: { hanSooyoung: 3, jungHeewon: 2, yooJoonghyuk: 1 }
                }
            ]
        }
    },
    
    {
        ko: {
            question: "가장 큰 동기부여가 되는 것은?",
            answers: [
                {
                    text: "소중한 사람들을 지키고 싶은 마음",
                    traits: { kimDokja: 3, leeHyunsung: 2, shinYoosung: 2, jungHeewon: 1 }
                },
                {
                    text: "자신의 능력을 증명하고 목표를 달성하는 것",
                    traits: { yooJoonghyuk: 3, hanSooyoung: 2, jungHeewon: 1 }
                },
                {
                    text: "모든 사람이 평화롭게 지낼 수 있는 세상",
                    traits: { yooSangah: 3, leeHyunsung: 2, shinYoosung: 1 }
                },
                {
                    text: "새로운 것을 발견하고 창조하는 즐거움",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        en: {
            question: "What motivates you the most?",
            answers: [
                {
                    text: "The desire to protect precious people",
                    traits: { kimDokja: 3, leeHyunsung: 2, shinYoosung: 2, jungHeewon: 1 }
                },
                {
                    text: "Proving abilities and achieving goals",
                    traits: { yooJoonghyuk: 3, hanSooyoung: 2, jungHeewon: 1 }
                },
                {
                    text: "A world where everyone can live peacefully",
                    traits: { yooSangah: 3, leeHyunsung: 2, shinYoosung: 1 }
                },
                {
                    text: "The joy of discovering and creating new things",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        ja: {
            question: "最も大きなモチベーションは？",
            answers: [
                {
                    text: "大切な人を守りたい気持ち",
                    traits: { kimDokja: 3, leeHyunsung: 2, shinYoosung: 2, jungHeewon: 1 }
                },
                {
                    text: "自分の能力を証明し目標を達成すること",
                    traits: { yooJoonghyuk: 3, hanSooyoung: 2, jungHeewon: 1 }
                },
                {
                    text: "すべての人が平和に過ごせる世界",
                    traits: { yooSangah: 3, leeHyunsung: 2, shinYoosung: 1 }
                },
                {
                    text: "新しいことを発見し創造する楽しさ",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        zh: {
            question: "最大的动力来源是？",
            answers: [
                {
                    text: "想要保护珍贵的人的心情",
                    traits: { kimDokja: 3, leeHyunsung: 2, shinYoosung: 2, jungHeewon: 1 }
                },
                {
                    text: "证明自己的能力并达成目标",
                    traits: { yooJoonghyuk: 3, hanSooyoung: 2, jungHeewon: 1 }
                },
                {
                    text: "所有人都能和平生活的世界",
                    traits: { yooSangah: 3, leeHyunsung: 2, shinYoosung: 1 }
                },
                {
                    text: "发现和创造新事物的快乐",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        }
    },
    
    {
        ko: {
            question: "실패했을 때 당신의 반응은?",
            answers: [
                {
                    text: "원인을 분석하고 다른 방법을 모색한다",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "더 강해져서 다시 도전한다",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "팀원들에게 미안함을 느끼고 책임을 진다",
                    traits: { leeHyunsung: 3, kimDokja: 2, yooSangah: 1 }
                },
                {
                    text: "새로운 아이디어를 찾아 창의적으로 접근한다",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        en: {
            question: "How do you react to failure?",
            answers: [
                {
                    text: "Analyze the cause and seek other methods",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "Become stronger and try again",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "Feel sorry to team members and take responsibility",
                    traits: { leeHyunsung: 3, kimDokja: 2, yooSangah: 1 }
                },
                {
                    text: "Find new ideas and approach creatively",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        ja: {
            question: "失敗した時の反応は？",
            answers: [
                {
                    text: "原因を分析し他の方法を模索する",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "より強くなって再挑戦する",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "チームメンバーに申し訳なく思い責任を取る",
                    traits: { leeHyunsung: 3, kimDokja: 2, yooSangah: 1 }
                },
                {
                    text: "新しいアイデアを見つけ創造的にアプローチする",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        zh: {
            question: "失败时你的反应是？",
            answers: [
                {
                    text: "分析原因寻求其他方法",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "变得更强再次挑战",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "对队员感到抱歉并承担责任",
                    traits: { leeHyunsung: 3, kimDokja: 2, yooSangah: 1 }
                },
                {
                    text: "寻找新想法创造性地解决",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        }
    },
    
    {
        ko: {
            question: "친구들과의 관계에서 당신은?",
            answers: [
                {
                    text: "깊이 있는 대화를 나누는 소수의 친구를 선호",
                    traits: { kimDokja: 3, yooSangah: 2, shinYoosung: 1 }
                },
                {
                    text: "신뢰할 수 있는 동료들과 함께 목표를 추구",
                    traits: { yooJoonghyuk: 3, leeHyunsung: 2, jungHeewon: 1 }
                },
                {
                    text: "모든 사람과 조화롭게 지내려고 노력",
                    traits: { yooSangah: 3, leeHyunsung: 2, leeGilyoung: 1 }
                },
                {
                    text: "솔직한 피드백을 주고받는 관계를 중요시",
                    traits: { hanSooyoung: 3, jungHeewon: 2, yooJoonghyuk: 1 }
                }
            ]
        },
        en: {
            question: "In relationships with friends, you are?",
            answers: [
                {
                    text: "Prefer a few friends with deep conversations",
                    traits: { kimDokja: 3, yooSangah: 2, shinYoosung: 1 }
                },
                {
                    text: "Pursue goals with trustworthy companions",
                    traits: { yooJoonghyuk: 3, leeHyunsung: 2, jungHeewon: 1 }
                },
                {
                    text: "Try to get along harmoniously with everyone",
                    traits: { yooSangah: 3, leeHyunsung: 2, leeGilyoung: 1 }
                },
                {
                    text: "Value relationships with honest feedback",
                    traits: { hanSooyoung: 3, jungHeewon: 2, yooJoonghyuk: 1 }
                }
            ]
        },
        ja: {
            question: "友達との関係であなたは？",
            answers: [
                {
                    text: "深い会話を交わす少数の友達を好む",
                    traits: { kimDokja: 3, yooSangah: 2, shinYoosung: 1 }
                },
                {
                    text: "信頼できる仲間と目標を追求",
                    traits: { yooJoonghyuk: 3, leeHyunsung: 2, jungHeewon: 1 }
                },
                {
                    text: "すべての人と調和よく過ごそうと努力",
                    traits: { yooSangah: 3, leeHyunsung: 2, leeGilyoung: 1 }
                },
                {
                    text: "率直なフィードバックを交わす関係を重視",
                    traits: { hanSooyoung: 3, jungHeewon: 2, yooJoonghyuk: 1 }
                }
            ]
        },
        zh: {
            question: "在朋友关系中你是？",
            answers: [
                {
                    text: "偏好与少数朋友深度交流",
                    traits: { kimDokja: 3, yooSangah: 2, shinYoosung: 1 }
                },
                {
                    text: "与可信赖的伙伴一起追求目标",
                    traits: { yooJoonghyuk: 3, leeHyunsung: 2, jungHeewon: 1 }
                },
                {
                    text: "努力与所有人和谐相处",
                    traits: { yooSangah: 3, leeHyunsung: 2, leeGilyoung: 1 }
                },
                {
                    text: "重视坦诚反馈的关系",
                    traits: { hanSooyoung: 3, jungHeewon: 2, yooJoonghyuk: 1 }
                }
            ]
        }
    },
    
    {
        ko: {
            question: "자신만의 특별한 능력이 있다면?",
            answers: [
                {
                    text: "모든 상황을 예측하고 최적의 전략을 세우는 능력",
                    traits: { kimDokja: 3, hanSooyoung: 2, yooSangah: 1 }
                },
                {
                    text: "압도적인 실력으로 모든 장애물을 극복하는 힘",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1 }
                },
                {
                    text: "사람들의 마음을 이해하고 화합시키는 능력",
                    traits: { yooSangah: 3, leeHyunsung: 2, shinYoosung: 1 }
                },
                {
                    text: "상상력으로 새로운 세계를 창조하는 능력",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        en: {
            question: "If you had a special ability of your own?",
            answers: [
                {
                    text: "Ability to predict all situations and devise optimal strategies",
                    traits: { kimDokja: 3, hanSooyoung: 2, yooSangah: 1 }
                },
                {
                    text: "Power to overcome all obstacles with overwhelming skill",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1 }
                },
                {
                    text: "Ability to understand people's hearts and bring harmony",
                    traits: { yooSangah: 3, leeHyunsung: 2, shinYoosung: 1 }
                },
                {
                    text: "Ability to create new worlds with imagination",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        ja: {
            question: "自分だけの特別な能力があるとしたら？",
            answers: [
                {
                    text: "すべての状況を予測し最適な戦略を立てる能力",
                    traits: { kimDokja: 3, hanSooyoung: 2, yooSangah: 1 }
                },
                {
                    text: "圧倒的な実力ですべての障害を克服する力",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1 }
                },
                {
                    text: "人の心を理解し和合させる能力",
                    traits: { yooSangah: 3, leeHyunsung: 2, shinYoosung: 1 }
                },
                {
                    text: "想像力で新しい世界を創造する能力",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        zh: {
            question: "如果你有自己的特殊能力？",
            answers: [
                {
                    text: "预测所有情况并制定最佳策略的能力",
                    traits: { kimDokja: 3, hanSooyoung: 2, yooSangah: 1 }
                },
                {
                    text: "用压倒性实力克服所有障碍的力量",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1 }
                },
                {
                    text: "理解人心并促进和谐的能力",
                    traits: { yooSangah: 3, leeHyunsung: 2, shinYoosung: 1 }
                },
                {
                    text: "用想象力创造新世界的能力",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        }
    },
    
    {
        ko: {
            question: "팀워크에서 가장 중요하다고 생각하는 것은?",
            answers: [
                {
                    text: "각자의 역할을 명확히 하고 효율적으로 협력",
                    traits: { kimDokja: 3, yooSangah: 2, leeHyunsung: 1 }
                },
                {
                    text: "강력한 리더십으로 팀을 하나로 결속",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "서로를 믿고 지지하는 신뢰 관계",
                    traits: { leeHyunsung: 3, yooSangah: 2, kimDokja: 1 }
                },
                {
                    text: "솔직한 소통과 건설적인 비판",
                    traits: { hanSooyoung: 3, jungHeewon: 2, yooJoonghyuk: 1 }
                }
            ]
        },
        en: {
            question: "What do you think is most important in teamwork?",
            answers: [
                {
                    text: "Clarify each person's role and cooperate efficiently",
                    traits: { kimDokja: 3, yooSangah: 2, leeHyunsung: 1 }
                },
                {
                    text: "Unite the team with strong leadership",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "Trust relationships of believing in and supporting each other",
                    traits: { leeHyunsung: 3, yooSangah: 2, kimDokja: 1 }
                },
                {
                    text: "Honest communication and constructive criticism",
                    traits: { hanSooyoung: 3, jungHeewon: 2, yooJoonghyuk: 1 }
                }
            ]
        },
        ja: {
            question: "チームワークで最も重要だと思うことは？",
            answers: [
                {
                    text: "それぞれの役割を明確にし効率的に協力",
                    traits: { kimDokja: 3, yooSangah: 2, leeHyunsung: 1 }
                },
                {
                    text: "強力なリーダーシップでチームを一つに結束",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "お互いを信じ支え合う信頼関係",
                    traits: { leeHyunsung: 3, yooSangah: 2, kimDokja: 1 }
                },
                {
                    text: "率直なコミュニケーションと建設的な批判",
                    traits: { hanSooyoung: 3, jungHeewon: 2, yooJoonghyuk: 1 }
                }
            ]
        },
        zh: {
            question: "你认为团队合作中最重要的是？",
            answers: [
                {
                    text: "明确各自角色并高效合作",
                    traits: { kimDokja: 3, yooSangah: 2, leeHyunsung: 1 }
                },
                {
                    text: "用强有力的领导力团结团队",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "相互信任和支持的信任关系",
                    traits: { leeHyunsung: 3, yooSangah: 2, kimDokja: 1 }
                },
                {
                    text: "坦诚沟通和建设性批评",
                    traits: { hanSooyoung: 3, jungHeewon: 2, yooJoonghyuk: 1 }
                }
            ]
        }
    },
    
    {
        ko: {
            question: "어려운 상황에서 희망을 찾는 방법은?",
            answers: [
                {
                    text: "과거의 경험과 지식에서 해답을 찾는다",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "끝까지 포기하지 않고 계속 전진한다",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "동료들과 함께 있다는 사실에서 힘을 얻는다",
                    traits: { leeHyunsung: 3, yooSangah: 2, leeGilyoung: 1 }
                },
                {
                    text: "새로운 가능성을 상상하고 창조한다",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        en: {
            question: "How do you find hope in difficult situations?",
            answers: [
                {
                    text: "Find answers in past experiences and knowledge",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "Never give up and keep moving forward",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "Gain strength from being with companions",
                    traits: { leeHyunsung: 3, yooSangah: 2, leeGilyoung: 1 }
                },
                {
                    text: "Imagine and create new possibilities",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        ja: {
            question: "困難な状況で希望を見つける方法は？",
            answers: [
                {
                    text: "過去の経験と知識から答えを見つける",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "最後まで諦めず前進し続ける",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "仲間と一緒にいる事実から力を得る",
                    traits: { leeHyunsung: 3, yooSangah: 2, leeGilyoung: 1 }
                },
                {
                    text: "新しい可能性を想像し創造する",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        zh: {
            question: "在困难情况下寻找希望的方法是？",
            answers: [
                {
                    text: "从过去的经验和知识中寻找答案",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "永不放弃继续前进",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "从与同伴在一起的事实中获得力量",
                    traits: { leeHyunsung: 3, yooSangah: 2, leeGilyoung: 1 }
                },
                {
                    text: "想象和创造新的可能性",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        }
    },
    
    {
        ko: {
            question: "가장 이상적인 미래는?",
            answers: [
                {
                    text: "모든 사람이 자신의 이야기를 쓸 수 있는 세상",
                    traits: { kimDokja: 3, hanSooyoung: 2, yooSangah: 1 }
                },
                {
                    text: "강자와 약자의 구분 없이 모두가 평등한 세상",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1 }
                },
                {
                    text: "갈등 없이 조화롭게 공존하는 평화로운 세상",
                    traits: { yooSangah: 3, leeHyunsung: 2, shinYoosung: 1 }
                },
                {
                    text: "끝없는 모험과 새로운 발견이 있는 세상",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        en: {
            question: "What is your most ideal future?",
            answers: [
                {
                    text: "A world where everyone can write their own story",
                    traits: { kimDokja: 3, hanSooyoung: 2, yooSangah: 1 }
                },
                {
                    text: "A world where everyone is equal without distinction of strong and weak",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1 }
                },
                {
                    text: "A peaceful world of harmonious coexistence without conflict",
                    traits: { yooSangah: 3, leeHyunsung: 2, shinYoosung: 1 }
                },
                {
                    text: "A world with endless adventures and new discoveries",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        ja: {
            question: "最も理想的な未来は？",
            answers: [
                {
                    text: "すべての人が自分の物語を書ける世界",
                    traits: { kimDokja: 3, hanSooyoung: 2, yooSangah: 1 }
                },
                {
                    text: "強者と弱者の区別なくすべてが平等な世界",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1 }
                },
                {
                    text: "争いなく調和よく共存する平和な世界",
                    traits: { yooSangah: 3, leeHyunsung: 2, shinYoosung: 1 }
                },
                {
                    text: "終わりなき冒険と新しい発見がある世界",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        zh: {
            question: "最理想的未来是？",
            answers: [
                {
                    text: "所有人都能书写自己故事的世界",
                    traits: { kimDokja: 3, hanSooyoung: 2, yooSangah: 1 }
                },
                {
                    text: "没有强弱之分人人平等的世界",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, leeHyunsung: 1 }
                },
                {
                    text: "没有冲突和谐共存的和平世界",
                    traits: { yooSangah: 3, leeHyunsung: 2, shinYoosung: 1 }
                },
                {
                    text: "有无尽冒险和新发现的世界",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        }
    },
    
    {
        ko: {
            question: "당신에게 가장 중요한 가치는?",
            answers: [
                {
                    text: "다른 사람들의 행복과 안전",
                    traits: { kimDokja: 3, leeHyunsung: 2, yooSangah: 2, shinYoosung: 1 }
                },
                {
                    text: "목표를 향한 끊임없는 노력과 성장",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "모든 존재에 대한 이해와 포용",
                    traits: { yooSangah: 3, leeHyunsung: 2, leeGilyoung: 1 }
                },
                {
                    text: "자유로운 상상력과 창조의 즐거움",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        en: {
            question: "What is the most important value to you?",
            answers: [
                {
                    text: "Happiness and safety of others",
                    traits: { kimDokja: 3, leeHyunsung: 2, yooSangah: 2, shinYoosung: 1 }
                },
                {
                    text: "Constant effort and growth toward goals",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "Understanding and embracing all beings",
                    traits: { yooSangah: 3, leeHyunsung: 2, leeGilyoung: 1 }
                },
                {
                    text: "Free imagination and joy of creation",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        ja: {
            question: "あなたにとって最も重要な価値は？",
            answers: [
                {
                    text: "他の人の幸せと安全",
                    traits: { kimDokja: 3, leeHyunsung: 2, yooSangah: 2, shinYoosung: 1 }
                },
                {
                    text: "目標に向かう絶え間ない努力と成長",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "すべての存在への理解と包容",
                    traits: { yooSangah: 3, leeHyunsung: 2, leeGilyoung: 1 }
                },
                {
                    text: "自由な想像力と創造の楽しさ",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        zh: {
            question: "对你来说最重要的价值是？",
            answers: [
                {
                    text: "他人的幸福和安全",
                    traits: { kimDokja: 3, leeHyunsung: 2, yooSangah: 2, shinYoosung: 1 }
                },
                {
                    text: "朝着目标不断努力和成长",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "对所有存在的理解和包容",
                    traits: { yooSangah: 3, leeHyunsung: 2, leeGilyoung: 1 }
                },
                {
                    text: "自由的想象力和创造的快乐",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        }
    },
    
    {
        ko: {
            question: "만약 시간을 되돌릴 수 있다면?",
            answers: [
                {
                    text: "소중한 사람들을 구하기 위해 더 나은 선택을 한다",
                    traits: { kimDokja: 3, yooJoonghyuk: 2, leeHyunsung: 1 }
                },
                {
                    text: "모든 실수를 수정하여 완벽한 결과를 만든다",
                    traits: { yooJoonghyuk: 3, hanSooyoung: 2, jungHeewon: 1 }
                },
                {
                    text: "더 많은 사람들과 좋은 관계를 맺는다",
                    traits: { yooSangah: 3, leeGilyoung: 2, shinYoosung: 1 }
                },
                {
                    text: "다양한 가능성을 탐험하고 새로운 경험을 한다",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, kimDokja: 1 }
                }
            ]
        },
        en: {
            question: "If you could turn back time?",
            answers: [
                {
                    text: "Make better choices to save precious people",
                    traits: { kimDokja: 3, yooJoonghyuk: 2, leeHyunsung: 1 }
                },
                {
                    text: "Correct all mistakes to create perfect results",
                    traits: { yooJoonghyuk: 3, hanSooyoung: 2, jungHeewon: 1 }
                },
                {
                    text: "Build good relationships with more people",
                    traits: { yooSangah: 3, leeGilyoung: 2, shinYoosung: 1 }
                },
                {
                    text: "Explore various possibilities and have new experiences",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, kimDokja: 1 }
                }
            ]
        },
        ja: {
            question: "もし時間を戻せるなら？",
            answers: [
                {
                    text: "大切な人を救うためによりよい選択をする",
                    traits: { kimDokja: 3, yooJoonghyuk: 2, leeHyunsung: 1 }
                },
                {
                    text: "すべての間違いを修正し完璧な結果を作る",
                    traits: { yooJoonghyuk: 3, hanSooyoung: 2, jungHeewon: 1 }
                },
                {
                    text: "より多くの人とよい関係を築く",
                    traits: { yooSangah: 3, leeGilyoung: 2, shinYoosung: 1 }
                },
                {
                    text: "様々な可能性を探検し新しい経験をする",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, kimDokja: 1 }
                }
            ]
        },
        zh: {
            question: "如果能回到过去？",
            answers: [
                {
                    text: "为了拯救珍贵的人做出更好的选择",
                    traits: { kimDokja: 3, yooJoonghyuk: 2, leeHyunsung: 1 }
                },
                {
                    text: "纠正所有错误创造完美结果",
                    traits: { yooJoonghyuk: 3, hanSooyoung: 2, jungHeewon: 1 }
                },
                {
                    text: "与更多人建立良好关系",
                    traits: { yooSangah: 3, leeGilyoung: 2, shinYoosung: 1 }
                },
                {
                    text: "探索各种可能性获得新体验",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, kimDokja: 1 }
                }
            ]
        }
    },
    
    {
        ko: {
            question: "당신이 가진 최고의 무기는?",
            answers: [
                {
                    text: "풍부한 지식과 깊이 있는 사고력",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "강인한 의지력과 불굴의 정신",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "타인을 이해하고 소통하는 능력",
                    traits: { yooSangah: 3, leeHyunsung: 2, leeGilyoung: 1 }
                },
                {
                    text: "무한한 상상력과 창의성",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        en: {
            question: "What is your greatest weapon?",
            answers: [
                {
                    text: "Rich knowledge and deep thinking ability",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "Strong willpower and indomitable spirit",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "Ability to understand and communicate with others",
                    traits: { yooSangah: 3, leeHyunsung: 2, leeGilyoung: 1 }
                },
                {
                    text: "Infinite imagination and creativity",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        ja: {
            question: "あなたの持つ最高の武器は？",
            answers: [
                {
                    text: "豊富な知識と深い思考力",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "強靭な意志力と不屈の精神",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "他人を理解しコミュニケーションする能力",
                    traits: { yooSangah: 3, leeHyunsung: 2, leeGilyoung: 1 }
                },
                {
                    text: "無限の想像力と創造性",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        zh: {
            question: "你拥有的最强武器是？",
            answers: [
                {
                    text: "丰富的知识和深度思考能力",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "坚强的意志力和不屈精神",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "理解他人并与之沟通的能力",
                    traits: { yooSangah: 3, leeHyunsung: 2, leeGilyoung: 1 }
                },
                {
                    text: "无限的想象力和创造性",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        }
    },
    
    {
        ko: {
            question: "마지막으로, 당신에게 '이야기'란?",
            answers: [
                {
                    text: "현실을 이해하고 미래를 준비하는 가이드",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "극복해야 할 시련과 성장의 기록",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "사람들을 연결하고 이해하게 해주는 다리",
                    traits: { yooSangah: 3, leeHyunsung: 2, leeGilyoung: 1 }
                },
                {
                    text: "무한한 가능성과 꿈을 담은 세계",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        en: {
            question: "Finally, what is a 'story' to you?",
            answers: [
                {
                    text: "A guide to understand reality and prepare for the future",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "A record of trials to overcome and growth",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "A bridge that connects people and helps understanding",
                    traits: { yooSangah: 3, leeHyunsung: 2, leeGilyoung: 1 }
                },
                {
                    text: "A world containing infinite possibilities and dreams",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        ja: {
            question: "最後に、あなたにとって「物語」とは？",
            answers: [
                {
                    text: "現実を理解し未来を準備するガイド",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "克服すべき試練と成長の記録",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "人を繋ぎ理解させてくれる橋",
                    traits: { yooSangah: 3, leeHyunsung: 2, leeGilyoung: 1 }
                },
                {
                    text: "無限の可能性と夢を込めた世界",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        },
        zh: {
            question: "最后，对你来说'故事'是什么？",
            answers: [
                {
                    text: "理解现实并为未来做准备的指南",
                    traits: { kimDokja: 3, yooSangah: 2, hanSooyoung: 1 }
                },
                {
                    text: "需要克服的试炼和成长的记录",
                    traits: { yooJoonghyuk: 3, jungHeewon: 2, shinYoosung: 1 }
                },
                {
                    text: "连接人们并促进理解的桥梁",
                    traits: { yooSangah: 3, leeHyunsung: 2, leeGilyoung: 1 }
                },
                {
                    text: "包含无限可能性和梦想的世界",
                    traits: { hanSooyoung: 3, leeGilyoung: 2, shinYoosung: 1 }
                }
            ]
        }
    }
];
