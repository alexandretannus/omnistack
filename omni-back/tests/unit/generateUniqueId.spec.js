const  generateUniqueId = require('../../src/utils/generateUniqueId')
describe('Generate Unique ID',  () => {
    it('should generate an unique ID', () => {
        id = generateUniqueId();

        expect(id).toHaveLength(8);
    })
})