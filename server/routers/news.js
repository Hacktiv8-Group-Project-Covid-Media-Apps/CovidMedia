const routers = require('express').Router()
const news_controller = require('../controller/news_controller')

routers.get('/', news_controller.getHeadline)
routers.get('/covid', news_controller.getCovidNews)
routers.get('/allnews', news_controller.allNews)
routers.post('/category', news_controller.newsCategory)

routers.post('/detailnews', news_controller.detailNews)
routers.get('/covidnews', news_controller.covidNews)
routers.post('/search', news_controller.searchNews)

module.exports = routers