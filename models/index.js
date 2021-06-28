const Department = require("./Department");
const Employee = require("./Employee");
const Role = require("./Role");

Department.hasMany(Role, {as: 'role'});
Role.belongsTo(Department,{as: "department"})
Role.hasMany(Employee, {as: "employee"})
Employee.belongsTo(Role,{as: "role"})
Employee.hasMany(Employee,{as: 'manager'});

module.exports =
{
    Department,
    Employee,
    Role,
};
