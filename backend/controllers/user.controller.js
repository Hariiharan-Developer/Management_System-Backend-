const express = require('express')

const registerUser =(req,res)=>{
    res.json('user registered')
}
const loginUser =(req,res)=>{
    res.json('user logged')
}
const getUser =(req,res)=>{
    res.json('user fetched')
}

module.exports= {
    registerUser,
    loginUser,
    getUser
}