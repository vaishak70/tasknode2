const express=require("express")
const tokens = require("../controller/Controll1")
const adminlogin = require("../controller/Login")
const protect = require("../Middleware")

const router=express.Router()


router.route('/signin').post(tokens)
router.route('/login').post(adminlogin)


module.exports=router