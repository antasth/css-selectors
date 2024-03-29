import { LevelObject } from '../interfaces/interfaces';

const levels: Array<LevelObject> = [
    {
        id: 1,
        name: 'Tag selector',
        type: '<tag>',
        description:
            'Добро пожаловать в Coffee Shop — место, где вы напишете CSS-код, чтобы выпить чашечку кофе. Начнём с самого простого. Селекторы тега — это выборка элементов по именам их тегов: h1, p, img, a и т.д. В селекторе тега, в качестве селектора выступает имя тега',
        example: 'Например, чтобы изменить цвет текста у заголовка, нужно обратиться к нему так - h1 {color: blue;}',
        task: 'Задание: выберите все белые чашки используя селектор тега',
        html: [
            { tag: 'cup', class: ['cup'], index: '1', tooltip: '<cup><cup/>' },
            { tag: 'cup', class: ['cup'], index: '2', tooltip: '<cup><cup/>' },
        ],
        htmlContent: ['<cup data-index="1">&lt;cup&gt;<cup/><br>', '<cup data-index="2">&lt;cup&gt;<cup/>'],
        target: [1, 2],
        answer: ['cup'],
    },
    {
        id: 2,
        name: 'Id selector',
        type: '#id',
        description:
            'Селектор id — это выборка элементов, по значению глобального атрибута id="". В селекторе id, в качестве селектора, выступает имя уникального идентификатора',
        example:
            'Например, мы можем обратиться к элементу <div id="main"> используя id селектор так - #main {color: blue;}',
        task: 'Задание: выберите чайный логотип используя id селектор',
        html: [
            { tag: 'cup', class: ['cup'], index: '1', tooltip: '<cup><cup/>' },
            {
                tag: 'cup',
                class: ['cup'],
                child: 'tea',
                childId: 'tea',
                childClass: 'tea',
                index: '2',
                childIndex: '3',
                tooltip: '<cup><cup/>',
                childTooltip: '<tea id="tea"></tea>',
            },
            { tag: 'cup', class: ['cup'], index: '4', tooltip: '<cup><cup/>' },
        ],
        htmlContent: [
            '<cup data-index="1">&lt;cup&gt;<cup/><br>',
            '<cup data-index="2">&lt;cup&gt;<br><tea data-index="3">&lt;tea id="tea"&gt;</tea><br>&lt;cup/&gt;<cup/><br>',
            '<cup data-index="4">&lt;cup&gt;<cup/><br>',
        ],
        target: [3],
        answer: ['#tea'],
    },
    {
        id: 3,
        name: 'Class selector',
        type: '.class',
        description:
            'Селекторы классов — это выборка элементов, по значению глобального атрибута class="". В селекторе класса (class), в качестве селектора, выступает имя класса',
        example:
            'Например мы можем обратиться к элементу <div class="main"> используя селектор класса так - .main {color: blue;}',
        task: 'Задание: выберите все лого чая используя классовый селектор',
        html: [
            {
                tag: 'cup',
                class: ['cup'],
                id: 'tea',
                child: 'tea',
                childClass: 'tea',
                index: '1',
                childIndex: '2',
                tooltip: '<cup><cup/>',
                childTooltip: '<tea class="tea"></tea>',
            },
            {
                tag: 'cup',
                class: ['cup'],
                id: 'tea',
                child: 'tea',
                childClass: 'tea',
                index: '3',
                childIndex: '4',
                tooltip: '<cup><cup/>',
                childTooltip: '<tea class="tea"></tea>',
            },
            { tag: 'cup', class: ['cup'], index: '5', tooltip: '<cup><cup/>' },
        ],
        htmlContent: [
            '<cup data-index="1">&lt;cup&gt;<br><tea data-index="2">&lt;tea class="tea"&gt;</tea><br>&lt;cup/&gt;<cup/><br>',
            '<cup data-index="3">&lt;cup&gt;<br><tea data-index="4">&lt;tea class="tea"&gt;</tea><br>&lt;cup/&gt;<cup/><br>',
            '<cup data-index="5">&lt;cup/&gt;<cup/><br>',
        ],
        target: [2, 4],
        answer: ['.tea'],
    },
    {
        id: 4,
        name: 'Сombined selectors',
        type: '<tag> #id .class',
        description:
            'Иногда при написании стилей мы хотим обратиться к селектору более точно, чем просто по имени класса или тега.',
        example:
            'Например мы можем обратиться к каждому элементу <div class="main"> и <p>text</p> так - .main { color: blue; } p { color: blue; }, a могли бы сделать это так .main, p {color: blue;}',
        task: 'Задание: выберите бумажный стакан и лого чая на последней чашке используя комбинированный селектор',
        html: [
            { tag: 'papercup', class: ['papercup', 'cup'], index: '1', tooltip: '<papercup><papercup/>' },
            { tag: 'cup', class: ['cup'], index: '2', tooltip: '<cup><cup/>' },
            {
                tag: 'cup',
                class: ['cup'],
                child: 'tea',
                childId: 'tea',
                childClass: 'tea',
                index: '3',
                childIndex: '4',
                tooltip: '<cup><cup/>',
                childTooltip: '<tea id="tea"></tea>',
            },
        ],
        htmlContent: [
            '<papercup data-index="1">&lt;papercup/&gt;<papercup/><br>',
            '<cup data-index="2">&lt;cup/&gt;<cup/><br>',
            '<cup data-index="3">&lt;cup&gt;<br><tea data-index="4">&lt;tea id="tea"&gt;</tea><br>&lt;cup/&gt;<cup/><br>',
        ],
        target: [1, 4],
        answer: ['papercup, #tea'],
    },
    {
        id: 5,
        name: 'Сombined class selectors',
        type: '.class.class',
        description:
            'Такое «склеивание» объединяет селекторы в одно правило.  Стили будут применены только к тому элементу, который содержит все перечисленные селекторы.',
        example:
            'Например у нас есть 2 элемента <div class="main"> и <div class="main test">, по селектору .main.test { color: blue; } можно обратиться только к второму элементу.',
        task: 'Задание: выберите красную чашку используя комбинированный классовый селектор',
        html: [
            { tag: 'cup', class: ['cup'], index: '1', tooltip: '<cup><cup/>' },
            { tag: 'redcup', class: ['redcup', 'cup'], index: '2', tooltip: '<redcup class="cup redcup"><redcup/>' },
            {
                tag: 'cup',
                class: ['cup'],
                id: 'tea',
                child: 'tea',
                childClass: 'tea',
                index: '3',
                childIndex: '4',
                tooltip: '<cup><cup/>',
                childTooltip: '<tea id="tea"></tea>',
            },
        ],
        htmlContent: [
            '<cup data-index="1">&lt;cup/&gt;<cup/><br>',
            '<redcup data-index="2">&lt;redcup class="cup redcup"/&gt;<redcup/><br>',
            '<cup data-index="3">&lt;cup&gt;<br><tea data-index="4">&lt;tea id="tea"&gt;</tea><br>&lt;cup/&gt;<cup/><br>',
        ],
        target: [2],
        answer: ['.cup.redcup'],
    },
    {
        id: 6,
        name: 'Сombined class selectors',
        type: '.class.class',
        description: 'Немного усложним прошлый урок',
        example: '',
        task: 'Задание: выберите красную чашку используя комбинированный классовый селектор и логотип чая на белой чашке',
        html: [
            { tag: 'cup', class: ['cup'], index: '1', tooltip: '<cup><cup/>' },
            { tag: 'redcup', class: ['redcup', 'cup'], index: '2', tooltip: '<redcup class="cup redcup"><redcup/>' },
            {
                tag: 'cup',
                class: ['cup'],
                id: 'tea',
                child: 'tea',
                childClass: 'tea',
                index: '3',
                childIndex: '4',
                tooltip: '<cup><cup/>',
                childTooltip: '<tea id="tea"></tea>',
            },
        ],
        htmlContent: [
            '<cup data-index="1">&lt;cup/&gt;<cup/><br>',
            '<redcup data-index="2">&lt;redcup class="cup redcup"/&gt;<redcup/><br>',
            '<cup data-index="3">&lt;cup&gt;<br><tea data-index="4">&lt;tea id="tea"&gt;</tea><br>&lt;cup/&gt;<cup/><br>',
        ],
        target: [2, 4],
        answer: ['.cup.redcup, tea'],
    },
    {
        id: 7,
        name: 'Childrens',
        type: '.class .class',
        description:
            'Последовательность селекторов отражает вложенность — каждый следующий селектор должен находиться на каком-то уровне вложенности в предыдущий селектор.',
        example:
            'Например для вложенных элементов <div class="main"><h1>header</h1></div>, мы можем обратиться к h1 с помощью комбинации селекторов .main h1',
        task: 'Задание: выберите логотип кофе на бумажном стакане используя наследование селекторов',
        html: [
            { tag: 'papercup', class: ['papercup', 'cup'], index: '1', tooltip: '<papercup><papercup/>' },
            {
                tag: 'cup',
                class: ['cup'],
                index: '2',
                tooltip: '<cup><cup/>',
                child: 'coffee',
                childClass: 'coffee',
                childIndex: '3',
                childTooltip: '<coffee id="coffee"></coffee>',
            },
            { tag: 'redcup', class: ['redcup', 'cup'], index: '4', tooltip: '<redcup class="cup redcup"><redcup/>' },
            {
                tag: 'papercup',
                class: ['papercup', 'cup'],
                index: '5',
                tooltip: '<papercup><papercup/>',
                child: 'coffee',
                childId: 'coffee',
                childClass: 'coffee',
                childIndex: '6',
                childTooltip: '<coffee id="coffee"></coffee>',
            },
        ],
        htmlContent: [
            '<papercup data-index="1">&lt;papercup/&gt;<papercup/><br>',
            '<cup data-index="2">&lt;cup&gt;<br><coffee data-index="3">&lt;coffee id="coffee"&gt;</coffee><br>&lt;cup/&gt;<cup/><br>',
            '<redcup data-index="4">&lt;redcup class="redcup"/&gt;<br>',
            '<papercup data-index="5">&lt;papercup&gt;<br><coffee data-index="6">&lt;coffee id="coffee"/&gt;</coffee><br>&lt;papercup/><br>',
        ],
        target: [6],
        answer: ['papercup #coffee'],
    },
    {
        id: 8,
        name: 'Directly nested selectors',
        type: '.class > #id > tag',
        description:
            'Последовательность селекторов отражает непосредственную вложенность — селектор справа должен быть прямым потомком селектора из левой части:',
        example: 'Например к h3 внутри тега article можно обратиться по селектору article > h3',
        task: 'Задание: выберите логотип чая на чашке используя непосредственно вложенные селекторы',
        html: [
            { tag: 'cup', class: ['cup'], index: '1', tooltip: '<cup><cup/>' },
            {
                tag: 'cup',
                class: ['cup'],
                id: 'tea',
                child: 'tea',
                childClass: 'tea',
                index: '2',
                childIndex: '3',
                tooltip: '<cup><cup/>',
                childTooltip: '<tea id="tea"></tea>',
            },
            { tag: 'cup', class: ['cup'], index: '4', tooltip: '<cup><cup/>' },
        ],
        htmlContent: [
            '<cup data-index="1">&lt;cup&gt;<cup/><br>',
            '<cup data-index="2">&lt;cup&gt;<br><tea data-index="3">&lt;tea id="tea"&gt;</tea><br>&lt;cup/&gt;<cup/><br>',
            '<cup data-index="4">&lt;cup&gt;<cup/><br>',
        ],
        target: [3],
        answer: ['cup > tea'],
    },
    {
        id: 9,
        name: 'Related selectors',
        type: '.element1 + .element2',
        description:
            'Элемент справа от + должен следовать в HTML сразу за элементом слева от +. Проще говоря, правый элемент должен быть соседом левого элемента, чтобы смежный селектор сработал.',
        example: 'Например label + input {color: red;}',
        task: 'Задание: выберите белую чашку в центре используя смежные селекторы',
        html: [
            { tag: 'papercup', class: ['papercup', 'cup'], index: '1', tooltip: '<papercup><papercup/>' },
            {
                tag: 'cup',
                class: ['cup'],
                id: 'cup',
                index: '2',
                tooltip: '<cup><cup/>',
                child: 'coffee',
                childId: 'coffee',
                childClass: 'coffee',
                childIndex: '3',
                childTooltip: '<coffee id="coffee"></coffee>',
            },
            { tag: 'cup', class: ['cup'], index: '4', tooltip: '<cup><cup/>' },
        ],
        htmlContent: [
            '<papercup data-index="1">&lt;papercup/&gt;<papercup/><br>',
            '<cup data-index="2">&lt;cup id="cup"&gt;<br><coffee data-index="3">&lt;coffee id="coffee"&gt;</coffee><br>&lt;cup/&gt;<cup/><br>',
            '<cup data-index="4">&lt;cup&gt;<cup/>',
        ],
        target: [2],
        answer: ['papercup + .cup'],
    },
    {
        id: 10,
        name: 'Related selectors',
        type: '.element1 + .element2',
        description: 'Немного усложним задачу по смежным селекторам',
        example: '',
        task: 'Задание: выберите красную чашку по селектору класса и логотип чая на чашке используя смежные селекторы',
        html: [
            { tag: 'cup', class: ['cup'], index: '1', tooltip: '<cup><cup/>' },
            { tag: 'redcup', class: ['redcup', 'cup'], index: '2', tooltip: '<redcup class="cup redcup"><redcup/>' },
            {
                tag: 'cup',
                class: ['cup'],
                child: 'tea',
                childId: 'tea',
                childClass: 'tea',
                index: '3',
                childIndex: '4',
                tooltip: '<cup><cup/>',
                childTooltip: '<tea id="tea"></tea>',
            },
        ],
        htmlContent: [
            '<cup data-index="1">&lt;cup/&gt;<cup/><br>',
            '<redcup data-index="2">&lt;redcup class="cup redcup"/&gt;<redcup/><br>',
            '<cup data-index="3">&lt;cup&gt;<br><tea data-index="4">&lt;tea id="tea"&gt;</tea><br>&lt;cup/&gt;<cup/><br>',
        ],
        target: [2, 4],
        answer: ['cup + .redcup, #tea'],
    },
];
export default levels;
