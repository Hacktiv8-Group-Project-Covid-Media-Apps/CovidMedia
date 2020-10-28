require('dotenv').config()
const express = require('express')
const routers = require('./routers')
const app = express()
const port = 3000
const news_controller = require('./controller/news_controller')

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(routers)
app.get('/news', news_controller.articleNew)

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
})