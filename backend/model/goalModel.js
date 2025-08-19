const mongoose = require('mongoose')

const goalSchema= mongoose.Schema({
    name:{
     type:mongoose.Schema.ObjectId,
     ref:"user",   
     reqyuired:true,
    },
    text:{
        type:String,
        reqyuired:[true,'please add a text field'],
    },
},{
    timestamps:true,
})

module.exports = mongoose.model('Goal',goalSchema)