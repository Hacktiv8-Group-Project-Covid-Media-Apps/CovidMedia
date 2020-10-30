const { User } = require('../models')
const BcryptValidasiUser = require('../helper/bcrypt-user')
const jwtUser = require('../helper/jwt-user.js')

class UserController {

    static async registerUser(req, res, next) {
        try {
            let getDatauser = req.body
            let newUser = await User.create(getDatauser)
            let postData = {
                id: newUser.id,
                email: newUser.email
            }
            res.status(200).json(postData)
        } catch (err) {
            next(err)
        }
    }

    static async loginUser(req, res, next) {
        try {
            let userLogin = req.body
            console.log(req.body)
            let dataUserDB = await User.findOne({
                where: { email: userLogin.email }
            })
            if (!dataUserDB) {
                throw {
                    status: 401,
                    msg: 'Email atau Password anda tidak Valid'
                }
            } else if (!BcryptValidasiUser.validasiLoginUser(userLogin.password, dataUserDB.password)) {
                throw {
                    status: 401,
                    msg: 'Email atau Password anda tidak Valid'
                }
            } else {
                let dataUser = {
                    id: dataUserDB.id,
                    email: dataUserDB.email
                }
                let tokenUser = jwtUser.tokenUser(dataUser)
                dataUser.token = tokenUser
                res.status(200).json(dataUser)
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController