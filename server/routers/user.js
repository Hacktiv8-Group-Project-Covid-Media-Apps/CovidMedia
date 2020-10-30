const routers = require('express').Router()
const UserController = require('../controller/user-controller.js')


routers.post('/register', UserController.registerUser)
routers.post('/login', UserController.loginUser)
routers.post('/googleLogin', UserController.googleLogin)


module.exports = routers