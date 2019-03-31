const express = require("express");
const router = express.Router();
const data = require("../data");
const animalData = data.animals;
const postData = data.posts;
router.get("/", async(req, res) =>{
    try {
        allPosts = await postData.getAll();
        let authorObj = {};
        let animal;
        for(let post of allPosts){
            animal = await animalData.get(post.author.toString());
            authorObj._id = animal._id;
            authorObj.name = animal.name;
            post.author = authorObj;
        }
        res.status(200).json(allPosts);
    } catch (err) {
        res.status(400).send(err);
    }
});
router.get("/:id", async(req, res) =>{
    let post;
    try{
        post = await postData.read(req.params.id);
        console.log(post);
    }catch(err){
        res.status(404).send(err);
        return;
    }
    try{
        let animal = await animalData.get(post.author.toString());
        post.author = {
            _id: animal._id,
            name: animal.name
        };
        res.status(200).json(post);
    }catch(err){
        res.status.send("posts author error");
        res.status(404).send(err);
    }
});
router.post("/", async(req, res) =>{
    const postInfo = req.body;
    if(Object.keys(postInfo).length != 3) {
        res.status(400).json({error:"need a correct post"});
        return;
    }
    if(!postInfo.title || typeof postInfo.title != `string`) {
        res.status(400).json({error:"need a correct title"});
        return;
    }
    if(!postInfo.author || typeof postInfo.author !=`string`){
        res.status(400).json({error:"need a correct author"});
        return;
    }
    if(!postInfo.content || typeof postInfo.content != `string`){
        res.status(400).json({error:"need a correct content"});
        return;
    }
    let authorObj = {};
    let animal;
    try {
        const newPost = await postData.create(postInfo.title, postInfo.author, postInfo.content);
        console.log(newPost);
        animal = await animalData.get(newPost.author.toString());
        authorObj._id = animal._id;
        authorObj.name = animal.name;
        animal.author = authorObj;
        res.json(animal);
    } catch (err) {
        res.status(400).send(err);
    }
});
router.put("/:id",async (req,res) =>{
    const postInfo = req.body;
    let len = Object.keys(postInfo).length;
    if(len != 1 && len != 2){
        res.status(400).json({error:"Need a correct post"});
        return;
    }
    if(len == 1){
        if(!postInfo.newTitle && !postInfo.newContent){
            res.status(400).json({error: "Need a new post title or a new post content"});
            return;
        }
        if(typeof postInfo[Object.keys(postInfo)[0]] != `string`){
            res.status(400).json({error: "the data type should be string"});
            return;
        }
    }else{
        if(!postInfo.newTitle || typeof postInfo.newTitle != `string`){
            res.status(400).json({error:"need a new post title"});
            return;
        }
        if(!postInfo.newContent || typeof postInfo.newContent != `string`){
            res.status(400).json({error:"need a new post content"});
            return;
        }
    }
    let post;
    try {
        post = await postData.read(req.params.id);
    } catch (err) {
        res.status(404).send(err);
    }
    try{
        if(postInfo.newTitle)
            post = await postData.newTitle(req.params.id, postInfo.newTitle);
        if(postInfo.newContent)
            post = await postData.newContent(req.params.id, postInfo.newContent);
        let animal = await animalData.get(post.author.toString());
        post.author = {
            _id: animal._id,
            name: animal.name
        };
        res.status(200).json(post);
    }catch(err){
        res.status(400).send(err);
    }
});
module.exports = router;
