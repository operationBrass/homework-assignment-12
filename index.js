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
        let selectedFunction = answer.options.substr(0,answer.options.indexOf(' '));
        selectedFunction = selectedFunction.toLowerCase();
        let selectedType = answer.options.substr(answer.options.indexOf(' ')+1);
        selectedType = selectedType.toLowerCase();
        const funcType = selectedType + "-" + selectedFunction;
        
        if(funcType == "employee-view")
        {
            userViewPrompts();
        }
        else
        {
            switch (selectedFunction)
            {
            case "add": 
            userAddPrompts();
            break;
            case "view": 
            viewPrompts(selectedType);
            break;
            case "update": 
            updatePrompts(selectedType);
            break;
            case "delete": 
            deletePrompts(selectedType);
            break;
            case "department-add":
            addPrompts(selectedType);
            break;
            default:
            exit();
            }
        }
    })
    .catch(err => {console.log(err)});

}

function userViewPrompts()
{

    const prompts = inquirerPrompts.empViewOps();

    inquirer.prompt(prompts)
    .then((answer) => 
    {
        
    })
    .catch(err => {console.log(err)});
}

function addPrompts(choice)
{

    const prompts = inquirerPrompts.addOps(choice);

    inquirer.prompt(prompts)
    .then((answer) => 
    {
        
    })
    .catch(err => {console.log(err)});
}

function viewPrompts(choice)
{

console.log("called view", choice);

}

function updatePrompts(choice)
{

    console.log("called update", choice);

}

function deletePrompts(choice)
{

    console.log("called delete", choice);
}




init();

// Function call to initialize app
