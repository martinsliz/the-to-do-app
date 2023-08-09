const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const TaskRouter = require('./TaskRouter')

Router.use('/users', UserRouter)
Router.use('/tasks', TaskRouter)

module.exports = Router
