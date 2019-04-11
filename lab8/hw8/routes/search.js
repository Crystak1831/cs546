const express = require("express");
const router = express.Router();
const data = require("../data");
router.post("/", async (req, res) =>{
    const info = req.body;
    // console.log(info);
    if(!info.personName || typeof info.personName != `string`)
        res.status(400).json({error:"need a string person name"});
    try {
        let peopleList = await data.getByName(info.personName);
        if(peopleList.length == 0)
            res.render("search/notFound",{personName:info.personName,title: "People Found"});
        else
            res.render("search/index",{peopleList:peopleList, personName:info.personName, title: "People Found"});
    } catch (err) {
        res.status(500).send(err);
    }
});
module.exports = router;
