const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "THESHIELD95",
    database: "ProtoOne",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {

    const theName = req.body.theName;
    const theMessage = req.body.theMessage;

    const sqlInsert = 
    "INSERT INTO one (name, message) VALUES (?,?)";
    db.query(sqlInsert, [theName, theMessage], (err, result) => {
        console.log(result);
    });
});

app.listen(3001, () => {
    console.log('running on port 3001');
});