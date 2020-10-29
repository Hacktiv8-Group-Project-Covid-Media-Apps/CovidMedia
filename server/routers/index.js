const routers = require('express').Router()
const user = require('./user.js')

routers.get('/', (req, res) => {
    res.status(200).json({ msg: 'Masuk' })
})
routers.use('/user', user)


module.exports = routers