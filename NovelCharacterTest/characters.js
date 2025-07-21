// Character database for Omniscient Reader's Viewpoint
const characters = {
    kimDokja: {
        id: 'kimDokja',
        avatar: '독',
        traits: {
            ko: {
                name: '김독자',
                nickname: '전지적 독자',
                shortTrait: '자기희생적인 전략가',
                description: '책을 통해 세상을 바라보는 냉철한 관찰자이자 동료를 위해서라면 자신을 희생할 수 있는 헌신적인 인물입니다.',
                personality: [
                    '깊이 있는 사고를 하는 내향적 성격',
                    '타인의 감정과 상황을 잘 파악하는 공감 능력',
                    '위기 상황에서 냉정한 판단력을 발휘',
                    '자신보다 타인을 우선시하는 이타적 성향'
                ],
                strengths: [
                    '뛰어난 전략적 사고력과 분석력',
                    '동료들에 대한 깊은 이해와 배려',
                    '어떤 상황에서도 포기하지 않는 의지력',
                    '다양한 지식을 바탕으로 한 문제 해결 능력'
                ],
                weaknesses: [
                    '자기 자신을 과소평가하는 경향',
                    '혼자서 모든 것을 해결하려는 성향',
                    '타인에게 의존하거나 도움을 요청하는 것을 어려워함',
                    '자신의 감정을 표현하는데 서툼'
                ],
                relationships: [
                    {
                        character: '유중혁',
                        description: '서로를 깊이 이해하는 운명적 동반자. 겉으로는 대립하지만 절대적 신뢰 관계.'
                    },
                    {
                        character: '한수영',
                        description: '치고받는 관계이지만 서로의 능력을 인정하는 전략적 파트너.'
                    },
                    {
                        character: '유상아',
                        description: '일상에서 가장 편안함을 느끼는 동료이자 든든한 지지자.'
                    }
                ]
            },
            en: {
                name: 'Kim Dokja',
                nickname: 'Omniscient Reader',
                shortTrait: 'Self-sacrificing Strategist',
                description: 'A perceptive observer who views the world through books and a devoted person willing to sacrifice himself for his companions.',
                personality: [
                    'Introverted personality with deep thinking',
                    'High empathy and ability to understand others',
                    'Cool-headed judgment in crisis situations',
                    'Altruistic tendency to prioritize others over self'
                ],
                strengths: [
                    'Excellent strategic thinking and analytical skills',
                    'Deep understanding and consideration for companions',
                    'Unwavering willpower in any situation',
                    'Problem-solving ability based on diverse knowledge'
                ],
                weaknesses: [
                    'Tendency to underestimate oneself',
                    'Inclination to solve everything alone',
                    'Difficulty depending on others or asking for help',
                    'Awkwardness in expressing own emotions'
                ],
                relationships: [
                    {
                        character: 'Yoo Joonghyuk',
                        description: 'Fateful companions who deeply understand each other. Despite surface conflicts, they share absolute trust.'
                    },
                    {
                        character: 'Han Sooyoung',
                        description: 'A back-and-forth relationship but strategic partners who acknowledge each others abilities.'
                    },
                    {
                        character: 'Yoo Sangah',
                        description: 'A colleague who provides the most comfort in daily life and a reliable supporter.'
                    }
                ]
            },
            ja: {
                name: 'キム・ドクジャ',
                nickname: '全知読者',
                shortTrait: '自己犠牲的戦略家',
                description: '本を通して世界を見る冷静な観察者であり、仲間のためなら自分を犠牲にできる献身的な人物です。',
                personality: [
                    '深い思考をする内向的な性格',
                    '他人の感情と状況をよく把握する共感能力',
                    '危機状況での冷静な判断力',
                    '自分より他人を優先する利他的傾向'
                ],
                strengths: [
                    '優れた戦略的思考力と分析力',
                    '仲間に対する深い理解と配慮',
                    'どんな状況でも諦めない意志力',
                    '多様な知識に基づく問題解決能力'
                ],
                weaknesses: [
                    '自分自身を過小評価する傾向',
                    '一人ですべてを解決しようとする傾向',
                    '他人に依存したり助けを求めることが苦手',
                    '自分の感情を表現するのが下手'
                ],
                relationships: [
                    {
                        character: 'ユ・ジュンヒョク',
                        description: 'お互いを深く理解する運命的な同伴者。表面上は対立するが絶対的な信頼関係。'
                    },
                    {
                        character: 'ハン・スヨン',
                        description: 'ぶつかり合う関係だがお互いの能力を認める戦略的パートナー。'
                    },
                    {
                        character: 'ユ・サンア',
                        description: '日常で最も安らぎを感じる同僚であり頼もしい支持者。'
                    }
                ]
            },
            zh: {
                name: '金独子',
                nickname: '全知读者',
                shortTrait: '自我牺牲的战略家',
                description: '通过书籍观察世界的冷静观察者，为了同伴可以牺牲自己的献身人物。',
                personality: [
                    '进行深度思考的内向性格',
                    '很好掌握他人情感和状况的共情能力',
                    '危机情况下的冷静判断力',
                    '优先考虑他人的利他倾向'
                ],
                strengths: [
                    '卓越的战略思维和分析能力',
                    '对同伴的深度理解和关怀',
                    '在任何情况下都不放弃的意志力',
                    '基于多样知识的问题解决能力'
                ],
                weaknesses: [
                    '低估自己的倾向',
                    '试图独自解决一切的倾向',
                    '难以依赖他人或寻求帮助',
                    '不善于表达自己的情感'
                ],
                relationships: [
                    {
                        character: '刘中赫',
                        description: '相互深度理解的命运同伴。表面对立但拥有绝对信任关系。'
                    },
                    {
                        character: '韩秀英',
                        description: '相互冲突但承认彼此能力的战略伙伴。'
                    },
                    {
                        character: '刘尚雅',
                        description: '日常中感到最舒适的同事和可靠的支持者。'
                    }
                ]
            }
        }
    },
    
    yooJoonghyuk: {
        id: 'yooJoonghyuk',
        avatar: '중',
        traits: {
            ko: {
                name: '유중혁',
                nickname: '회귀자',
                shortTrait: '완벽주의적 리더',
                description: '수많은 회귀를 통해 단련된 강력한 의지력과 리더십을 가진 인물. 냉정하지만 내면에는 깊은 애정을 숨기고 있습니다.',
                personality: [
                    '목표 달성을 위해서는 수단과 방법을 가리지 않는 실용주의',
                    '타인에게 쉽게 마음을 열지 않는 신중한 성격',
                    '강한 책임감과 완벽을 추구하는 성향',
                    '감정 표현을 억제하고 이성적 판단을 우선시'
                ],
                strengths: [
                    '압도적인 실력과 카리스마',
                    '어떤 위기든 돌파할 수 있는 강인한 정신력',
                    '팀을 이끌어가는 탁월한 리더십',
                    '축적된 경험을 바탕으로 한 정확한 판단력'
                ],
                weaknesses: [
                    '타인과의 거리감을 유지하려는 성향',
                    '혼자서 모든 부담을 짊어지려 함',
                    '감정 표현이 서툴러 오해를 받기 쉬움',
                    '완벽을 추구하다 보니 유연성이 부족'
                ],
                relationships: [
                    {
                        character: '김독자',
                        description: '처음에는 경계했지만 점차 신뢰하게 된 특별한 존재. 서로 없어서는 안 될 동반자.'
                    },
                    {
                        character: '이지혜',
                        description: '제자이자 후계자로 여기는 존재. 엄격하지만 애정 어린 지도를 아끼지 않음.'
                    },
                    {
                        character: '한수영',
                        description: '서로 견제하면서도 인정하는 미묘한 관계. 때로는 협력하는 라이벌.'
                    }
                ]
            },
            en: {
                name: 'Yoo Joonghyuk',
                nickname: 'The Regressor',
                shortTrait: 'Perfectionist Leader',
                description: 'A person with powerful willpower and leadership forged through countless regressions. Cold but hiding deep affection within.',
                personality: [
                    'Pragmatism that uses any means necessary to achieve goals',
                    'Cautious personality that doesnt easily open up to others',
                    'Strong sense of responsibility and perfectionist tendencies',
                    'Suppresses emotional expression and prioritizes rational judgment'
                ],
                strengths: [
                    'Overwhelming skill and charisma',
                    'Strong mentality to break through any crisis',
                    'Excellent leadership to guide the team',
                    'Accurate judgment based on accumulated experience'
                ],
                weaknesses: [
                    'Tendency to maintain distance from others',
                    'Tries to bear all burdens alone',
                    'Poor at expressing emotions, easily misunderstood',
                    'Lacks flexibility due to pursuing perfection'
                ],
                relationships: [
                    {
                        character: 'Kim Dokja',
                        description: 'Initially wary but gradually became a trusted special existence. Inseparable companions.'
                    },
                    {
                        character: 'Lee Jihye',
                        description: 'Regarded as disciple and successor. Strict but generous with affectionate guidance.'
                    },
                    {
                        character: 'Han Sooyoung',
                        description: 'A subtle relationship of mutual rivalry and acknowledgment. Sometimes cooperating rivals.'
                    }
                ]
            },
            ja: {
                name: 'ユ・ジュンヒョク',
                nickname: '回帰者',
                shortTrait: '完璧主義的リーダー',
                description: '数多くの回帰を通して鍛えられた強力な意志力とリーダーシップを持つ人物。冷静だが内面には深い愛情を隠している。',
                personality: [
                    '目標達成のためには手段を選ばない実用主義',
                    '他人に簡単に心を開かない慎重な性格',
                    '強い責任感と完璧を追求する傾向',
                    '感情表現を抑制し理性的判断を優先'
                ],
                strengths: [
                    '圧倒的な実力とカリスマ',
                    'どんな危機でも突破できる強靭な精神力',
                    'チームを導く卓越したリーダーシップ',
                    '蓄積された経験に基づく正確な判断力'
                ],
                weaknesses: [
                    '他人との距離感を維持しようとする傾向',
                    '一人ですべての負担を背負おうとする',
                    '感情表現が下手で誤解を受けやすい',
                    '完璧を追求するため柔軟性に欠ける'
                ],
                relationships: [
                    {
                        character: 'キム・ドクジャ',
                        description: '最初は警戒したが次第に信頼するようになった特別な存在。お互いなくてはならない同伴者。'
                    },
                    {
                        character: 'イ・ジへ',
                        description: '弟子であり後継者として考えている存在。厳格だが愛情深い指導を惜しまない。'
                    },
                    {
                        character: 'ハン・スヨン',
                        description: 'お互いを牽制しながらも認める微妙な関係。時には協力するライバル。'
                    }
                ]
            },
            zh: {
                name: '刘中赫',
                nickname: '回归者',
                shortTrait: '完美主义领导者',
                description: '通过无数次回归锻炼出强大意志力和领导力的人物。冷静但内心隐藏着深深的情感。',
                personality: [
                    '为达成目标不择手段的实用主义',
                    '不轻易向他人敞开心扉的谨慎性格',
                    '强烈的责任感和追求完美的倾向',
                    '抑制情感表达，优先理性判断'
                ],
                strengths: [
                    '压倒性的实力和魅力',
                    '能突破任何危机的坚强精神力',
                    '引领团队的卓越领导力',
                    '基于积累经验的准确判断力'
                ],
                weaknesses: [
                    '试图与他人保持距离的倾向',
                    '试图独自承担所有负担',
                    '不善表达情感容易被误解',
                    '追求完美导致缺乏灵活性'
                ],
                relationships: [
                    {
                        character: '金独子',
                        description: '起初警惕但逐渐信任的特殊存在。彼此不可缺少的同伴。'
                    },
                    {
                        character: '李智慧',
                        description: '视为弟子和继承者的存在。严格但不吝惜慈爱的指导。'
                    },
                    {
                        character: '韩秀英',
                        description: '相互牵制又相互认可的微妙关系。有时合作的竞争对手。'
                    }
                ]
            }
        }
    },
    
    hanSooyoung: {
        id: 'hanSooyoung',
        avatar: '수',
        traits: {
            ko: {
                name: '한수영',
                nickname: '작가',
                shortTrait: '천재적 전략가',
                description: '뛰어난 지능과 창의력을 가진 작가. 독설가이지만 동료들을 위해서는 무엇이든 할 수 있는 의리 있는 인물입니다.',
                personality: [
                    '날카로운 통찰력과 빠른 판단력',
                    '솔직하고 직설적인 화법으로 때로는 무례해 보임',
                    '자신의 능력에 대한 확고한 자신감',
                    '목적 달성을 위해서는 냉혹한 결정도 마다하지 않음'
                ],
                strengths: [
                    '천재적인 창작 능력과 상상력',
                    '복잡한 상황을 단순화하는 분석력',
                    '위기 상황에서 빛나는 기지와 순발력',
                    '자신만의 방식으로 동료들을 지키는 충성심'
                ],
                weaknesses: [
                    '거칠고 공격적인 언행으로 오해를 받기 쉬움',
                    '자신의 진심을 솔직하게 표현하는 것을 어려워함',
                    '완벽한 결과를 위해서는 수단을 가리지 않는 성향',
                    '타인에게 의존하기보다는 혼자 해결하려 함'
                ],
                relationships: [
                    {
                        character: '김독자',
                        description: '서로를 이해하는 특별한 관계. 표면적으로는 다투지만 깊은 신뢰로 연결됨.'
                    },
                    {
                        character: '유중혁',
                        description: '서로의 실력을 인정하면서도 견제하는 관계. 때로는 협력하는 라이벌.'
                    },
                    {
                        character: '이길영',
                        description: '마치 가족처럼 아끼는 존재. 아이들에게는 따뜻한 면을 보여줌.'
                    }
                ]
            },
            en: {
                name: 'Han Sooyoung',
                nickname: 'The Author',
                shortTrait: 'Genius Strategist',
                description: 'An author with outstanding intelligence and creativity. Though sharp-tongued, a loyal person who would do anything for companions.',
                personality: [
                    'Sharp insight and quick judgment',
                    'Honest and direct speech that sometimes seems rude',
                    'Firm confidence in own abilities',
                    'Willing to make ruthless decisions to achieve objectives'
                ],
                strengths: [
                    'Genius creative ability and imagination',
                    'Analytical skills to simplify complex situations',
                    'Wit and quick thinking that shines in crisis',
                    'Loyalty to protect companions in her own way'
                ],
                weaknesses: [
                    'Easily misunderstood due to rough and aggressive behavior',
                    'Difficulty expressing true feelings honestly',
                    'Tendency to use any means for perfect results',
                    'Prefers solving things alone rather than depending on others'
                ],
                relationships: [
                    {
                        character: 'Kim Dokja',
                        description: 'A special relationship of mutual understanding. Fight on surface but connected by deep trust.'
                    },
                    {
                        character: 'Yoo Joonghyuk',
                        description: 'Acknowledge each others skills while remaining rivals. Sometimes cooperating competitors.'
                    },
                    {
                        character: 'Lee Gilyoung',
                        description: 'Cherished like family. Shows warm side to children.'
                    }
                ]
            },
            ja: {
                name: 'ハン・スヨン',
                nickname: '作家',
                shortTrait: '天才的戦略家',
                description: '優れた知能と創造力を持つ作家。毒舌家だが仲間のためなら何でもできる義理のある人物。',
                personality: [
                    '鋭い洞察力と素早い判断力',
                    '率直で直接的な話し方で時には無礼に見える',
                    '自分の能力に対する確固たる自信',
                    '目的達成のためには冷酷な決定も厭わない'
                ],
                strengths: [
                    '天才的な創作能力と想像力',
                    '複雑な状況を単純化する分析力',
                    '危機状況で光る機転と瞬発力',
                    '自分なりの方法で仲間を守る忠誠心'
                ],
                weaknesses: [
                    '荒く攻撃的な言動で誤解を受けやすい',
                    '自分の真心を率直に表現するのが苦手',
                    '完璧な結果のためには手段を選ばない傾向',
                    '他人に依存するより一人で解決しようとする'
                ],
                relationships: [
                    {
                        character: 'キム・ドクジャ',
                        description: 'お互いを理解する特別な関係。表面的には争うが深い信頼で結ばれる。'
                    },
                    {
                        character: 'ユ・ジュンヒョク',
                        description: 'お互いの実力を認めながらも牽制する関係。時には協力するライバル。'
                    },
                    {
                        character: 'イ・ギリョン',
                        description: 'まるで家族のように大切にする存在。子どもには温かい面を見せる。'
                    }
                ]
            },
            zh: {
                name: '韩秀英',
                nickname: '作家',
                shortTrait: '天才战略家',
                description: '拥有出色智能和创造力的作家。虽然毒舌但为了同伴可以做任何事的有义气人物。',
                personality: [
                    '敏锐的洞察力和快速的判断力',
                    '坦率直接的说话方式有时显得无礼',
                    '对自己能力的坚定自信',
                    '为达成目的不惜做出冷酷决定'
                ],
                strengths: [
                    '天才般的创作能力和想象力',
                    '将复杂情况简化的分析力',
                    '危机情况下发光的机智和应变力',
                    '以自己的方式守护同伴的忠诚心'
                ],
                weaknesses: [
                    '粗暴攻击性的言行容易被误解',
                    '难以坦率表达自己的真心',
                    '为了完美结果不择手段的倾向',
                    '比起依赖他人更倾向于独自解决'
                ],
                relationships: [
                    {
                        character: '金独子',
                        description: '相互理解的特殊关系。表面上争吵但由深度信任连接。'
                    },
                    {
                        character: '刘中赫',
                        description: '承认彼此实力同时相互牵制的关系。有时合作的竞争对手。'
                    },
                    {
                        character: '李吉永',
                        description: '如家人般珍惜的存在。对孩子们展现温暖的一面。'
                    }
                ]
            }
        }
    },
    
    yooSangah: {
        id: 'yooSangah',
        avatar: '상',
        traits: {
            ko: {
                name: '유상아',
                nickname: '언어학자',
                shortTrait: '지혜로운 조력자',
                description: '온화하고 지적인 성격의 언어학 전공자. 팀의 정신적 지주 역할을 하며 모든 상황에서 냉정함을 유지합니다.',
                personality: [
                    '차분하고 안정적인 성격으로 주변을 안심시킴',
                    '뛰어난 언어 능력과 학습 능력',
                    '갈등 상황에서 중재자 역할을 자주 담당',
                    '타인을 배려하는 따뜻한 마음을 가짐'
                ],
                strengths: [
                    '다양한 언어와 문화에 대한 깊은 이해',
                    '팀의 화합을 이끌어가는 조율 능력',
                    '냉정한 분석력과 논리적 사고',
                    '어려운 상황에서도 포기하지 않는 의지'
                ],
                weaknesses: [
                    '자신의 의견을 강하게 주장하는 것을 어려워함',
                    '타인을 위해 자신을 희생하는 경향',
                    '갈등 상황을 피하려는 성향',
                    '자신의 능력을 과소평가하는 경향'
                ],
                relationships: [
                    {
                        character: '김독자',
                        description: '직장 동료에서 시작해 가장 신뢰하는 동반자가 된 관계. 서로에게 편안함을 주는 존재.'
                    },
                    {
                        character: '정희원',
                        description: '같은 여성으로서 서로를 이해하고 지지하는 친밀한 관계.'
                    },
                    {
                        character: '이현성',
                        description: '서로의 진중함을 인정하고 존중하는 관계. 팀의 균형추 역할을 함께 담당.'
                    }
                ]
            },
            en: {
                name: 'Yoo Sangah',
                nickname: 'The Linguist',
                shortTrait: 'Wise Supporter',
                description: 'A linguistics major with gentle and intellectual personality. Serves as the teams mental pillar and maintains composure in all situations.',
                personality: [
                    'Calm and stable personality that reassures others',
                    'Excellent language and learning abilities',
                    'Often serves as mediator in conflict situations',
                    'Has a warm heart that considers others'
                ],
                strengths: [
                    'Deep understanding of various languages and cultures',
                    'Coordination ability to lead team harmony',
                    'Cool analytical skills and logical thinking',
                    'Will to never give up even in difficult situations'
                ],
                weaknesses: [
                    'Difficulty strongly asserting own opinions',
                    'Tendency to sacrifice self for others',
                    'Inclination to avoid conflict situations',
                    'Tendency to underestimate own abilities'
                ],
                relationships: [
                    {
                        character: 'Kim Dokja',
                        description: 'Started as workplace colleagues and became most trusted companions. Existence that gives comfort to each other.'
                    },
                    {
                        character: 'Jung Heewon',
                        description: 'Intimate relationship of understanding and supporting each other as fellow women.'
                    },
                    {
                        character: 'Lee Hyunsung',
                        description: 'Relationship of acknowledging and respecting each others sincerity. Together serve as the teams balance.'
                    }
                ]
            },
            ja: {
                name: 'ユ・サンア',
                nickname: '言語学者',
                shortTrait: '賢明な協力者',
                description: '温和で知的な性格の言語学専攻者。チームの精神的支柱の役割をし、すべての状況で冷静さを維持する。',
                personality: [
                    '落ち着いて安定した性格で周りを安心させる',
                    '優れた言語能力と学習能力',
                    '対立状況で仲裁者の役割を頻繁に担当',
                    '他人を思いやる温かい心を持つ'
                ],
                strengths: [
                    '多様な言語と文化に対する深い理解',
                    'チームの和合を導く調整能力',
                    '冷静な分析力と論理的思考',
                    '困難な状況でも諦めない意志'
                ],
                weaknesses: [
                    '自分の意見を強く主張するのが苦手',
                    '他人のために自分を犠牲にする傾向',
                    '対立状況を避けようとする傾向',
                    '自分の能力を過小評価する傾向'
                ],
                relationships: [
                    {
                        character: 'キム・ドクジャ',
                        description: '職場の同僚から始まり最も信頼する同伴者になった関係。お互いに安らぎを与える存在。'
                    },
                    {
                        character: 'チョン・ヒウォン',
                        description: '同じ女性としてお互いを理解し支持する親密な関係。'
                    },
                    {
                        character: 'イ・ヒョンソン',
                        description: 'お互いの真摯さを認め尊重する関係。チームのバランスを一緒に担当。'
                    }
                ]
            },
            zh: {
                name: '刘尚雅',
                nickname: '语言学家',
                shortTrait: '智慧的协助者',
                description: '温和知性的语言学专业者。担任团队精神支柱角色，在所有情况下保持冷静。',
                personality: [
                    '沉着稳定的性格让周围人安心',
                    '优秀的语言能力和学习能力',
                    '在冲突情况下经常担任调解者角色',
                    '拥有体贴他人的温暖心灵'
                ],
                strengths: [
                    '对多种语言和文化的深度理解',
                    '引导团队和谐的协调能力',
                    '冷静的分析力和逻辑思维',
                    '即使在困难情况下也不放弃的意志'
                ],
                weaknesses: [
                    '难以强烈主张自己的意见',
                    '为他人牺牲自己的倾向',
                    '试图避免冲突情况的倾向',
                    '低估自己能力的倾向'
                ],
                relationships: [
                    {
                        character: '金独子',
                        description: '从职场同事开始成为最信任同伴的关系。彼此给予安慰的存在。'
                    },
                    {
                        character: '郑熙媛',
                        description: '作为同性相互理解和支持的亲密关系。'
                    },
                    {
                        character: '李贤成',
                        description: '承认和尊重彼此诚意的关系。共同担任团队平衡者角色。'
                    }
                ]
            }
        }
    },
    
    jungHeewon: {
        id: 'jungHeewon',
        avatar: '희',
        traits: {
            ko: {
                name: '정희원',
                nickname: '파괴의 심판자',
                shortTrait: '정의로운 전사',
                description: '강한 정의감과 의리를 가진 검사 출신 전사. 동료를 지키기 위해서라면 어떤 희생도 마다하지 않는 용감한 인물입니다.',
                personality: [
                    '정의감이 강하고 불의를 참지 못하는 성격',
                    '동료에 대한 깊은 애정과 보호 본능',
                    '솔직하고 직설적인 성격으로 마음을 잘 드러냄',
                    '한 번 결심하면 끝까지 밀고 나가는 의지력'
                ],
                strengths: [
                    '뛰어난 검술 실력과 전투 능력',
                    '위기 상황에서 발휘되는 리더십',
                    '동료들에 대한 절대적인 충성심',
                    '정확한 상황 판단력과 결단력'
                ],
                weaknesses: [
                    '감정적으로 행동하는 경우가 많음',
                    '자신을 희생하더라도 남을 구하려는 성향',
                    '복잡한 상황보다는 직관적 해결을 선호',
                    '자신의 약함을 드러내는 것을 어려워함'
                ],
                relationships: [
                    {
                        character: '김독자',
                        description: '절대적으로 신뢰하고 따르는 리더. 그를 위해서라면 목숨도 바칠 각오가 되어 있음.'
                    },
                    {
                        character: '유상아',
                        description: '서로를 이해하고 지지하는 여성 동료. 팀에서 서로에게 큰 힘이 됨.'
                    },
                    {
                        character: '이현성',
                        description: '서로의 전투 실력을 인정하고 존중하는 동료 전사.'
                    }
                ]
            },
            en: {
                name: 'Jung Heewon',
                nickname: 'Judge of Destruction',
                shortTrait: 'Righteous Warrior',
                description: 'A prosecutor-turned-warrior with strong sense of justice and loyalty. A brave person who would make any sacrifice to protect companions.',
                personality: [
                    'Strong sense of justice and intolerance for injustice',
                    'Deep affection and protective instincts for companions',
                    'Honest and direct personality that reveals feelings well',
                    'Willpower to push through to the end once decided'
                ],
                strengths: [
                    'Excellent swordsmanship and combat abilities',
                    'Leadership demonstrated in crisis situations',
                    'Absolute loyalty to companions',
                    'Accurate situational judgment and decisiveness'
                ],
                weaknesses: [
                    'Often acts emotionally',
                    'Tendency to save others even by sacrificing self',
                    'Prefers intuitive solutions over complex situations',
                    'Difficulty revealing own weaknesses'
                ],
                relationships: [
                    {
                        character: 'Kim Dokja',
                        description: 'A leader she absolutely trusts and follows. Ready to sacrifice life for him.'
                    },
                    {
                        character: 'Yoo Sangah',
                        description: 'Female colleague who understands and supports each other. Great source of strength for each other in the team.'
                    },
                    {
                        character: 'Lee Hyunsung',
                        description: 'Fellow warrior who acknowledges and respects each others combat skills.'
                    }
                ]
            },
            ja: {
                name: 'チョン・ヒウォン',
                nickname: '破壊の審判者',
                shortTrait: '正義の戦士',
                description: '強い正義感と義理を持つ検事出身の戦士。仲間を守るためならどんな犠牲も厭わない勇敢な人物。',
                personality: [
                    '正義感が強く不義を我慢できない性格',
                    '仲間に対する深い愛情と保護本能',
                    '率直で直接的な性格で心をよく現す',
                    '一度決心すると最後まで押し通す意志力'
                ],
                strengths: [
                    '優れた剣術の実力と戦闘能力',
                    '危機状況で発揮されるリーダーシップ',
                    '仲間に対する絶対的な忠誠心',
                    '正確な状況判断力と決断力'
                ],
                weaknesses: [
                    '感情的に行動する場合が多い',
                    '自分を犠牲にしても他人を救おうとする傾向',
                    '複雑な状況より直感的解決を好む',
                    '自分の弱さを現すのが苦手'
                ],
                relationships: [
                    {
                        character: 'キム・ドクジャ',
                        description: '絶対的に信頼し従うリーダー。彼のためなら命も捧げる覚悟ができている。'
                    },
                    {
                        character: 'ユ・サンア',
                        description: 'お互いを理解し支持する女性同僚。チームでお互いに大きな力になる。'
                    },
                    {
                        character: 'イ・ヒョンソン',
                        description: 'お互いの戦闘実力を認め尊重する同僚戦士。'
                    }
                ]
            },
            zh: {
                name: '郑熙媛',
                nickname: '破坏审判者',
                shortTrait: '正义战士',
                description: '拥有强烈正义感和义气的检察官出身战士。为了守护同伴不惜任何牺牲的勇敢人物。',
                personality: [
                    '正义感强烈，无法忍受不义的性格',
                    '对同伴的深深关爱和保护本能',
                    '坦率直接的性格，很好地表露内心',
                    '一旦下定决心就坚持到底的意志力'
                ],
                strengths: [
                    '优秀的剑术实力和战斗能力',
                    '危机情况下发挥的领导力',
                    '对同伴绝对的忠诚心',
                    '准确的状况判断力和决断力'
                ],
                weaknesses: [
                    '经常情绪化行动',
                    '即使牺牲自己也要拯救他人的倾向',
                    '比起复杂情况更偏好直觉解决',
                    '难以显露自己的弱点'
                ],
                relationships: [
                    {
                        character: '金独子',
                        description: '绝对信赖和跟随的领导者。为了他连生命都准备奉献。'
                    },
                    {
                        character: '刘尚雅',
                        description: '相互理解和支持的女性同事。在团队中彼此是巨大的力量源泉。'
                    },
                    {
                        character: '李贤成',
                        description: '承认和尊重彼此战斗实力的同僚战士。'
                    }
                ]
            }
        }
    },
    
    leeHyunsung: {
        id: 'leeHyunsung',
        avatar: '현',
        traits: {
            ko: {
                name: '이현성',
                nickname: '충직한 방패',
                shortTrait: '신뢰할 수 있는 수호자',
                description: '전 군인으로 강한 책임감과 충성심을 가진 인물. 동료들의 방패가 되어 묵묵히 자신의 역할을 수행합니다.',
                personality: [
                    '책임감이 강하고 맡은 일을 끝까지 완수하는 성격',
                    '말보다는 행동으로 자신의 마음을 표현',
                    '동료들을 보호하려는 강한 의지',
                    '겸손하고 자신을 낮추는 성향'
                ],
                strengths: [
                    '뛰어난 방어 능력과 지구력',
                    '어떤 상황에서도 흔들리지 않는 정신력',
                    '팀워크를 중시하고 조화를 추구',
                    '위기 상황에서 냉정함을 유지하는 능력'
                ],
                weaknesses: [
                    '자신의 의견을 적극적으로 표현하지 않음',
                    '다른 사람의 부담을 자신이 떠안으려 함',
                    '개인적인 욕심보다는 다른 사람을 우선시',
                    '자신의 가치를 낮게 평가하는 경향'
                ],
                relationships: [
                    {
                        character: '김독자',
                        description: '처음에는 유중혁을 따랐지만 김독자의 진심을 알게 되어 충성을 바친 리더.'
                    },
                    {
                        character: '유중혁',
                        description: '과거 함께했던 동료이자 실력을 인정받은 존재. 복잡하지만 서로를 이해하는 관계.'
                    },
                    {
                        character: '정희원',
                        description: '서로의 전투 스타일을 보완하는 든든한 동료 관계.'
                    }
                ]
            },
            en: {
                name: 'Lee Hyunsung',
                nickname: 'Loyal Shield',
                shortTrait: 'Reliable Guardian',
                description: 'Former soldier with strong sense of responsibility and loyalty. Silently performs his role as the shield of his companions.',
                personality: [
                    'Strong sense of responsibility and completes assigned tasks to the end',
                    'Expresses feelings through actions rather than words',
                    'Strong will to protect companions',
                    'Humble and self-deprecating tendencies'
                ],
                strengths: [
                    'Excellent defensive abilities and endurance',
                    'Unwavering mentality in any situation',
                    'Values teamwork and pursues harmony',
                    'Ability to maintain composure in crisis situations'
                ],
                weaknesses: [
                    'Does not actively express own opinions',
                    'Tries to take on others burdens',
                    'Prioritizes others over personal desires',
                    'Tendency to undervalue own worth'
                ],
                relationships: [
                    {
                        character: 'Kim Dokja',
                        description: 'Initially followed Yoo Joonghyuk but came to understand Kim Dokjas sincerity and devoted loyalty.'
                    },
                    {
                        character: 'Yoo Joonghyuk',
                        description: 'Past colleague whose skills were acknowledged. Complex but mutually understanding relationship.'
                    },
                    {
                        character: 'Jung Heewon',
                        description: 'Reliable colleague relationship that complements each others combat styles.'
                    }
                ]
            },
            ja: {
                name: 'イ・ヒョンソン',
                nickname: '忠実な盾',
                shortTrait: '信頼できる守護者',
                description: '元軍人で強い責任感と忠誠心を持つ人物。仲間の盾となって黙々と自分の役割を果たす。',
                personality: [
                    '責任感が強く担当した仕事を最後まで完遂する性格',
                    '言葉よりも行動で自分の気持ちを表現',
                    '仲間を守ろうとする強い意志',
                    '謙遜で自分を下げる傾向'
                ],
                strengths: [
                    '優れた防御能力と持久力',
                    'どんな状況でも揺るがない精神力',
                    'チームワークを重視し調和を追求',
                    '危機状況で冷静さを維持する能力'
                ],
                weaknesses: [
                    '自分の意見を積極的に表現しない',
                    '他の人の負担を自分が背負おうとする',
                    '個人的な欲よりも他人を優先',
                    '自分の価値を低く評価する傾向'
                ],
                relationships: [
                    {
                        character: 'キム・ドクジャ',
                        description: '最初はユ・ジュンヒョクに従ったがキム・ドクジャの真心を知って忠誠を捧げたリーダー。'
                    },
                    {
                        character: 'ユ・ジュンヒョク',
                        description: '過去一緒だった同僚であり実力を認められた存在。複雑だがお互いを理解する関係。'
                    },
                    {
                        character: 'チョン・ヒウォン',
                        description: 'お互いの戦闘スタイルを補完する頼もしい同僚関係。'
                    }
                ]
            },
            zh: {
                name: '李贤成',
                nickname: '忠诚之盾',
                shortTrait: '可靠的守护者',
                description: '前军人，拥有强烈责任感和忠诚心的人物。默默担任同伴们的盾牌，履行自己的角色。',
                personality: [
                    '责任感强，将承担的工作坚持到底的性格',
                    '用行动而非言语表达自己的心意',
                    '保护同伴的强烈意志',
                    '谦逊和贬低自己的倾向'
                ],
                strengths: [
                    '优秀的防御能力和持久力',
                    '在任何情况下都不动摇的精神力',
                    '重视团队合作并追求和谐',
                    '在危机情况下保持冷静的能力'
                ],
                weaknesses: [
                    '不积极表达自己的意见',
                    '试图承担他人的负担',
                    '优先考虑他人而非个人欲望',
                    '低估自己价值的倾向'
                ],
                relationships: [
                    {
                        character: '金独子',
                        description: '起初跟随刘中赫但了解金独子的真心后献出忠诚的领导者。'
                    },
                    {
                        character: '刘中赫',
                        description: '过去共事的同事和被认可实力的存在。复杂但相互理解的关系。'
                    },
                    {
                        character: '郑熙媛',
                        description: '相互补充战斗风格的可靠同事关系。'
                    }
                ]
            }
        }
    },
    
    leeGilyoung: {
        id: 'leeGilyoung',
        avatar: '길',
        traits: {
            ko: {
                name: '이길영',
                nickname: '벌레 조종사',
                shortTrait: '순수한 모험가',
                description: '벌레를 조종하는 특별한 능력을 가진 소년. 순수하고 호기심이 많으며 김독자를 형처럼 따릅니다.',
                personality: [
                    '순수하고 천진난만한 어린이다운 성격',
                    '새로운 것에 대한 끝없는 호기심',
                    '어른들, 특히 김독자에 대한 깊은 애정과 신뢰',
                    '위험한 상황에서도 두려움보다는 흥미를 느끼는 담대함'
                ],
                strengths: [
                    '곤충을 조종하는 독특하고 유용한 능력',
                    '순수한 마음으로 상황을 단순하게 바라보는 시각',
                    '빠른 적응력과 학습 능력',
                    '팀에 활력과 밝은 에너지를 불어넣는 존재'
                ],
                weaknesses: [
                    '아직 어린아이라서 판단력이 부족할 때가 있음',
                    '위험한 상황에 대한 경각심이 부족',
                    '감정 조절이 미숙한 면이 있음',
                    '보호받아야 할 존재라는 한계'
                ],
                relationships: [
                    {
                        character: '김독자',
                        description: '가장 좋아하고 신뢰하는 형 같은 존재. 그를 위해서라면 무엇이든 하고 싶어함.'
                    },
                    {
                        character: '신유성',
                        description: '나이대가 비슷한 동료로 서로를 이해하고 의지하는 관계.'
                    },
                    {
                        character: '한수영',
                        description: '무뚝뚝하지만 자신을 챙겨주는 누나 같은 존재로 여김.'
                    }
                ]
            },
            en: {
                name: 'Lee Gilyoung',
                nickname: 'Insect Controller',
                shortTrait: 'Pure Adventurer',
                description: 'A boy with the special ability to control insects. Pure and curious, follows Kim Dokja like an older brother.',
                personality: [
                    'Pure and innocent childlike personality',
                    'Endless curiosity about new things',
                    'Deep affection and trust for adults, especially Kim Dokja',
                    'Boldness to feel interest rather than fear in dangerous situations'
                ],
                strengths: [
                    'Unique and useful ability to control insects',
                    'Perspective to view situations simply with pure heart',
                    'Quick adaptability and learning ability',
                    'Existence that brings vitality and bright energy to the team'
                ],
                weaknesses: [
                    'Sometimes lacks judgment due to being still a child',
                    'Lacks awareness of dangerous situations',
                    'Immature in emotional control',
                    'Limitation of being someone who needs protection'
                ],
                relationships: [
                    {
                        character: 'Kim Dokja',
                        description: 'Most beloved and trusted brother-like figure. Wants to do anything for him.'
                    },
                    {
                        character: 'Shin Yoosung',
                        description: 'Colleague of similar age who understands and relies on each other.'
                    },
                    {
                        character: 'Han Sooyoung',
                        description: 'Regards as sister-like figure who is blunt but takes care of him.'
                    }
                ]
            },
            ja: {
                name: 'イ・ギリョン',
                nickname: '虫操縦者',
                shortTrait: '純粋な冒険者',
                description: '虫を操る特別な能力を持つ少年。純粋で好奇心旺盛で、キム・ドクジャを兄のように慕う。',
                personality: [
                    '純粋で天真爛漫な子どもらしい性格',
                    '新しいことに対する尽きない好奇心',
                    '大人、特にキム・ドクジャに対する深い愛情と信頼',
                    '危険な状況でも恐怖より興味を感じる大胆さ'
                ],
                strengths: [
                    '昆虫を操る独特で有用な能力',
                    '純粋な心で状況を単純に見る視点',
                    '素早い適応力と学習能力',
                    'チームに活力と明るいエネルギーを吹き込む存在'
                ],
                weaknesses: [
                    'まだ子どもなので判断力が不足する時がある',
                    '危険な状況に対する警戒心が不足',
                    '感情コントロールが未熟な面がある',
                    '守られるべき存在という限界'
                ],
                relationships: [
                    {
                        character: 'キム・ドクジャ',
                        description: '最も好きで信頼する兄のような存在。彼のためなら何でもしたいと思う。'
                    },
                    {
                        character: 'シン・ユソン',
                        description: '年齢が近い同僚でお互いを理解し頼り合う関係。'
                    },
                    {
                        character: 'ハン・スヨン',
                        description: '無愛想だが自分を気にかけてくれるお姉さんのような存在と思っている。'
                    }
                ]
            },
            zh: {
                name: '李吉永',
                nickname: '昆虫操控者',
                shortTrait: '纯真冒险者',
                description: '拥有操控昆虫特殊能力的少年。纯真好奇心强，像兄长一样跟随金独子。',
                personality: [
                    '纯真天真烂漫的孩子般性格',
                    '对新事物无穷的好奇心',
                    '对大人，特别是金独子的深深关爱和信任',
                    '危险情况下感到兴趣而非恐惧的勇敢'
                ],
                strengths: [
                    '操控昆虫的独特有用能力',
                    '以纯真内心简单看待情况的视角',
                    '快速的适应力和学习能力',
                    '给团队注入活力和明亮能量的存在'
                ],
                weaknesses: [
                    '还是孩子，有时缺乏判断力',
                    '对危险情况缺乏警觉性',
                    '情感控制不成熟的一面',
                    '需要被保护的存在这一局限性'
                ],
                relationships: [
                    {
                        character: '金独子',
                        description: '最喜欢和信任的兄长般存在。为了他愿意做任何事情。'
                    },
                    {
                        character: '申有星',
                        description: '年龄相近的同事，相互理解和依靠的关系。'
                    },
                    {
                        character: '韩秀英',
                        description: '虽然严厉但照顾自己的姐姐般存在。'
                    }
                ]
            }
        }
    },
    
    shinYoosung: {
        id: 'shinYoosung',
        avatar: '유',
        traits: {
            ko: {
                name: '신유성',
                nickname: '야수 조련사',
                shortTrait: '용감한 보호자',
                description: '야수를 다루는 능력을 가진 소녀. 어리지만 강한 의지와 책임감을 가지고 있으며 동료들을 지키려 합니다.',
                personality: [
                    '나이에 비해 성숙하고 책임감이 강함',
                    '동물과 약한 존재들을 보호하려는 본능',
                    '조용하지만 내면에 강한 의지를 품고 있음',
                    '가족 같은 동료들에게는 따뜻한 면을 보임'
                ],
                strengths: [
                    '야수를 조련하고 소통하는 특별한 능력',
                    '위기 상황에서 침착함을 유지하는 정신력',
                    '타인을 배려하는 따뜻한 마음',
                    '어린 나이임에도 뛰어난 전략적 사고'
                ],
                weaknesses: [
                    '너무 많은 책임을 혼자 떠안으려 함',
                    '자신의 나이에 맞는 즐거움을 포기하는 경향',
                    '타인에게 자신의 고민을 털어놓기 어려워함',
                    '완벽하려고 노력하다 보니 스트레스를 많이 받음'
                ],
                relationships: [
                    {
                        character: '김독자',
                        description: '신뢰하고 의지하는 어른. 그의 따뜻함에 마음을 열고 가족 같은 정을 느낀다.'
                    },
                    {
                        character: '이길영',
                        description: '비슷한 또래로 서로의 특별함을 이해하고 격려하는 관계.'
                    },
                    {
                        character: '유중혁',
                        description: '처음에는 함께했지만 이제는 다른 길을 걷는 복잡한 관계. 여전히 존경하고 있음.'
                    }
                ]
            },
            en: {
                name: 'Shin Yoosung',
                nickname: 'Beast Tamer',
                shortTrait: 'Brave Protector',
                description: 'A girl with the ability to handle beasts. Though young, she has strong will and sense of responsibility, trying to protect her companions.',
                personality: [
                    'Mature and responsible beyond her age',
                    'Instinct to protect animals and weak beings',
                    'Quiet but harbors strong will within',
                    'Shows warm side to family-like companions'
                ],
                strengths: [
                    'Special ability to tame and communicate with beasts',
                    'Mental strength to maintain composure in crisis situations',
                    'Warm heart that considers others',
                    'Excellent strategic thinking despite young age'
                ],
                weaknesses: [
                    'Tries to take on too much responsibility alone',
                    'Tendency to give up age-appropriate enjoyments',
                    'Difficulty sharing personal worries with others',
                    'Gets stressed trying to be perfect'
                ],
                relationships: [
                    {
                        character: 'Kim Dokja',
                        description: 'A trusted and reliable adult. Opens heart to his warmth and feels family-like affection.'
                    },
                    {
                        character: 'Lee Gilyoung',
                        description: 'Similar age peer who understands and encourages each others specialness.'
                    },
                    {
                        character: 'Yoo Joonghyuk',
                        description: 'Initially together but now walking different paths - complex relationship. Still respects him.'
                    }
                ]
            },
            ja: {
                name: 'シン・ユソン',
                nickname: '野獣調教師',
                shortTrait: '勇敢な守護者',
                description: '野獣を扱う能力を持つ少女。幼いが強い意志と責任感を持ち、仲間を守ろうとする。',
                personality: [
                    '年齢に比べて成熟し責任感が強い',
                    '動物と弱い存在を守ろうとする本能',
                    '静かだが内面に強い意志を抱いている',
                    '家族のような仲間には温かい面を見せる'
                ],
                strengths: [
                    '野獣を調教し意思疎通する特別な能力',
                    '危機状況で落ち着きを維持する精神力',
                    '他人を思いやる温かい心',
                    '幼い年齢にも関わらず優れた戦略的思考'
                ],
                weaknesses: [
                    'あまりにも多くの責任を一人で背負おうとする',
                    '自分の年齢に合った楽しみを諦める傾向',
                    '他人に自分の悩みを打ち明けることが苦手',
                    '完璧でいようと努力してストレスを多く受ける'
                ],
                relationships: [
                    {
                        character: 'キム・ドクジャ',
                        description: '信頼し頼りにする大人。彼の温かさに心を開き家族のような情を感じる。'
                    },
                    {
                        character: 'イ・ギリョン',
                        description: '似たような年頃でお互いの特別さを理解し励まし合う関係。'
                    },
                    {
                        character: 'ユ・ジュンヒョク',
                        description: '最初は一緒だったが今は違う道を歩む複雑な関係。今でも尊敬している。'
                    }
                ]
            },
            zh: {
                name: '申有星',
                nickname: '野兽驯养师',
                shortTrait: '勇敢的守护者',
                description: '拥有驯服野兽能力的少女。虽然年幼但有着强烈意志和责任感，试图保护同伴们。',
                personality: [
                    '相比年龄更成熟且责任感强',
                    '保护动物和弱小存在的本能',
                    '安静但内心怀有强烈意志',
                    '对家人般的同伴展现温暖的一面'
                ],
                strengths: [
                    '驯服野兽并与之沟通的特殊能力',
                    '危机情况下保持镇定的精神力',
                    '体贴他人的温暖心灵',
                    '尽管年幼却拥有出色的战略思维'
                ],
                weaknesses: [
                    '试图独自承担太多责任',
                    '放弃符合自己年龄的快乐的倾向',
                    '难以向他人倾诉自己的烦恼',
                    '努力追求完美导致压力过大'
                ],
                relationships: [
                    {
                        character: '金独子',
                        description: '信任和依赖的大人。对他的温暖敞开心扉，感受到家人般的情感。'
                    },
                    {
                        character: '李吉永',
                        description: '年龄相近的同龄人，相互理解和鼓励彼此的特殊性。'
                    },
                    {
                        character: '刘中赫',
                        description: '起初在一起但现在走不同道路的复杂关系。仍然尊敬着他。'
                    }
                ]
            }
        }
    }
};

// Character display helper functions
function getCharacterData(characterId, lang = 'ko') {
    const character = characters[characterId];
    if (!character) return null;
    
    return {
        id: characterId,
        avatar: character.avatar,
        ...character.traits[lang]
    };
}

function getAllCharacters(lang = 'ko') {
    return Object.keys(characters).map(id => getCharacterData(id, lang));
}
