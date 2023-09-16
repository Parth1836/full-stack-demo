// server/index.js

const express = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Furious@1836",
    database: "ParthDataBase",
    // insecureAuth: true
  });

// connection.connect((err) => {
//   console.log("inside db")
//   if (err) throw err;
//   else console.log("db connected");
// })

module.exports = connection;

