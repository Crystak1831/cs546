const loginRoutes = require("./login");
const logoutRoutes = require("./logout");
const privateRoutes = require("./private");
let authenty;
const constructorMethod = app =>{
    // LOG middleware
    app.use("/",function(req, res, next){
        if(req.session.user)
            authenty = "(Authenticated User)";
        else
            authenty = "(Non-Authenticated User)";
        console.log("----------------");
        console.log([new Date().toUTCString()] + ": " + req.method + " " +req.originalUrl + " " + authenty);
        console.log("----------------");
        next();
    });
    app.get("/private",(req, res,next) =>{
        if(req.session.user){
            next();
            return;
        }
        res.status(403).render("login/error", {error: "Not login", title: "Private Info"});
    });
    app.get("/", (req,res) =>{
        if(req.session.user)
            res.redirect("/private");
        else
            res.render("login/login",{user:req.session.user, title:"Login"});
    });
    app.use("/login",loginRoutes);
    app.use("/private", privateRoutes);
    app.use("/logout", logoutRoutes);
};
module.exports = constructorMethod;
