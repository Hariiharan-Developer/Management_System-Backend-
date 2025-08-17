const asyncHandler = require('express-async-handler')

const getGoals =  asyncHandler (async (req,res)=>{
    console.log(req.body)
res.status(200).json({message: 'Get Goals from Controller'})
})


const setGoals = asyncHandler (async  (req,res)=>{
    if(!req.body){
        res.status(400)
        throw new Error('Please enter text field')
    }
     console.log(req.body)
res.status(200).json({message: 'set Goals from Controller'})
})


const putGoals =  asyncHandler (async (req,res)=>{
res.status(200).json({message: 'put Goals from Controller'})
})


const deleteGoals = asyncHandler (async  (req,res)=>{
res.status(200).json({message: 'delete Goals from Controller'})
})

module.exports ={
    getGoals,
    setGoals,
    putGoals,
    deleteGoals
}