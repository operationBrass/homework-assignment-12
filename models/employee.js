const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Employee extends Model {
}
Employee.init(
  {
    id:
    {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull:true,
      primaryKey:true
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
    underscored: true,
    freezeTableName: true,
    underscored: true,
  },
);
module.exports = Employee;
