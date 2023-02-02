const express = require("express");
const router = express.Router();

const mysql = require("mysql");

// Database credentials
const hostname = "mysqldb",
  username = "root",
  password = "root",
  databasename = "solita_assignment",
  table1 = "stations",
  table2 = "journeys";

// Establish connection to the database
let con = mysql.createConnection({
  host: hostname,
  user: username,
  password: password,
  database: databasename,
});

// define the main = "/" page route
router.get("/", async (req, res) => {
  con.query("SELECT * from "+table1, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      vastausJSON = JSON.parse(JSON.stringify(result));
      res.json(vastausJSON);
    }
  });
  //con.end();
});


module.exports = router;
