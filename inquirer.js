
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
    choices: [`Add ${choice}`,`Delete ${choice}`, `Update ${choice}`, `View ${choice}`,new inquirer.Separator(), `Return`]
}];

}

exports.empViewOps = () =>{

return [{ 
// home options
    type: "list", 
    name:"options", 
    message:"User view options: ", 
    choices: [`View employees, View employees by manager`, new inquirer.Separator(), `Return`]
}];

}

