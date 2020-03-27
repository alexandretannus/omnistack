const connection = require('../database/connection');

module.exports = {

    async create(req, res) {
        const  {id}  = req.body;

        console.log(id);
        

        const ong = await connection('ongs')
                            .select('name')
                            .where('id', id)
                            .first()

        if (!ong) {
            return res.status(400).json({error: 'Não existe'})
        }

        return res.json(ong)

    }
}