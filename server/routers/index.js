const routers = require('express').Router()

routers.get('/', (req, res)=>{
    res.status(200).json({msg: 'Masuk'})
})

module.exports = routers