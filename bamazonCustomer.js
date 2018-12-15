// Const is a variable that doesn't change it value
// Require mysql, inquirer, and cli-table
// mysql is a package that allows us to connect, and interact with mysql server.
const mysql = require('mysql');
// inquirer is a package that allow users interaction, in which you inquirer, and provide choices. 
const inquirer = require('inquirer');
// cli-table allows us to make the table, and it's a package that we install
const Table = require("cli-table");

// Let belong to the space that you're in. Independent of the first letter, Let is more local scoped, while Var is more so global. 
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

// Connection is defined back in line 17, and is equal to mysql.connection, .connect is a function that belongs to mysql, function is defining the following as a function
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id: " + connection.threadId);
  itemsForSale(); // Running itemsForSale function
});

// Defining itemsForSale function
function itemsForSale() {
  connection.query("SELECT * FROM products", function (err, res) {
    const table = new Table({
      head: ['Item Id', "Products Name", "Products Kind", "Product Price", "Quantity"],
      colWidths: [10, 15, 15, 15, 10]
    });
    for (var i = 0; i < res.length; i++) {
      table.push(
        [res[i].item_id, res[i].product_name, res[i].product_kind, res[i].price, res[i].stock_quantity]
      );
    }
    console.log(table.toString());
  });
  setTimeout(function () { purchase() }, 1000);
};

function purchase() {
  console.log('\r\n');
  inquirer
    .prompt([
      {
        name: "buy",
        type: "input",
        message: "Please add the ID of the item you would like to purchase",
      },
      {
        name: "amount",
        type: "input",
        message: "How many would you like to purchase?"
      }
    ])
    .then(function (answer) {
      const query = "SELECT * FROM products WHERE item_id = ?";
      connection.query(query, answer.buy, function (err, res) {
        if (res.length > 0) {
          if (answer.amount > res[0].stock_quantity) {
            console.log('\r\n');
            console.log('Sorry, this amount is greater than what we have in invetory at this time.  Please try again');
            setTimeout(function () { purchase() }, 1000); // So the question appear 1 second after the table.
          }
          else {
            recordKeeping.push(res, parseInt(answer.amount));
            databaseUpdate.push(res[0].item_id, (parseInt(res[0].stock_quantity) - parseInt(answer.amount)));
            console.log('\r\n');

            const table = new Table({
              head: ['Item Id', "Products Name", "Products Kind", "Product Price", "Quantity"],
              colWidths: [10, 15, 15, 15, 10]
            });
            
            for (var i = 0; i < recordKeeping.length; i += 2) {
              
              table.push(
                [recordKeeping[i][0].item_id, recordKeeping[i][0].product_name, recordKeeping[i][0].product_kind, recordKeeping[i][0].price, recordKeeping[i + 1]]
              );
              total += (recordKeeping[i][0].price * recordKeeping[i + 1]);
            }
            console.log(table.toString());
            console.log(`                                                                                 TOTAL:  ${total}`);
            console.log(`                                                                                 -----------------------`);
            }
            checkOut();
          }
        else {
          console.log('\r\n');
          console.log('Sorry, you pick an item which is not in our inventory.  Please try again');
          setTimeout(function () { purchase() }, 1000);
        }
      })
    })
};

function checkOut() {
  console.log('\r\n');

  inquirer
    .prompt([
      {
        name: "next",
        type: "list",
        message: " ",
        choices: ["Continue shopping", "Checkout", "Quit"]
      }
    ])
    .then(function (answer) {
      let run = 1;
      switch (answer.next) {
        case "Continue to purchesing":

          break;

        case "Checkout":
          for (var i = 0; i < databaseUpdate.length; i += 2) {
            query2 = "UPDATE products SET stock_quantity=? WHERE item_id=?";
            connection.query(query2, [databaseUpdate[i + 1], databaseUpdate[i]], function (err, result) { })
          }
          console.log('\r\n');
          console.log("Your purchase has been processed.  Thank you for your business.  Hope to see you soon!!!")
          console.log('\r\n');
          run = 0;
          break;

        case "Quit":
          run = 0;
          break;
      }
      if (run === 1) { purchase() };
    })
}

