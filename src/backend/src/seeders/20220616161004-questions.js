'use strict';

module.exports = {
    async up(queryInterface) {
        return queryInterface.bulkInsert('question',
            [
                {
                    body: '_____ people’s names has always been something I’ve found incredibly difficult.',
                    description: 'В английском языке (так же как и в русском) существительное, образованное от глагола, может быть подлежащим (например, курить -> курение). Оно образуется путем добавление окочания ing к глаголу. В данном случае "remembering"',
                    answers: JSON.stringify([
                        {
                            value: 1,
                            label: 'To remember',
                            right: false
                        },
                        {
                            value: 2,
                            label: 'Remembering',
                            right: true
                        },
                        {
                            value: 3,
                            label: 'For Remembering',
                            right: false
                        },
                        {
                            value: 4,
                            label: 'To remembering',
                            right: false
                        }
                    ])
                },
                {
                    body: 'A book _____ by a twelve-year-old girl has won a €10,000 prize.',
                    description: 'Страдательное причастие в английском языке образовывается с помощью глагола в 3-й форме: "Книга, написанная 12-летней девочкой,..."',
                    answers: JSON.stringify([
                        {
                            value: 1,
                            label: 'wrote',
                            right: false
                        },
                        {
                            value: 2,
                            label: 'writing',
                            right: false
                        },
                        {
                            value: 3,
                            label: 'been written',
                            right: false
                        },
                        {
                            value: 4,
                            label: 'written',
                            right: true
                        }
                    ])
                },
                {
                    body: 'I almost fell over a pile of books _____ on the carpet.',
                    description: 'Действительное причастие в английском языке образовывается с помощью глагола с окончанием ing: "...книги, лежащие на ковре."',
                    answers: JSON.stringify([
                        {
                            value: 1,
                            label: 'that are laid',
                            right: false
                        },
                        {
                            value: 2,
                            label: 'which lying',
                            right: false
                        },
                        {
                            value: 3,
                            label: 'lying',
                            right: true
                        },
                        {
                            value: 4,
                            label: 'who was lying',
                            right: false
                        }
                    ])
                },
                {
                    body: 'They’re having lunch with his girlfriend’s parents, _____ live in Brighton.',
                    description: '"...родители, которые живут ...". В английском языке слово "который" может переводиться несколькими способами: "who", "which", "that".' +
                        '"Who" употребляется с одушевленными существительными и местоимениями, "which" - c неодушевленными, "that" - как с одушевленными, так и неодушевленными.' +
                        'Но поскольку здесь придаточное предложение не является ключевым (non-defining relative clause), т.е. его можно опустить без потери смысла, слово that употребить нельзя.',
                    answers: JSON.stringify([
                        {
                            value: 1,
                            label: 'they',
                            right: false
                        },
                        {
                            value: 2,
                            label: 'who',
                            right: true
                        },
                        {
                            value: 3,
                            label: 'that',
                            right: false
                        },
                        {
                            value: 4,
                            label: 'whom',
                            right: false
                        }
                    ])
                },
                {
                    body: 'I wasn\'t keen on the restaurant _____ we went to last weekend.',
                    description: 'В предложениях с ключевым придаточным предложением (defining relative clause), т.е. его нельзя опустить, иначе предложение не будте иметь смысла, слово "который" (that) можно не писать',
                    answers: JSON.stringify([
                        {
                            value: 1,
                            label: 'what',
                            right: false
                        },
                        {
                            value: 2,
                            label: '-',
                            right: true
                        },
                        {
                            value: 3,
                            label: 'whose',
                            right: false
                        },
                        {
                            value: 4,
                            label: 'when',
                            right: false
                        }
                    ])
                },
                {
                    body: 'The gym _____ I go to work out is open twenty-four hours a day.',
                    description: '"Тренажерный зал, куда я хожу заниматься...". Определение места, поэтому употребляем "where"',
                    answers: JSON.stringify([
                        {
                            value: 1,
                            label: 'when',
                            right: false
                        },
                        {
                            value: 2,
                            label: 'which',
                            right: false
                        },
                        {
                            value: 3,
                            label: 'that',
                            right: false
                        },
                        {
                            value: 4,
                            label: 'where',
                            right: true
                        }
                    ])
                },
                {
                    body: 'The neighbours _____ the music from your party. It was terribly loud. You should go and apologise to them.',
                    description: '"Соседи ДОЛЖНО БЫТЬ услышали музыку...". То есть мы можем догадаться по некоторым признакам (It was terribly loud), что действие практически точно произошло',
                    answers: JSON.stringify([
                        {
                            value: 1,
                            label: 'must’ve heard',
                            right: true
                        },
                        {
                            value: 2,
                            label: '’ll hear',
                            right: false
                        },
                        {
                            value: 3,
                            label: 'couldn’t hear',
                            right: false
                        },
                        {
                            value: 4,
                            label: 'can’t have heard',
                            right: false
                        }
                    ])
                },
                {
                    body: 'We _____ a serious accident when you drove through that red light!',
                    description: '"Мы МОГЛИ БЫ попасть в серьезную аварию". Мы делаем предложение о событии в прошлом, которое не случилось (так как они не попали в аварию)',
                    answers: JSON.stringify([
                        {
                            value: 1,
                            label: 'have had',
                            right: false
                        },
                        {
                            value: 2,
                            label: 'can’t have had',
                            right: false
                        },
                        {
                            value: 3,
                            label: 'must’ve had',
                            right: false
                        },
                        {
                            value: 4,
                            label: 'could’ve had',
                            right: true
                        }
                    ])
                },
                {
                    body: 'Do you ever regret _____ Canada and returning to your home country?',
                    description: 'После "regret" глагол может употребляться как с to, так и с окончанием ing, но глагол будет иметь другое значение.' +
                        'После regret употребляется ing, если мы говорим о действии, которое уже произошло и мы сожалеем об этом.' +
                        'После regret идет to, то мы говорим, что сейчас мы сожалеем о действии, которое нам предстоит сделать сейчас или в будущем.',
                    answers: JSON.stringify([
                        {
                            value: 1,
                            label: 'to leaving',
                            right: false
                        },
                        {
                            value: 2,
                            label: 'leaving',
                            right: true
                        },
                        {
                            value: 3,
                            label: 'for leaving',
                            right: false
                        },
                        {
                            value: 4,
                            label: 'to leave',
                            right: false
                        }
                    ])
                },
                {
                    body: 'I’ll never _____ snow for the first time.',
                    description: 'После "forget" глагол может употребляться как с to, так и с окончанием ing, но глагол будет иметь другое значение.' +
                        'После forget употребляется ing, если мы выполнили какое-то действие, но не помним об этом' +
                        'После forget идет to, мы хотим сказать, что забыли, что нужно выполнить какое-то действие',
                    answers: JSON.stringify([
                        {
                            value: 1,
                            label: 'forget seeing',
                            right: true
                        },
                        {
                            value: 2,
                            label: 'forget to see',
                            right: false
                        },
                        {
                            value: 3,
                            label: 'forget to seeing',
                            right: false
                        },
                        {
                            value: 4,
                            label: 'to forget seeing',
                            right: false
                        }
                    ])
                },
                {
                    body: 'She finally stopped _____ when the price of cigarettes went up again.',
                    description: 'После "stop" глагол может употребляться как с to, так и с окончанием ing, но глагол будет иметь другое значение.' +
                        'После stop употребляется ing, если мы говорим о том, что прекратили что-то делать.' +
                        'После stop идет to, то мы говорим, о том, что мы остановились, чтобы что-то сделать.',
                    answers: JSON.stringify([
                        {
                            value: 1,
                            label: 'to smoke',
                            right: false
                        },
                        {
                            value: 2,
                            label: 'the smoke',
                            right: false
                        },
                        {
                            value: 3,
                            label: 'smoking',
                            right: true
                        },
                        {
                            value: 4,
                            label: 'for to smoke',
                            right: false
                        }
                    ])
                },
                {
                    body: 'She went to the doctor because she keeps _____ headaches.',
                    description: 'После "keeps" глагол употребляется с окночанием ing.',
                    answers: JSON.stringify([
                        {
                            value: 1,
                            label: 'on to get',
                            right: false
                        },
                        {
                            value: 2,
                            label: 'to getting',
                            right: false
                        },
                        {
                            value: 3,
                            label: 'to get',
                            right: false
                        },
                        {
                            value: 4,
                            label: 'getting',
                            right: true
                        }
                    ])
                },
                {
                    body: 'You’d _____ late for work again or you’ll get fired.',
                    description: 'После конструкции had better глагол употреляется в начальной форме без to. Для отрицания перед глаголом ставится not.',
                    answers: JSON.stringify([
                        {
                            value: 1,
                            label: 'be better',
                            right: false
                        },
                        {
                            value: 2,
                            label: 'better not be',
                            right: true
                        },
                        {
                            value: 3,
                            label: 'better be',
                            right: false
                        },
                        {
                            value: 4,
                            label: 'better not being',
                            right: false
                        }
                    ])
                },
            ]);
    },

    async down(queryInterface) {
        return queryInterface.bulkDelete('question', null, {});
    }
};
