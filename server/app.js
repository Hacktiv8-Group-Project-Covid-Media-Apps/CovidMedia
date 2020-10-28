require('dotenv').config()
const express = require('express')
const routers = require('./routers')
const app = express()
const port = 3000
const errorHandler = require('./middlewares/errorHandler.js')
const news_controller = require('./controller/news_controller')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routers)
app.use(errorHandler)

app.get('/news', news_controller.articleNew)

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
})