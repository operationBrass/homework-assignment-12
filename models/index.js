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

module.exports =
{
    Department,
    Employee,
    Role,
};
