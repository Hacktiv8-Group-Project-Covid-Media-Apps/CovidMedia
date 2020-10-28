const express = require('express')
const app = express()
const port = 4000
const news_controller = require('./controller/news_controller')

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.get('/news', news_controller.articleNew)

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})