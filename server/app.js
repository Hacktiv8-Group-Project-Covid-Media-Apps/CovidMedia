require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const routers = require('./routers')
const errorHandler = require('./middlewares/errorHandler.js')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routers)
app.use(errorHandler)


app.listen(port, ()=>{
    console.log(`Let's Go to Media Covid app Link http://localhost:${port}`)
})