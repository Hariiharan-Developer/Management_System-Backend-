const express = require('express')
const { getGoals, setGoals, putGoals, deleteGoals } = require('../controllers/goals.controller.js')
const router  =express.Router()





router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(putGoals).delete(deleteGoals)


module.exports = router