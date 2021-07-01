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
exports.addEmployee = (managers,roles) =>{
    return [{ 
    // home options
        type: "input", 
        name:"fName", 
        message:`First Name: `, 
    },
    {
        type: "input", 
        name:"lName", 
        message:`Last Name: `, 
    },
    {
        // role options
        type: "list", 
        name:"rOptions", 
        message:`Select Role..`, 
        choices: roles
    },
    {
        // manager options
        type: "list", 
        name:"options", 
        message:`Select Manager..`, 
        choices: managers
    },];
}
exports.addRole = (list) =>{
    return [{ 
    // home options
        type: "input", 
        name:"title", 
        message:`Name: `, 
    },
    {
        type: "input", 
        name:"salary", 
        message:`Salary: `, 
    },
    {
    // home options
    type: "list", 
    name:"options", 
    message:`Select Department..`, 
    choices: list,
    },
    ];
}



exports.addDepartment = () =>{
    return [{ 
    // home options
        type: "input", 
        name:"dName", 
        message:`Department Name: `, 
    },
    ];
}
exports.viewRecords = (model) => {
};