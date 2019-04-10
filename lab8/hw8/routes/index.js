const searchRoutes = require("./search");
const detailsRoutes = require("./details");
const path = require("path");
const constructorMethod = app =>{
    app.use("/search", searchRoutes);
    app.use("/details", detailsRoutes);
    app.use("/", (req,res) =>{
        res.sendFile(path.resolve("index.html"));
    });
    app.use("*", (req, res) =>{
        res.sendStatus(404);
    });
};
module.exports = constructorMethod;
