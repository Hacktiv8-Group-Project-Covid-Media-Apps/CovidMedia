const routers = require('express').Router()
const CovidController = require('../controller/covid-news-controller.js')

routers.get('/data', CovidController.data)
routers.get('/data/daily', CovidController.dataDaily)
routers.get('/data/provinsi', CovidController.dataProvinsi)
routers.get('/data/hospital', CovidController.hospital)

module.exports = routers