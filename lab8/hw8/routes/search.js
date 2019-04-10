const express = require("express");
const router = express.Router();
const data = require("../data");
router.post("/", async (req, res) =>{
    const info = req.body;
    // console.log(info);
    if(!info.personName || typeof info.personName != `string`)
        res.status(400).json({error:"need a string person name"});
    try {
        // console.log(info.personName);
        // console.log(data.getByName);
        let peopleList = await data.getByName(info.personName);
        if(peopleList.length == 0)
            res.render("search/notFound",{personName:info.personName});
        else
            res.render("search/index",{peopleList:peopleList, personName:info.personName, title: "People Found"});
    } catch (err) {
        res.status(500).send(err);
    }
});
module.exports = router;
