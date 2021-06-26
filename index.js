const express = require("express");
const sequelize = require("sequelize");
const inquirerPrompts = require("./inquirer");
const inquirer = require("inquirer");

const app = express();
const PORT = process.env.PORT || 3001;
const homeMenu = inquirerPrompts.homeOps();

// TODO: Create a function to initialize app

function init()
{

inquirer.prompt(homeMenu)
    .then((answer) => 
    {
        if(answer.options == "exit")
        {
            
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
        //parse the users selection to category i.e employee
        const getFunc = answer.options.substr(0,answer.options.indexOf(' '));
        const getType = answer.options.substr(answer.options.indexOf(' ')+1);
        const funcType = getType.toLowerCase() + "-" + getFunc.toLowerCase();
        

        switch (funcType)
        {
            case "employee-add": 
            userViewPrompts();
            break;
            case "employee-view": 
            userViewPrompts();
            break;
            case "employee-update": 
            userViewPrompts();
            break;
            case "employee-delete": 
            userViewPrompts();
            break;
            case "department-add":
            break;
            case "department-view":
            break;
            case "department-update":
            break;
            case "department-delete":
            break;
            case "role-add":
            break;
            case "role-view":
            break;
            case "role-update":
            break;
            case "role-delete":
            break;
            default:
            exit();
        }

        
    })
    .catch(err => {console.log(err)});

}

function userViewPrompts()
{

    const userQ = inquirerPrompts.empViewOps();

    inquirer.prompt(userQ)
    .then((answer) => 
    {
        
    })
    .catch(err => {console.log(err)});
}

init();

// Function call to initialize app
