const { ENETUNREACH } = require("constants");
const { Role } = require("../models/index")

exports.viewRoles = async () => {
//grab all Roles and return to requestor
const listOfRoles = await Role.findAll({});
return JSON.stringify(listOfRoles, null, 2);
}

exports.roleByPk  = async (pk) =>
{
    return await Role.findOne( {
        where:
        {
          id:pk
        },
        });
}


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
    const listToSend = [{name: "None", value: 0}];
    listOfRoles.forEach((result) => 
    {
        listToSend.push({name:result.dataValues.title,value:result.dataValues.id});
    });
    
    return listToSend;
}

exports.deleteRole = async (role) => {
    let listOfRole = await Role.destroy(
    {
      where:
      {
        id: role
      }
    })
    listOfRole = await Role.findAll();
    return JSON.stringify(listOfRole, null, 2);
};


exports.updateRole =  async (role,record) => {
  //grab all employees and return to requestor
  if(role.options === 0) 
  {
      role.options = null;
  }
  const listOfRoles = await record.update(
      {
        title: role.title,
        salary: role.salary,
        DepartmentId: role.options,
      },
  );
  return JSON.stringify(listOfRoles, null, 2);
};