const express = require("express");
const router = express.Router();
const data = require("../data");
router.get("/:id", async(req, res) =>{
    try {
        const people = await data.getById(req.params.id);
        res.render("details/index",{people:people, title:"Person Found"});
    } catch (err) {
        res.sendStatus(404);
    }
});
module.exports = router;
