const Department = require("./Department");
const Employee = require("./Employee");
const Role = require("./Role");

Department.hasMany(Role);
Role.belongsTo(Department);
Role.hasMany(Employee);
Employee.belongsTo(Employee, {as: "manager"});

module.exports =
{
    Department,
    Employee,
    Role,
};
