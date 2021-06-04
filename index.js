// file dependencies
const express = require('express');
const mysql = require('mysql');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const app = require('./index.js');

//Create Connection
const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user:'root',
    password: 'zokaisiafa7'
});

db.connect(err => {
    if(err) throw err;
    // console.log('Database connected');
        prompt();
});


// start of calls to the database:
function prompt() {
    inquirer
    .prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            promptMessages.viewAllEmployees,
            promptMessages.viewByDepartment,
            promptMessages.viewByManager,
            promptMessages.viewAllRoles,
            promptMessages.addEmployee,
            // promptMessages.removeEmployee,
            promptMessages.updateRole,
            // promptMessages.exit
        ]
    })
    .then(answer => {
        console.log('answer', answer);
        switch (answer.action) {
            case promptMessages.viewAllEmployees:
                viewAllEmployees();
                break;

            case promptMessages.viewByDepartment:
                viewByDepartment();
                break;

            case promptMessages.viewByManager:
                viewByManager();
                break;

            case promptMessages.addEmployee:
                addEmployee();
                break;

            case promptMessages.removeEmployee:
                remove('delete');
                break;

            case promptMessages.updateRole:
                remove('role');
                break;

            case promptMessages.viewAllRoles:
                viewAllRoles();
                break;

            case promptMessages.exit:
                connection.end();
                break;
        }
    }); 
}




const app = express()

//Create Database
app.get('/createdb', (req, res) => {
    let sql ='CREATE DATABASE nodemysql'
    dbquery(sql, err => {
        if(err){
            throw err
        }
        res.send('Database Created');
    });
});

app.listen('127.0.0.1', () => {
    console.log('Server Started on port 127.0.0.1')
})