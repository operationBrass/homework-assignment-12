const sequelize = require("./config/connection");
const models = require("./models/index");
const inquirerPrompts = require("./inquirer");
const inquirer = require("inquirer");
const controllers = require("./controller/");
const cTable = require("console.table");
const seeds = require("./seed");

async function populateTables()
{
    const roles = seeds.roles();
    const departments = seeds.departments();
    await controllers.deptController.bulkCreate(departments);
    await controllers.roleController.bulkCreate(roles);
}

function init()
{
    let task,table ="";
    let output = {};
    let choiceList, choiceList2 = [];
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
                    inquirer.prompt(currentMenu).then(async(result) => 
                    {
                        if (result.options == "Employees by Manager")
                        {
                            output = await controllers.employeeController.employeeByMgr();
                        }
                        else
                        { 
                            output = await controllers.employeeController.viewEmployees();
                        }
                    viewOutput(output)
                    });
                    break;
                    case "roles":
                    output = await controllers.roleController.viewRoles(); 
                    viewOutput(output);  
                    break;
                    default:
                    output = await controllers.deptController.viewDepartments(); 
                    viewOutput(output);   
                }
            }
            else if(task == "add")
            {
                switch(table)
                {
                    case "employee":
                    choiceList = await controllers.employeeController.listEmployees();   
                    choiceList2 = await controllers.roleController.listRoles();   
                    currentMenu = inquirerPrompts.addEmployee(choiceList,choiceList2);
                    inquirer.prompt(currentMenu).then(async (result) => 
                    {
                        output = await controllers.employeeController.addEmployee(result);
                        viewOutput(output); 
                    });
                    break;
                    case "role":
                    choiceList = await controllers.deptController.listDepartments();   
                    currentMenu = inquirerPrompts.addRole(choiceList);
                    inquirer.prompt(currentMenu).then(async (result) => 
                    {
                        output = await controllers.roleController.addRole(result);
                        viewOutput(output);
                    });
                    break;
                    default: 
                    currentMenu = inquirerPrompts.addDepartment();
                    inquirer.prompt(currentMenu).then(async (result) => 
                    {
                        output = await controllers.deptController.addDepartment(result);
                        viewOutput(output);
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
        })
    });
}

async function viewOutput(output)
{
    output = JSON.parse(output);
    console.table(output);
    const answers = await inquirer.prompt(
    [{ 
    // home options
        type: "list", 
        name:"options", 
        choices: [`Continue`, new inquirer.Separator(), `Exit`]
    }]);
    if(answers.options === "Exit")
    {
        return console.log("OK BYE");
    }
    else
    {
        init();
    }
}

populateTables();
init();



