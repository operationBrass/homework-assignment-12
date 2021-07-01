const { Department } = require("../models/index")

exports.viewDepartments = async () => {
//grab all departments and return to requestor
const listOfDept = await Department.findAll();
return JSON.stringify(listOfDept, null, 2);
};

exports.deleteDept = async (dept) => {
    const listOfDept = await Department.findAll(
    {
 
    });
    return JSON.stringify(listOfDept, null, 2);
};

exports.addDepartment =  async (dept) => {
  //grab all employees and return to requestor
  
  const listOfDepartments = await Department.findOrCreate({
      where:
      {
        department_name: dept.dName,
      },

  });
  return JSON.stringify(listOfDepartments, null, 2);
};

exports.updateDepartment = async (record) =>
{
  Department.findOne({
    where: {
          department_name: record.department_name
    }}).then((result) => {
      if (result=== null){return}
      result.setRoles([2]);
  })
}

exports.bulkCreate = async (data) => {
  const listOfDepartments = await Department.bulkCreate(data);
  return JSON.stringify(listOfDepartments, null, 2);
}

exports.listDepartments = async () => {
  const listOfDepartments = await Department.findAll();
  const listToSend = [];
  listOfDepartments.forEach((test) => 
  {
      listToSend.push({name: test.dataValues.department_name,value: test.dataValues.id});
  });

  return listToSend;
}