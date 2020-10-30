const routers = require('express').Router()
const user = require('./user.js')
const news = require('./news.js')
const covid = require('./covid.js')
// const { authentication } = require('../middlewares/authentication')

routers.get('/', (req, res) => {
    res.status(200).json({ msg: 'Masuk' })
})
routers.use('/user', user)
// routers.use(authentication)
routers.use('/news', news)
routers.use('/covid', covid)


module.exports = routers