const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {

    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(() =>{
        connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: 'teste integração',
                email: 'teste@teste.com',
                whatsapp: '62987654321',
                city: 'Abadia',
                uf: 'GO'
        })

        console.log(response.body);

        expect(response.body).toHaveProperty('id');
        
        expect(response.body.id).toHaveLength(8);
        
    })
})