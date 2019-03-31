const animalRoutes = require("./animals");
const postRoutes = require("./posts");
const likeRoutes = require("./likes");
const constructorMethod = app => {
    app.use("/animals",animalRoutes);
    app.use("/posts", postRoutes);
    app.use("/likes",likeRoutes);
    app.use("*",(req,res) =>{
        res.status(404).json({error:"not define"});
    });
};
module.exports = constructorMethod;
