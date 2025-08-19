const express = require('express')
const router = express.Router()
const { getUser, loginUser, registerUser }=require('../controllers/user.controller')

router.get('/' ,getUser )
router.post('/login',loginUser)
router.post('/',registerUser)

module.exports = router