const constructorMethod = app=>{
    app.get("/",(req, res) =>{
        res.render("primeChecker/prime",{title:"Prime checker"});
    });
    app.use("*", (req, res) =>{
        res.redirect("/");
    });
};
module.exports = constructorMethod;
