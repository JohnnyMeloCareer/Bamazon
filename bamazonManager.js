// Require mysql, inquirer, and cli-table
const mysql = require('mysql');
const inquirer = require('inquirer');
const Table = require("cli-table");

// Block-scope the recordKeeping, databaseUpdate, and total
let recordKeeping = [];
let databaseUpdate = [];
let total = 0;

// Create a connection to mysql database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "root",
    database: "BamazonDB"
});

// List a set of menu options:
function menuOptions(){
connection.query("SELECT * FROM products", function (err, res)
// View Products for Sale

// View Low Inventory

// Add to Inventory

// Add New Product

