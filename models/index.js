const Department = require("./Department");
const Employee = require("./Employee");
const Role = require("./Role");

// define relationships between tables 
/*
Employee.belongsTo(Department, {
    foreignKey: "Employee_id",
})

Role.belongsToMany(Role, {
    foreignKey: ""
});
*/

// Relationships
Department.hasMany(Role, {as: 'staff'});
Role.hasMany(Employee,{as:'roles'});
Employee.hasMany(Employee,{as: 'manager'});

module.exports =
{
    Department,
    Employee,
    Role,
};
