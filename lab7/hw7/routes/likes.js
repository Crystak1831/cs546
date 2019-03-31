const express = require("express");
const router = express.Router();
const data = require("../data");
const animalData = data.animals;
const postData = data.posts;
const {ObjectId} = require('mongodb');
router.post("/:id",async(req,res) =>{
    try {
        await animalData.updateLikes(req.params.id, req.query.postId,1);
        res.sendStatus(200);
    } catch (err) {
        res.status(404).send(err);
    }
});
router.delete("/:id",async (req, res) =>{
    try {
        await animalData.updateLikes(req.params.id, req.query.postId,0);
        res.sendStatus(200);
    } catch (err) {
        res.status(404).send(err);
    }
});
module.exports = router;
