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

router.get("/:id", async (req, res) => {
  const testiID = req.params.id;

  con.query("SELECT * from "+table1+" where id = ?", testiID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      vastausJSON = JSON.parse(JSON.stringify(result));
      res.json(vastausJSON);
    }
  });
});

router.get("/:id/departure", async (req, res) => {
  const testiID = req.params.id;

  con.query("SELECT * from "+table2 +" where departure_station_id = ?", testiID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      vastausJSON = JSON.parse(JSON.stringify(result));
      res.json(vastausJSON);
    }
  });
  
});

router.get("/:id/return", async (req, res) => {
  const testiID = req.params.id;

  con.query("SELECT * from "+table2 +" where return_station_id = ?", testiID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      vastausJSON = JSON.parse(JSON.stringify(result));
      res.json(vastausJSON);
    }
  });
});



module.exports = router;
