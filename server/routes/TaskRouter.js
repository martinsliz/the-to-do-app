const router = require('express').Router()
const controller = require('../controllers/TaskController')
// const middleware = require('../middleware')

router.get('/', controller.GetTasks)

module.exports = router
