const sequelize = require("./config/connection");
const models = require("./models/index");
const inquirerPrompts = require("./inquirer");
const inquirer = require("inquirer");
const controllers = require("./controller/users")

const homeMenu = inquirerPrompts.homeOps();

function init()
{

inquirer.prompt(homeMenu)
    .then((answer) => 
    {
        if(answer.options == "exit")
        {
            return;
        }
        subMenu(answer.options)
    })
    .catch(err => {console.log(err)});
}

function subMenu(option)
{
    const subMenu = inquirerPrompts.subOps(option);

inquirer.prompt(subMenu)
    .then((answer) => 
    {
        //parse the users selection to category and type i.e employees and update
        let selectedFunction = answer.options.substr(0,answer.options.indexOf(' '));
        selectedFunction = selectedFunction.toLowerCase();
        let selectedType = answer.options.substr(answer.options.indexOf(' ')+1);
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
            addTable(selectedType);
            break;
            default:
            init();
            }
        }
    })
    .catch(err => {console.log(err)});

}

function addPrompts(choice)
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
    records = await controllers.viewUsers();
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
    .then((answer) => 
    {
        if(answer.options.toLowerCase() == "all employees")
        {
            viewTable("user-all");
            return;
        }
            viewTable("userByMgr");
        
    })
    .catch(err => {console.log(err)});
}


init();

