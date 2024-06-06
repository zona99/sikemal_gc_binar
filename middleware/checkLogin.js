const knex = require('knex')(require('../knexfile').development)
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key';


module.exports = class {
    
    static checkAuth = async (req, res, next) => {
        
        const token = req.cookies.token;

        if (token) {
            try {
                const decoded = jwt.verify(token, secretKey);
                const user = await knex('users').where({ id: decoded.userId }).first();
                
                if (user) {
                    req.user = user;
                }

            } catch (err) {
                console.error('Invalid token', err);
            }
        } 

        next();
    };

    // static checkSessionKode = async (req, res, next) => {
    //     if (req.session.rahasiaId) {
    //         next()
    //     }else {
    //         res.json({status: 400, message: 'Maaf anda tidak punya akses'})
    //     }
    // }
}