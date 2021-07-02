const sequelize = require("./config/connection");
const models = require("./models/index");
const inquirerPrompts = require("./inquirer");
const inquirer = require("inquirer");
const controllers = require("./controller/");
const cTable = require("console.table");
const seeds = require("./seed");

sequelize.sync({force:false});

async function populateTables()
{
    const roles = seeds.roles();
    const departments = seeds.departments();
    const employees = seeds.users();
    await controllers.deptController.bulkCreate(departments);
    await controllers.roleController.bulkCreate(roles);
    await controllers.employeeController.bulkCreate(employees);
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
    if(result.options == "Exit") exit();
    else
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
                        output = await controllers.employeeController.viewEmployees();
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
                let record = {};

                switch(table)
                {
                case "department":
                {
                 console.log("perhaps in the next release, delete and create a new one!")
                 init();
                };
                break;
                case "role":
                choiceList = await controllers.roleController.listRoles();
                currentMenu = await inquirerPrompts.functionOps("Update","Role",choiceList)
                inquirer.prompt(currentMenu).then(async (result) => 
                {
                    if(result.options == 0)
                    {
                        init();
                    }
                    else
                    {
                    choiceList = await controllers.roleController.listRoles();
                    choiceList2 = await controllers.deptController.listDepartments();
                    record = await controllers.roleController.roleByPk(result.options);
                    currentMenu = await inquirerPrompts.updateRole(record,choiceList2)
                    inquirer.prompt(currentMenu).then(async (result) => 
                    {
                    output = await controllers.roleController.updateRole(result,record);
                    viewOutput(output);
                    })
                }
                });
                break;
                case "employee":
                choiceList = await controllers.employeeController.listEmployees();
                currentMenu = await inquirerPrompts.functionOps("Delete","Employee",choiceList)
                inquirer.prompt(currentMenu).then(async (result) => 
                {
                    if(result.options == 0) {init();}
                    else
                    {
                        choiceList = await controllers.employeeController.listEmployees();   
                        choiceList2 = await controllers.roleController.listRoles();   
                        record = await controllers.employeeController.employeeByPk(result.options);
                        currentMenu = await inquirerPrompts.updateEmployee(record,choiceList,choiceList2)
                        inquirer.prompt(currentMenu).then(async (result) => {
                        output = await controllers.employeeController.updateEmployee(result,record);
                        viewOutput(output);
                        });
                    }
                });
                default: 
                }
            }
            else if(task == "delete")
            {
                switch(table)
                {
                case "department":
                choiceList = await controllers.deptController.listDepartments();
                currentMenu = await inquirerPrompts.functionOps("Delete","Department",choiceList)
                inquirer.prompt(currentMenu).then(async (result) => 
                {
                    output = await controllers.deptController.deleteDept(result.options);
                    viewOutput(output);
                });
                break;
                case "role":
                choiceList = await controllers.roleController.listRoles();
                currentMenu = await inquirerPrompts.functionOps("Delete","Role",choiceList)
                inquirer.prompt(currentMenu).then(async (result) => 
                {
                    output = await controllers.roleController.deleteRole(result.options);
                    viewOutput(output);
                });
                break;
                case "employee":
                choiceList = await controllers.employeeController.listEmployees();
                currentMenu = await inquirerPrompts.functionOps("Delete","Employee",choiceList)
                inquirer.prompt(currentMenu).then(async (result) => 
                {
                    output = await controllers.employeeController.deleteEmployee(result.options);
                    viewOutput(output);
                });
                default: 
                }
               
            }
            else // user wants to quit
            {
                exit();
            }
        })
    }});
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
        exit();
    }
    else
    {
        init();
    }
}

function exit()
{
    return console.log("OK BYE");
}

//populateTables();
init();




