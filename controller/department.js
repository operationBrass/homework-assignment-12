const { Department } = require("../models/index")

exports.viewDepartments = async () => {
//grab all departments and return to requestor
const listOfDept = await Department.findAll({});
return JSON.stringify(listOfDept, null, 2);
};

exports.deleteDept = async (dept) => {
    const listOfDept = await Department.findAll(
    {
 
    });
    return JSON.stringify(listOfDept, null, 2);
};

exports.addDeptartment = async (dept) => {
     const listOfDept = await Department.findOrCreate({
        where:
        {
          name: dept.dName,
        }
    });
    return JSON.stringify(listOfDept, null, 2);
};
    