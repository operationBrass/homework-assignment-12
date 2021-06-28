const sequelize = require("./config/connection");
const models = require("./models/index");
const inquirerPrompts = require("./inquirer");
const inquirer = require("inquirer");
const controllers = require("./controller/");

function init()
{

let task,table ="";
let output = {};
let currentMenu = inquirerPrompts.homeOps();
inquirer.prompt(currentMenu)
.then((result) => 
{
    currentMenu = inquirerPrompts.subOps(result.options);
    selection = inquirer.prompt(currentMenu)

    .then(async (result) => 
    {
        table = result.options.substr(result.options.indexOf(' ')+1).toLowerCase();
        task = result.options.substr(0,result.options.indexOf(' ')).toLowerCase();
        
        if(task == "view")
        {
            switch(table)
            {
                case "employees":
                currentMenu = inquirerPrompts.empViewOps();
                inquirer.prompt(currentMenu).then(async (result) => 
                {
                    if (result.options == "Employees by Manager")
                    {
                        output = await controllers.userController.userByMgr();
                    }
                    else
                    { 
                        output = await controllers.userController.viewUsers();
                    }
                });
                break;
                case "role":
                output = await controllers.roleController.viewRoles();   
                break;
                default:
                output = await controllers.deptController.viewDepartments();    
                }
            }
            else if(task == "add")
            {
                switch(table)
                {
                    case "employee":
                    currentMenu = inquirerPrompts.addEmployee();
                    inquirer.prompt(currentMenu).then(async (result) => 
                    {
                        output = await controllers.userController.addUser(result);
                        console.log(output)
                    });
                    break;
                    case "role":
                    currentMenu = inquirerPrompts.addRole();
                    inquirer.prompt(currentMenu).then(async (result) => 
                    {
                        output = await controllers.roleController.addRole(result);
                        console.log(output)
                    });
                    break;
                    default: 
                    currentMenu = inquirerPrompts.addDepartment();
                    inquirer.prompt(currentMenu).then(async (result) => 
                    {
                        output = await controllers.deptController.addDeptartment(result);
                        console.log(output)
                    });
                }
            }
            else if(task == "update")
            {
                switch(table)
                {
                case "employees":
                break;
                case "role":
                break;
                default: 
                }
            }
            else
            {
                console.log("you wanna delete?")
            }
        });
    });
}
function updatePrompts(choice)
{
    switch(choice)
    {
    case "user":
    break;
    case "department":
    break;
    case "role":
    break;
    default: 
    init();
    }
}
function deletePrompts(choice)
{
    switch(choice)
    {
    case "user":
    break;
    case "department":
    break;
    case "role":
    break;
    default: init();
    }
}

init();

