const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'pass',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`),
    start(),
  );

function start() {
  inquirer.prompt({
    type: "list",
    name: "function",
    message: "Select from the following:",
    choices: [
      "VIEW all employees",
      "ADD employees",
      "UPDATE employee role",
      "VIEW all roles",
      "ADD role",
      "VIEW all departments",
      "ADD department",
    ],
  })
  .then((answer) => {
    switch (answer.action) {
      case "VIEW all employees"
        viewAllEmployees();
        break;
      case "ADD employees"
        addEmployees();
        break;
      case "UPDATE employee role"
        updateEmployeeRole();
        break;
      case "VIEW all roles"
        viewAllRoles();
        break;
      case "ADD role"
        addRole();
        break;
      case "VIEW all departments"
        viewAllDepartments();
        break;
      case "ADD department"
        addDepartments();
        break;
    }

  })
}