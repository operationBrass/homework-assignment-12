const { Department } = require("../models/index")

exports.viewDepartments = async () => {
//grab all departments and return to requestor
const listOfDept = await Department.findAll();
return JSON.stringify(listOfDept, null, 2);
};

exports.deleteDept = (dept) => {
    const listOfDept = await Department.findAll(
    {
        
    });
    return JSON.stringify(listOfDept, null, 2);
};

exports.addDept = (dept) => {
    const listOfDept= await Department.findAll(
    {
        
    });
    return JSON.stringify(listOfDept, null, 2);
};
    