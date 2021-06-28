const { Role } = require("../models/index")

exports.viewRoles = () => {
//grab all Roles and return to requestor

Role.findAll()
.then(result => {
    return JSON.stringify(result, null, 2);
})

};

exports.deleteRole = async (role) => {
    const listOfRoles = await Role.findAll(
    {
        
    });
    return JSON.stringify(listOfRoles, null, 2);
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
    