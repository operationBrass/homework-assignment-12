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
let selection = inquirer.prompt(currentMenu)


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
                output = await controllers.userController.viewUsers();
                break;
                case "role":
                output = await controllers.roleController.viewRoles();   
                break;
                default:
                output = await controllers.deptController.viewDepartments();    
                }
                console.log(output);
            }
            else if(task == "add")
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


   /*
    let selectedFunction = selection.options.substr(0,selection.options.indexOf(' ')).toLowerCase;
    selectedFunction = selectedFunction.toLowerCase();
    let selectedType = selection.options.substr(selection.options.indexOf(' ')+1);
    selectedType = selectedType.toLowerCase();
    const funcType = selectedType + "-" + selectedFunction;

                if(funcType == "employees-view")
                {
                    //go into further options if its employee view
                    userViewPrompts();
                }
                else
                {
                    switch (selectedFunction)
                    {
                    case "view": 
                    viewTable(selectedType);
                    break;
                    case "update": 
                    updateTable(selectedType);
                    break;
                    case "delete": 
                    deleteTable(selectedType);
                    break;
                    case "add":
                    addPrompts(selectedType);
                    break;
                    default:
                    init();
                    }
                }*/

async function addPrompts(choice)
{
    let addTemplate, newAddition, tableRefresh = {};

    switch(choice)
    {
    case "employee":
    addTemplate = inquirerPrompts.addEmployee();
    newAddition = await processInquirerPrompts(addTemplate);
    tableRefresh = await controllers.addUser();
    break;
    case "department":
    addTemplate = inquirerPrompts.addDepartment();
    newAddition = await processInquirerPrompts(addTemplate);
    //tableRefresh = await controllers.addUser();
    break;
    case "role":
    addTemplate = inquirerPrompts.addRole();
    newAddition = await processInquirerPrompts(addTemplate);
    //tableRefresh = await controllers.addUser();
    break;
    default: init();
    }
}

async function viewTable(choice)
{
//calls the view controller depending on the choice user requested in prompts

let records = {};

switch(choice)
    {
    case "user-all":
    records = await controllers.viewUsers();
    break;
    case "userByMgr":
    records = await controllers.viewUsersByMgr();
    break;
    case "department":
    records = await controllers.viewDepartments();
    break;
    case "role":
    records = await controllers.viewRoles();
    break;
    default: init();
    }
    console.log(records);
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

function userViewPrompts()
{

    const prompts = inquirerPrompts.empViewOps();

    inquirer.prompt(prompts)
    .then((selection) => 
    {
        if(selection.options.toLowerCase() == "all employees")
        {
            viewTable("user-all");
            return;
        }
            viewTable("userByMgr");
        
    })
    .catch(err => {console.log(err)});
}

init();

