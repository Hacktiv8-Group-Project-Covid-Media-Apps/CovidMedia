const routers = require('express').Router()
const news_controller = require('../controller/news_controller')

routers.get('/', news_controller.getHeadline)
routers.get('/covid', news_controller.getCovidNews)
routers.get('/covid-headlines', news_controller.getCovidHeadlines)

module.exports = routers