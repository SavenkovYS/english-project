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
                    description: '"...родители, которые живут ...".',
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
                    description: '"...родители, которые живут ...".',
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
                    description: '"...родители, которые живут ...".',
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
                    description: '"...родители, которые живут ...".',
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
                    description: '"...родители, которые живут ...".',
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
                    description: '"...родители, которые живут ...".',
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
                    description: '"...родители, которые живут ...".',
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
                    description: '"...родители, которые живут ...".',
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
                    description: '"...родители, которые живут ...".',
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
                    description: '"...родители, которые живут ...".',
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
                {
                    body: ' _____ a world class athlete is a lot harder than it looks.',
                    description: '"...родители, которые живут ...".',
                    answers: JSON.stringify([
                        {
                            value: 1,
                            label: 'For being',
                            right: false
                        },
                        {
                            value: 2,
                            label: 'To be',
                            right: false
                        },
                        {
                            value: 3,
                            label: 'To being',
                            right: false
                        },
                        {
                            value: 4,
                            label: 'Being',
                            right: true
                        }
                    ])
                },
            ]);
    },

    async down(queryInterface) {
        return queryInterface.bulkDelete('question', null, {});
    }
};
