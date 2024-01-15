const utils = require('../utils');

describe('checkBracketsBalance', () => {
    it('should return true for all closed brackets value', () => {
        const allClosedBrackets = '[()]{}{[()()]()}';

        expect(utils.checkBracketsBalance(allClosedBrackets)).toBe(true);
    })

    it('should return false for not balanced brackets', () => {
        const notBalanced = '[()]{}{[(';

        expect(utils.checkBracketsBalance(notBalanced)).toBe(false);
    })

})
