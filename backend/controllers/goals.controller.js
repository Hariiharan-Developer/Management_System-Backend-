const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')

const getGoals =  asyncHandler (async (req,res)=>{
    const goals = await Goal.find({});
res.status(200).json({goals})
})


const setGoals = asyncHandler (async  (req,res)=>{
    if(!req.body){
        res.status(400)
        throw new Error('Please enter text field')
    }
    const goals = await Goal.create({
    text: req.body.text
    })
     
res.status(200).json({goals})
})


const putGoals =  asyncHandler (async (req,res)=>{
    const goals = await Goal.findById(req.params.id )

    if(!goals){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updateId = await Goal.findByIdAndUpdate(req.params.id , req.body)  
res.status(200).json({updateId})
})


const deleteGoals = asyncHandler (async  (req,res)=>{
     const goals = await Goal.findById(req.params.id )

    if(!goals){
        res.status(400)
        throw new Error('Goal not found')
    }

    await goals.deleteOne()
    

res.status(200).json({id:req.params.id})
})

module.exports ={
    getGoals,
    setGoals,
    putGoals,
    deleteGoals
}