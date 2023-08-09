const { User } = require('../models')
// const middleware = require('../middleware')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll({})
    res.json(users)
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  GetUsers
}
