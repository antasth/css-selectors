import * as functions from '../functions/functions';

describe('test functions', () => {
    test('instance of createNumbersList function', () => {
        expect(functions.createNumbersList()).toBeInstanceOf(HTMLUListElement);
    });
    test('instance of createElement function', () => {
        expect(functions.createElement('div', 'main', 'someText', null)).toBeInstanceOf(HTMLElement);
    });
    test('answer delay', () => {
        expect(functions.getAnswerDelay(5, 100)).toBeGreaterThan(200);
    });
    test('throw error', () => {
        const attempt = () => functions.getElement('');
        expect(attempt).toThrow();
    });
    test('array length', () => {
        expect(functions.createArray(15)).toHaveLength(15);
    });
    test('isCompletedByHelp return value', () => {
        expect(functions.isCompletedByHelp(null)).toBe('levels__button__self');
    });
    test('isCompletedByHelp return value', () => {
        expect(functions.isCompletedByHelp(true)).toBe('levels__button__help');
    });
    test('level header string', () => {
        expect(functions.getLevelHeader(4, 20)).toEqual('LEVEL 4 OF 20');
    });
    test('getSelector must return string', () => {
        const target = document.createElement('div');
        target.classList.add('test');
        const editor = document.createElement('div');
        expect(functions.getSelector(target, editor)).toEqual(expect.any(String));
    });
    test('get Direction Symbol left', () => {
        expect(functions.getDirectionSymbol('left')).toEqual('<');
    });
    test('isCompletedByHelp cant return string "кофе"', () => {
        expect(functions.isCompletedByHelp(null)).not.toMatch('кофе');
    });
    test('isCompletedByHelp must return string containing "button"', () => {
        expect(functions.isCompletedByHelp(null)).toEqual(expect.stringContaining('button'));
    });
    test('filterCompletedLevels must return object with level and help properties', () => {
        const levels = [
            {
                level: 2,
                help: true,
            },
            {
                level: 4,
                help: true,
            },
        ];
        expect(functions.filterCompletedLevels(levels, 2)).toEqual(expect.arrayContaining([{ level: 2, help: true }]));
    });
});
