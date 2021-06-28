const { Role } = require("../models/index")

exports.viewRoles = async () => {
//grab all Roles and return to requestor
const listOfRoles = await Role.findAll({});
return JSON.stringify(listOfRoles, null, 2);
}

exports.deleteRole = async (role) => {
    const listOfRoles = await Role.findAll(
    {
        
    });
    
};

exports.addRole = async (role) => {

    const listOfRoles = await Role.findOrCreate({
        where:
        {
          title: role.title,
          salary: role.salary,
          department_id: 1
        }
    });
    return JSON.stringify(listOfRoles, null, 2);
};
    
exports.bulkUpdate = async (data) => {
    const listOfRoles = await Role.bulkCreate(data);
    return JSON.stringify(listOfRoles, null, 2);
}