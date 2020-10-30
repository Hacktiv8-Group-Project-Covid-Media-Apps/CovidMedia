const routers = require('express').Router()
const news_controller = require('../controller/news_controller')

routers.get('/', news_controller.getHeadline)
routers.get('/covid', news_controller.getCovidNews)
routers.get('/allnews', news_controller.allNews)
routers.get('/nationalnews', news_controller.nationalNews)
routers.get('/internationalnews', news_controller.internationalNews)
routers.get('/economicnews', news_controller.economicNews)
routers.get('/sportnews', news_controller.sportNews)
routers.get('/technews', news_controller.techNews)
routers.get('/entertainment', news_controller.entertainment)
routers.get('/lifestyle', news_controller.lifetyle)// server error
routers.get('/detailnews', news_controller.detailNews)
routers.get('/findnews', news_controller.findNews)

module.exports = routers