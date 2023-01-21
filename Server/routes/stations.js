const express = require("express");
const router = express.Router();

const mysql = require("mysql");

// Database credentials
const hostname = "localhost",
  username = "root",
  password = "root",
  databsename = "solita";

// Establish connection to the database
let con = mysql.createConnection({
  host: hostname,
  user: username,
  password: password,
  database: databsename,
});

// define the main = "/" page route
router.get("/", async (req, res) => {
  con.query("SELECT * from asemat", (err, result) => {
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
