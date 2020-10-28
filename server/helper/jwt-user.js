const jwt = require('jsonwebtoken')

class JwtTokenUser{

    static tokenUser(data){
        const token = jwt.sign(data, process.env.RAHASIA)
        return token
    }

    static cekTokenUser(data){
        const decoded = jwt.verify(data, process.env.RAHASIA)
        return decoded
    }
}

module.exports = JwtTokenUser