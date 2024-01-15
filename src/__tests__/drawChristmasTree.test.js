const utils = require('../utils');

describe('drawChristmasTree', () => {
    it('should return 2 rows when 3 is passed', () => {
        const expectedElement = '<h4>  *  </h4><h4> *** </h4>';

        expect(utils.drawChristmasTree(3)).toBe(expectedElement);
    })

    it('should not return 1 row when 2 is passed', () => {
        const expectedElement = '<h4>  *  </h4>';

        expect(utils.drawChristmasTree(2)).not.toBe(expectedElement)
    })

})
