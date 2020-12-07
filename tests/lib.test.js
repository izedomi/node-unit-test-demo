
const lib = require('../lib');


describe('absolute', () => {

    it('should return number if number passed is positive', () => {
        const result = lib.absolute(1)
        expect(result).toBe(1)
    })
    
    it('should return a positive number if number passed in is negative', () => {
        const result = lib.absolute(-1)
        expect(result).toBe(1)
    })
    
    it('should return 0 if number passed in is 0', () => {
        const result = lib.absolute(0)
        expect(result).toBe(0)
    })

})