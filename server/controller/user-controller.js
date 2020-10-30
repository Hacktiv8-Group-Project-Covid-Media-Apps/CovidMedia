const { User } = require('../models')
const BcryptValidasiUser = require('../helper/bcrypt-user')
const jwtUser = require('../helper/jwt-user.js')
const {OAuth2Client} = require('google-auth-library')
// const jwt  = require('../helper/jwt-user')
const { data } = require('./covid-news-controller')

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

    static googleLogin(req, res, next) {
        let {google_access_token} = req.body
        const client = new OAuth2Client(process.env.CLIENT_ID);
        let email = ''

        client.verifyIdToken({
            idToken: google_access_token,
            audience: process.env.CLIENT_ID
        })
        .then(ticket => {
            let payload = ticket.getPayload()
            console.log(payload, '>>>>>>>>')
            email = payload.email
            return User.findOne({where: {email:payload.email}})
        })
        .then(user=>{
            if(user ){

                return user
            } else {
                var userObj = {
                    email,
                    password: 'random'
                }
                return User.create(userObj)
            }
        })
        .then(dataUser => {
            let access_token = jwtUser.tokenUser({id: dataUser.id, email: dataUser.email})
            return res.status(200).json({access_token})
        })
        .catch(err => {
            console.log(err)
        })

    }
}

module.exports = UserController