// server/index.js
const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const path = require("path");
const app = express();
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./src/server/routes");
app.use("/api", routes);

//const pub = path.join(__dirname, "public");

app.use(express.static(`${__dirname}/public`));

// Handles any requests that don't match the ones above
//without below code react routing wont work
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
