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
        //parse the users selection to category i.e employee
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
            viewPrompts(selectedType);
            break;
            case "update": 
            updatePrompts(selectedType);
            break;
            case "delete": 
            deletePrompts(selectedType);
            break;
            case "add":
            addPrompts(selectedType);
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
    case "userByMgr":
    break;
    case "department":
    break;
    case "role":
    break;
    default: init();
    }
}

function viewPrompts(choice)
{

switch(choice)
    {
    case "user-all":
    break;
    case "userByMgr":
    break;
    case "department":
    break;
    case "role":
    break;
    default: init();
    }
}

function updatePrompts(choice)
{

    switch(choice)
    {
    case "user-all":
    break;
    case "userByMgr":
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
        if(answer.options == "All employees")
        {
            viewPrompts("user-all");
        }
        else
        {
            viewPrompts("userByMgr");
        }
    })
    .catch(err => {console.log(err)});
}


init();

// Function call to initialize app
