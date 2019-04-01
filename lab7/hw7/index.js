const express = require("express");
const app = express();
const configRoutes = require("./routes");
const bodyParser = require("body-parser");
// const test = require("./data/animals.js");
// console.log(test);
app.use(bodyParser.json());
configRoutes(app);
app.listen(3000,() =>{
    console.log("routes running on http://localhost:3000");
});
