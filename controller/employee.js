const { Employee } = require("../models/index")

exports.viewEmployees = async () => {
//grab all employees and return to requestor
const listOfEmployees = await Employee.findAll();
return JSON.stringify(listOfEmployees, null, 2);
};

exports.employeeByPk  = async (pk) =>
{
    return await Employee.findOne( {
        where:
        {
          id:pk
        },
        });
}

exports.employeeByMgr = async (mgr) => {
const listOfEmployees = await Employee.findAll(
{
    where: 
    {
        //get back to this later
    }
});
    return JSON.stringify(listOfEmployees, null, 2);
};

exports.addEmployee =  async (user) => {
    //grab all employees and return to requestor
    if(user.options === 0) 
    {
        user.options = null;
    }
    const listOfEmployees = await Employee.findOrCreate({
        where:
        {
          first_name: user.fName,
          last_name:user.lName,
          managerId: user.options,
          RoleId: user.rOptions,
        },
    });
    return JSON.stringify(listOfEmployees, null, 2);
};

exports.updateEmployee =  async (user, record) => {
    //grab all employees and return to requestor
    if(user.options === 0) 
    {
        user.options = null;
    }
    const listOfEmployees = await record.update(
        {
          first_name: user.fName,
          last_name:user.lName,
          managerId: user.options,
          RoleId: user.rOptions,
        },
    );
    return JSON.stringify(listOfEmployees, null, 2);
};
    
exports.deleteEmployee = async (emp) => {
    let listOfEmployee = await Employee.destroy(
    {
      where:
      {
        id: emp
      }
    })
    console.log(listOfEmployee)
    listOfEmployee = await Employee.findAll();
    return JSON.stringify(listOfEmployee, null, 2);
};

exports.bulkCreate = async (data) => {
    const listOfEmployees = await Employee.bulkCreate(data)
    return JSON.stringify(listOfEmployees, null, 2);
}

exports.listEmployees = async () => {
    const listOfEmployees = await Employee.findAll();
    const listToSend = [{name: "None", value: 0}];
    listOfEmployees.forEach((result) => 
    {
        listToSend.push({name: result.dataValues.first_name + " " + result.dataValues.last_name,value: result.dataValues.id});
    });

    return listToSend;
};
 
  