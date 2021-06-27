const { Role } = require("../models/index")

exports.viewRoles = async () => {
//grab all Roles and return to requestor
const listOfRoles = await Role.findAll();
return JSON.stringify(listOfRoles, null, 2);
};

exports.deleteDept = (dept) => {
    const listOfRoles = await Role.findAll(
    {
        
    });
    return JSON.stringify(listOfRoles, null, 2);
};

exports.addDept = (dept) => {
    const listOfRoles= await Role.findAll(
    {
        
    });
    return JSON.stringify(listOfRoles, null, 2);
};
    