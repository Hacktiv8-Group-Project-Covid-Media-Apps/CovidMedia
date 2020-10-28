const {User} = require('../models')
const jwtUser = require('../helper/jwt-user.js')

const authentication = async (req, res, next)=>{
    let token = req.headers.token
    try {
        if(!token){
            throw{msg: 'invalid token', status: 401}
        }else{
            let cekToken = jwtUser.cekToken(token)
            let dataUserDB = await User.findByPk(cekToken.id)

            if(!dataUserDB){
                throw{msg: 'invalid token', status: 401}
            }else{
                req.key = dataUserDB
                next()
            }
        }
    } catch (err) {
        next(err)
    }
}

module.exports = authentication