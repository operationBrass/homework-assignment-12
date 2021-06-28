const { Employee } = require("../models/index")

exports.viewUsers = async () => {
//grab all employees and return to requestor
const listOfUsers = await Employee.findAll({});
return JSON.stringify(listOfUsers, null, 2);
};

exports.userByMgr = async (mgr) => {
const listOfUsersByMgr = await Employee.findAll(
{
    where: 
    {
        //get back to this later
    }
});
    return JSON.stringify(listOfUsersByMgr, null, 2);
};

exports.addUser = async (user) => {
    //grab all employees and return to requestor
    const listOfUsers = await Employee.findOrCreate({
        where:
        {
          first_name: user.fName,
          last_name: user.lName,
          role_id: 1,
          manager_id: 1
        }
    });
    return listOfUsers;
};
    
exports.deleteUser = async () => {
    //grab all employees and return to requestor
    const listOfUsers = await Employee.findAll();
    return JSON.stringify(listOfUsers, null, 2);
};
    