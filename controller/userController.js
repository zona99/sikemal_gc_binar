const knex = require('knex')(require('../knexfile').development)
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key';

module.exports = class {
    
    static loginUser = async (req, res, next) => {
        try {
            const { email, password } = req.body;

            const user = await knex('users').where({ email }).first();

            if (!user || !(await bcrypt.compare(password, user.password))) {
              return res.status(401).json({ message: 'Email atau password salah' });
            }
        
            const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true });
            res.json({ token });

        } catch (error) {
          res.status(500).json({error: error.message})
        }
    };

    static logoutUser = (req, res, next) => {
        try {
          res.clearCookie('token');
          res.json({ message: 'Behasil keluar' });
        } catch (error) {
          res.status(500).json({error: error.message})
        }
    };
  
    static addUser = async (req, res, next) => {
        try {
            const {nama, email, password} = req.body;
            
            const hashPassword = await bcrypt.hash(password, 10);
            const user = await knex('users').insert({ nama, email, password: hashPassword });
           
            res.status(201).json({ message: 'Berhasil ditambahkan', user });

        } catch (error) {
            res.status(500).json({error: error.message})
        }
    };
    
    static getAllUser = async (req, res, next) => {
      try {
        const user = await knex('users').select('*')
        res.status(201).json(user)

      } catch (error) {
          res.status(500).json({error: error.message})
      }
  };
    
    static getUser = async (req, res, next) => {
        try {
            let id = req.params.id;
            const user = await knex('users').where({ id }).first();
            
            if(user) {
              res.status(201).json(user)
            }

        } catch (error) {
            res.status(500).json({error: error.message})
        }
    };

    static updateUser = async (req, res) => {
      try {
        let id = req.params.id;
        const {nama, email, password} = req.body;

          const users = await knex('users').where({id}).first();
        
          let hashPassword = users.password;
          if (password) {
            hashPassword = await bcrypt.hash(password, 10);
          }
  
          await knex('users').where({id}).update({nama, email, password: hashPassword });
          res.status(201).json({status: 'success',  message: 'Berhasil diubah'})

      } catch (error) {
          res.status(500).json({error: error.message})
      }
    };


    static deleteUser = async (req, res) => {
      try {

          let id = req.params.id;

          const delUser = await knex('users').where({id}).del();
          
          if (delUser) {
            res.status(201).json({status: 'success',  message: 'Berhasil dihapus'})
          } else {
            res.status(404).json({status: 404, message: 'Tidak ada data'})
          }

      } catch (error) {
          res.status(500).json({error: error.message})
      }
    };
    
    
};