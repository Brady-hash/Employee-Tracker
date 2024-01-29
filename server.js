const inquirer = require('inquirer');
const connection = require("./config/connection");
require("console.table");

//start/menu open
start();

function start() {
  inquirer.prompt({
    type: "list",
    name: "function",
    message: "Select from the following:",
    choices: [
      "VIEW all employees",
      "ADD employee",
      "UPDATE employee role",
      "VIEW all roles",
      "ADD role",
      "VIEW all departments",
      "ADD department",
    ],
  })
  .then((answer) => {
    switch (answer.function) {
      case "VIEW all employees":
        viewAllEmployees();
        break;
      case "ADD employee":
        addEmployee();
        break;
      case "UPDATE employee role":
        updateEmployeeRole();
        break;
      case "VIEW all roles":
        viewAllRoles();
        break;
      case "ADD role":
        addRole();
        break;
      case "VIEW all departments":
        viewAllDepartments();
        break;
      case "ADD department":
        addDepartment();
        break;
    }

  });
}

//Function to view all employees
function viewAllEmployees() {
  const query = `
  SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name,' ',m.last_name) AS manager
  FROM employee e
  LEFT JOIN roles r
    ON e.role_id = r.id
  LEFT JOIN department d 
    ON r.department_id = d.id
  LEFT JOIN employee m
    ON e.manager_id = m.id
  `;

  connection.query(query, (err, res) => {
    if(err) throw err;
    console.table(res);

    start();
  });
}


function addEmployee() {
  connection.query(`SELECT * FROM roles;`, (err, res) => {
    if (err) throw err;
    let roles = res.map(roles => ({ name: roles.title, value: roles.id }));
    connection.query(`SELECT * FROM employee;`, (err, res) => {
      if (err) throw err;
      let employees = res.map(employee => ({ name: employee.first_name + ' ' + employee.last_name, value: employee.id }));
      inquirer.prompt([
        {
          name: 'firstName',
          type: 'input',
          message: 'What is the new employee\'s first name?'
        },
        {
          name: 'lastName',
          type: 'input',
          message: 'What is the new employee\'s last name?'
        },
        {
          name: 'role',
          type: 'rawlist',
          message: 'What is the new employee\'s title?',
          choices: roles
        },
        {
          name: 'manager',
          type: 'rawlist',
          message: 'Who is the new employee\'s manager?',
          choices: employees
        }
      ]).then((response) => {
        connection.query(`INSERT INTO employee SET ?`, 
        {
          first_name: response.firstName,
          last_name: response.lastName,
          role_id: response.role,
          manager_id: response.manager,
        }, 
        (err) => {
          if (err) throw err;
          console.log(`\n ${response.firstName} ${response.lastName} successfully added to database! \n`);
          start(); 
        });
      });
    });
  });
}



function updateEmployeeRole() {
  connection.query(`SELECT * FROM roles;`, (err, res) => {
      if (err) throw err;
      let roles = res.map(roles => ({ name: roles.title, value: roles.id }));
      connection.query(`SELECT * FROM employee;`, (err, res) => {
          if (err) throw err;
          let employees = res.map(employee => ({ name: employee.first_name + ' ' + employee.last_name, value: employee.id }));
          inquirer.prompt([
              {
                  name: 'employee',
                  type: 'rawlist',
                  message: 'Which employee would you like to update the role for?',
                  choices: employees
              },
              {
                  name: 'newRole',
                  type: 'rawlist',
                  message: 'What should the employee\'s new role be?',
                  choices: roles
              },
          ]).then((response) => {
              connection.query(`UPDATE employee SET ? WHERE ?`, 
              [
                  {
                      role_id: response.newRole,
                  },
                  {
                      id: response.employee,
                  },
              ], 
              (err, res) => {
                  if (err) throw err;
                  console.log(`\n Successfully updated employee's role in the database! \n`);
                  start();
              });
          });
      });
  });
}


function viewAllRoles() {
  const query = `SELECT r.id, r.title, d.name AS department, r.salary
  FROM roles r
  LEFT JOIN department d 
    ON r.department_id = d.id
  `;

  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    
    start();
  });
}

function addRole() {
  connection.query(`SELECT * FROM department`, (err, res) => {
    if (err) throw err;
    let departments = res.map(department => ({ name: department.name, value: department.id }));
    inquirer.prompt([
      {
        name: 'title',
        type: 'input',
        message: 'What is the name of the role you want to add?'   
      },
      {
        name: 'salary',
        type: 'input',
        message: 'What is the salary of the role you want to add?'   
      },
      {
        name: 'deptName',
        type: 'rawlist',
        message: 'Which department do you want to add the new role to?',
        choices: departments
      },
    ]).then((response) => {
      connection.query(`INSERT INTO roles SET ?`,
        {
          title: response.title,
          salary: response.salary,
          department_id: response.deptName,
        },
        (err, result) => {
          if (err) throw err;
          console.log(`\n${response.title} successfully added to database!\n`);
          start();
        }
      );
    });
  });
}



function viewAllDepartments() {
  const query = `SELECT * FROM department`;

  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    
    start();
  });

}


const addDepartment = () => {
  inquirer.prompt([
      {
          name: 'newDept',
          type: 'input',
          message: 'Insert new department name:'
      }
  ]).then((response) => {
      connection.query('INSERT INTO department SET ?', 
          {
              name: response.newDept
          },
          (err, res) => {
              if (err) throw err;
              console.log(`\n${response.newDept} successfully added to database!\n`);
              start();
          }
      );
  });
};
