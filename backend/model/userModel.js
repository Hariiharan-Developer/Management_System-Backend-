const mongoose = require('mongoose')

const userSchema =mongoose.Schema({

    name:{
        type:String,
        required:[true,'please add name field']
    },
    password:{
        type:String,
        required:[true,'please add password field']
    },
    email:{
        type:String,
        required:[true,'please add email field'],
        unique:true
    },
},{
    timestamp:true
},)

module.exports = mongoose.model('User',userSchema)