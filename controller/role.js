const { Role } = require("../models/index")

exports.viewRoles = () => {
//grab all Roles and return to requestor

Role.findAll()
.then(result => {
    return JSON.stringify(result, null, 2);
})

};

exports.deleteDept = async (dept) => {
    const listOfRoles = await Role.findAll(
    {
        
    });
    return JSON.stringify(listOfRoles, null, 2);
};

exports.addDept = async (dept) => {
    const listOfRoles= await Role.findAll(
    {
        
    });
    return JSON.stringify(listOfRoles, null, 2);
};
    