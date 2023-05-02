const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

// https://github.com/solita/dev-academy-2023-exercise

// npm i mysql and csvtojson
// npm i cors express

// Creating HTTP-server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.use(express.json());
app.use(cors());

// Routers
const tripRouter = require("./routes/journeys");
app.use("/journeys", tripRouter);

const stationsRouter = require("./routes/stations");
app.use("/stations", stationsRouter);

const singleStationsRouter = require("./routes/singleStations");
app.use("/singlestation", singleStationsRouter);


// Importing mysql and csvtojson packages
const csvtojson = require("csvtojson");
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

// Create database and tables
con.query("use " + databasename + ";", function (err, result) {

});
// creating table 1
var sql =
  "CREATE TABLE IF NOT EXISTS " +
  table1 +
  "(FID INTEGER NOT NULL,ID INTEGER NOT NULL,NIMI VARCHAR(500),NAMN VARCHAR(500),NAME VARCHAR(500),OSOITE VARCHAR(1000),ADDRESS VARCHAR(1000),KAUPUNKI VARCHAR(500),STAD VARCHAR(500),OPERAATTORI VARCHAR(500),KAPASITEETI INTEGER,x INTEGER,y INTEGER,PRIMARY KEY(ID))";
con.query(sql, function (err, result) {
  console.log("Table " + table1 + " created");
});

// creating table 2
var sql =
  "CREATE TABLE IF NOT EXISTS " +
  table2 +
  "(departure_date DATETIME,return_date DATETIME,departure_station_id INTEGER, departure_station_name varchar(100),return_station_id INTEGER,return_station_name varchar(100),covered_distance INTEGER, duration INTEGER, FOREIGN KEY (departure_station_id)REFERENCES  " +
  table1 +
  "(ID))";
con.query(sql, function (err, result) {
  console.log("Table " + table2 + " created");
});

readStations();
readFile();

function readStations() {
  // Adding stations to database
  const fileName1 = "./Helsingin_ja_Espoon_kaupunkipyöräasemat_avoin.csv";
  csvtojson()
    .fromFile(fileName1)
    .then((source) => {
      // Fetching the data from each row
      // and inserting to the table "asemat"
      for (var i = 0; i < source.length; i++) {
        var FID = source[i]["FID"],
          ID = source[i]["ID"],
          Nimi = source[i]["NIMI"],
          Namn = source[i]["Namn"],
          Name = source[i]["Name"],
          Osoite = source[i]["Osoite"],
          Address = source[i]["Adress"],
          Kaupunki = source[i]["Kaupunki"],
          Stad = source[i]["Stad"],
          Operaattori = source[i]["Operaattor"],
          Kapasiteetti = source[i]["Kapasiteet"],
          x = source[i]["x"],
          y = source[i]["y"];
        var insertStatement =
          "INSERT INTO " +
          table1 +
          " values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        var items = [
          FID,
          ID,
          Nimi,
          Namn,
          Name,
          Osoite,
          Address,
          Kaupunki,
          Stad,
          Operaattori,
          Kapasiteetti,
          x,
          y,
        ]; // Inserting data of current row // into database
        con.query(insertStatement, items, (err, results, fields) => {
          //if (err) {
          //console.log("Unable to insert item at row ", i + 1);
          // return console.log(err);
          // }
        });
      }
      console.log("Station items stored into database successfully");
    });
}

// Adding journeys to database
function readFile() {
const fileName2 = "./2021-05.csv";
csvtojson()
  .fromFile(fileName2)
  .then((source) => {
    // Fetching the data from each row
    // and inserting to the table "matkat"
    for (var i = 0; i < 500; i++) {
      if (
        (source[i]["Covered distance (m)"] > 10) &
        (source[i]["Duration (sec)"] > 10)
      ) {
        var departure_date = source[i]["Departure"],
          return_date = source[i]["Return"],
          departure_station_id = source[i]["Departure station id"],
          departure_station_name = source[i]["Departure station name"],
          return_station_id = source[i]["Return station id"],
          return_station_name = source[i]["Return station name"],
          covered_distance = source[i]["Covered distance (m)"],
          duration = source[i]["Duration (sec)"];
        var insertStatement =
          "INSERT INTO "+table2+" values(?, ?, ?, ?, ?, ?, ?, ?)";
        var items = [
          departure_date,
          return_date,
          departure_station_id,
          departure_station_name,
          return_station_id,
          return_station_name,
          covered_distance,
          duration,
        ];
        con.query(insertStatement, items, (err, results, fields) => {
          //if (err) {
            //console.log("Unable to insert item at row ", i + 1);
           // return console.log(err);
          //}
        });
      } else {
        //console.log("Items duration or distance on row " +[i] +" wasn't enough to be added to database");
      }
    }
    console.log("Journey items stored into database successfully");
  });
}
