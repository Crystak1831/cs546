const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use("/public", express.static(__dirname + "/public"));/* without the app.use "/public" express.static... the css can not work. */
const configRoutes = require("./routes");
const exphbs = require("express-handlebars");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");
configRoutes(app);
app.listen(3000, ()=>{
    console.log("Server is running on http://127.0.0.1:3000");
});
