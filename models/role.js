const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}

Role.init(
  {
    title: {
        type: DataTypes.STRING(30),
        allowNull:false,
      },
    salary: {
        type: DataTypes.DECIMAL,
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

module.exports = Role;
