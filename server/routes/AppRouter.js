const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const TaskRouter = require('./OrderListRouter')

Router.use('/users', UserRouter)
Router.use('tasks', TasksRouter)

module.exports = Router
