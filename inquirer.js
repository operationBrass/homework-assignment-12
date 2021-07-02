const inquirer = require("inquirer");
exports.homeOps = () =>{
return [{ 
    // home options

    type: "list", 
    name:"options", 
    message:"Select type to begin: ", 
    choices: ["Employee","Role", "Department", "Populate Tables",new inquirer.Separator(), "Exit"]
}];
}
exports.subOps = (choice) =>{ 
return [{ 
    // home options

    type: "list", 
    name:"options", 
    message:`Select ${choice} function: `, 
    choices: [`Add ${choice}`,`Delete ${choice}`, `Update ${choice}`, `View ${choice}s`,new inquirer.Separator(), `Return`]
}];

}
exports.empViewOps = () =>{
    return [{ 
    // home options
        type: "list", 
        name:"options", 
        message:"Employee Views: ", 
        choices: [`All employees`, `Employees by manager`, new inquirer.Separator(), `Return`]
    }];
}
exports.functionOps = (func, choice, list) =>{
    return [{ 
    // home options
    type: "list", 
    name:"options", 
    message:`${func} ${choice}`, 
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

exports.updateEmployee = (employee, roles, managers) =>{
    return [
    { 
    // home options
        type: "input", 
        name:"fName", 
        message:`First Name: `, 
        default: employee.first_name
    },
    {
        type: "input", 
        name:"lName", 
        message:`Last Name: `, 
        default: employee.last_name
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
    },]};

    exports.updateRole = (role, departments) =>
    {
            return [{ 
            // home options
                type: "input", 
                name:"title", 
                message:`Name: `, 
                default: role.title,
            },
            {
                type: "input", 
                name:"salary", 
                message:`Salary: `, 
                default: role.salary,
            },
            {
            // home options
            type: "list", 
            name:"options", 
            message:`Select Department..`, 
            choices: departments,
            },
            ];
    }