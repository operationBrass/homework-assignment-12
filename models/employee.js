const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
  {
    employment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING(30),
        allowNull:false,
      },
    last_name: {
        type: DataTypes.STRING(30),
        allowNull:false,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  
  }
);

module.exports = Employee;
