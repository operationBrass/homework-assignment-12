
const inquirer = require("inquirer");

exports.homeOps = () =>{

return [{ 
    // home options

    type: "list", 
    name:"options", 
    message:"Select type to begin: ", 
    choices: ["Employee","Role", "Department",new inquirer.Separator(), "Exit"]
}];

}

exports.subOps = (choice) =>{
    
return [{ 
    // home options

    type: "list", 
    name:"options", 
    message:`Select function for ${choice}: `, 
    choices: [`Add ${choice}`,`Delete ${choice}`, `Update ${choice}`, `View ${choice}s`,new inquirer.Separator(), `Return`]
}];

}

exports.empViewOps = () =>{

    return [{ 
    // home options
        type: "list", 
        name:"options", 
        message:"User view options: ", 
        choices: [`All employees`, `Employees by manager`, new inquirer.Separator(), `Return`]
    }];

}

exports.deleteOps = (choice, list) =>{

    return [{ 
    // home options
    type: "list", 
    name:"options", 
    message:`Which ${choice} would you like to delete?`, 
    choices: list
    }];

}

exports.updateOps = (choice, list) =>{

    return [{ 
    // home options
    type: "list", 
    name:"options", 
    message:`Which ${choice} would you like to update?`, 
    choices: list
    }];

}

exports.addEmpOps = () =>{

return [{ 
// home options
    type: "input", 
    name:"fName", 
    message:`First Name: `, 
    type: "input", 
    name:"lName", 
    message:`Last Name: `, 
    type: "input", 
    name:"mgrName", 
    message:`Managers Name: `, 
    type: "input", 
    name:"role", 
    message:"Role: ", 
    

}];

}

exports.viewRecords = (model) => {

};