const { ENETUNREACH } = require("constants");
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

exports.addRole = async (newRecord) => {
    const listOfRoles = await Role.findOrCreate({
       where:
       {
         title: newRecord.title,
         salary: newRecord.salary,
         DepartmentId: newRecord.options
       }
   });
   return JSON.stringify(listOfRoles, null, 2);
};


exports.bulkCreate = async (data) => {
    const listOfRoles = await Role.bulkCreate(data);
    return JSON.stringify(listOfRoles, null, 2);
}

exports.listRoles = async () => {
    const listOfRoles = await Role.findAll();
    const listToSend = [];
    listOfRoles.forEach((result) => 
    {
        listToSend.push({name:result.dataValues.title,value:result.dataValues.id});
    });
    
    return listToSend;
}