const routers = require('express').Router()

app.use('/', (req, res)=>{
    res.status(200).json({msg: 'Masuk'})
})

module.exports = routers