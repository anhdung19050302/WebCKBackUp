const express = require("express");
const mongoose = require("mongoose");
const Router = express.Router()
const DataUser = require('../models/users')
const registerValidator = require('../middlewares/registerValidator')
const userController = require('../controllers/users.controller');
const upload = require("../middlewares/uploads")
const loginValidator = require('../middlewares/loginValidator');
const checkLogin = require("../middlewares/checkLogin");

Router.get('/register', userController.getRegister)
Router.post('/register',
    upload.fields([{ name: 'imageFront', maxCount: 1 }, { name: 'imageBack', maxCount: 1 }]),
    // upload.single("image"),
    registerValidator,
    userController.postRegister)

Router.get('/login', userController.getLogin)
Router.get('/homepage',userController.getHomePageLogin)
Router.post('/login', userController.postLogin)
Router.get('/first-change-pass', userController.getFirstChangePass)
Router.post('/first-change-pass', userController.postFirstChangePass)
Router.get("/profile", userController.getProfile)
Router.get("/changepassword", userController.getChangePass)
Router.post("/changepassword", userController.postChangePass)
Router.get("/createwallet/:id", userController.getCreatWallet)
Router.post('/profile', upload.fields([{ name: 'imageFront', maxCount: 1 }, { name: 'imageBack', maxCount: 1 }]), userController.postProfile)


module.exports = Router