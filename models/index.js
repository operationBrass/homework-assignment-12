const Department = require("./Department");
const Employee = require("./Employee");
const Role = require("./Role");

Department.hasMany(Role,{ onDelete: 'cascade' }); 
Role.hasMany(Employee, {as: "role"});
Employee.belongsTo(Employee, {as: "manager"});

module.exports =
{
    Department,
    Employee,
    Role,
};
