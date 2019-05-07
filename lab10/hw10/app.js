const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const data = require("./data");
const app = express();
const configRoutes = require("./routes");
app.use(session({
    name: 'AuthCookie',
    secret: 'This is a random string to create session',
    resave: false,
    saveUninitialized: true
}));
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
configRoutes(app);
app.listen(3000,function(){
    console.log("Server running on http://127.0.0.1:3000");
});
