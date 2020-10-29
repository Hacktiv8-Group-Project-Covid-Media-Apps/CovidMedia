const routers = require('express').Router()
const user = require('./user.js')
const news = require('./news')

routers.get('/', (req, res) => {
    res.status(200).json({ msg: 'Masuk' })
})
routers.use('/user', user)
routers.use('/news', news)


module.exports = routers