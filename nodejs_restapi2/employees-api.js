// npm init 
const fs = require("fs");
const express = require("express"); // npm install --save express
const bodyParser = require("body-parser"); // npm install --save body-parser

const app = express();

app.use(bodyParser.json());

// build an api that adds, edits, get, & deletes an employee in the
// employees.json file.

const employees = JSON.parse(fs.readFileSync("./employees.json", "utf-8"));

// GET:
// myendpointname.com/employees = Json with information from all 10 employees.
app.get("/employees", (req, res) => {
  // we want to return all employees in the
  // employees.json file.
  res.send(employees);
});

// GET certain employee based on their ID
// myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.
app.get("/employees/:id", (req, res) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      return res.send(employees[i]);
    }
  }

  res.status(400).send("Unable to find id");
});

// POST new employee based on their ID
app.post("/employees/", (req, res) => {
 // {name: "Kalijah", id: 9, salary: 90000, department: "Engineering"}
  // expecting: {name: "name", id: id, salary: 8500, department: "department"}
  const { name, id, salary, department } = req.body;
  if (name && id && salary && department) {
    // success
    const newEmployee = {
      name,
      id,
      salary,
      department
    };
    employees.push(newEmployee);
    fs.writeFileSync("./employees.json", JSON.stringify(employees));
    res.send(newEmployee);
  } else {
    res.status("422").send("Unable to add employee");
  }
});

// PUT information for specified employee.
app.put("/employees/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const body = req.body;

  let filteredEmployees = employees.filter(employee => employee.id === id);
  filteredEmployees = body;

  let updatedEmployees = employees.filter(employee => employee.id !== id);
  updatedEmployees.push(filteredEmployees);

  fs.writeFileSync("./employees.json", JSON.stringify(updatedEmployees));
  
  if (updatedEmployees.length !== filteredEmployees.length) {
    return res.status(404).send("Unable to find ID");
  }
  
  res.send(updatedEmployees);
});

// DELETE certain employee based on their ID
app.delete("/employees/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const filteredEmployees = employees.filter(employee => employee.id !== id);
  if (filteredEmployees.length === employees.length) {
    return res.status(404).send("Unable to find ID");
  }

  fs.writeFileSync("./employees.json", JSON.stringify(filteredEmployees));
  res.send(filteredEmployees);
});

app.listen(3003);
