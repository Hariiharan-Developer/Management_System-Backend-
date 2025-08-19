const mongoose = require('mongoose')

const goalSchema= mongoose.Schema({
    text:{
        type:String,
        reqyuired:[true,'please add a text field'],
    },
},{
    timestamps:true,
})

module.exports = mongoose.model('Goal',goalSchema)