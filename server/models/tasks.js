'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tasks.init(
    {
      user_email: DataTypes.STRING,
      title: DataTypes.STRING,
      progress: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Tasks',
      tableName: 'tasks'
    }
  )
  return Tasks
}
