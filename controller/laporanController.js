const knex = require('knex')(require('../knexfile').development)

module.exports = class {
    
    static addLaporan = async (req, res, next) => {
        try {
            const {nama, tlp, alamat, laporan} = req.body;
            const lap = await knex('laporan').insert({ nama, tlp, alamat, laporan });
           
            res.status(201).json({ status: 'success', message: 'Berhasil ditambahkan', lap});

        } catch (error) {
            res.status(500).json({error: error.message})
        }
    };

    static resLaporan = async (req, res, next) => {
        try {

            let id = req.params.id;
  
            const resLap = await knex('res_laporan').insert({id});
            
            if (resLap) {
              res.status(201).json({status: 'success',  message: 'Berhasil direspon'})
            } else {
              res.status(404).json({status: 404, message: 'Tidak ada data'})
            }
  
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    };


    static getAllLaporan = async (req, res, next) => {
        try {
          const user = await knex('laporan').select('*')
          res.status(201).json(user)
  
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
};