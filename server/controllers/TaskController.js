const { Tasks } = require('../models')

const GetTasks = async (req, res) => {
  try {
    const tasks = await Tasks.findAll({})
    res.json(tasks)
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  GetTasks
}
