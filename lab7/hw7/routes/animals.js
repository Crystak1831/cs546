const express = require("express");
const router = express.Router();
const data = require("../data");
const animalData = data.animals;
const postData = data.posts;
router.get("/", async(req, res) =>{
    try{
        const animalsList = await animalData.getAll();
        let newLikesList;
        for(let animal of animalsList){
            newLikesList = [];
            for(let id of animal.likes){
                let post = await postData.read(id.toString());
                newLikesList.push({_id:id,title:post.title});
            }
            animal.likes = newLikesList;
            animal.posts = newLikesList;
        }
        res.status(200).json(animalsList);
    }catch(err){
        res.status(500).send(err);
    }
});
router.get("/:id",async(req, res) =>{
    try {
        let animal = await animalData.get(req.params.id);
        let newLikeList = [];
        for(let id of animal.likes){
            let post = await postData.read(id.toString());
            newLikeList.push({_id:id, title:post.title});
        }
        animal.likes = newLikeList;
        animal.posts = newLikeList;
        res.status(200).json(animal);
    } catch (err) {
        res.status(404).send(err);
    }
});
router.post("/", async (req, res) =>{
    const animalInfo = req.body;
    if(Object.keys(animalInfo).length != 2){
        res.status(400).json({error:"Need a correct animal"});
        return;
    }
    if(!animalInfo.name || typeof animalInfo.name != `string`){
        res.status(400).json({error: "Need a correct animal name"});
        return;
    }
    if(!animalInfo.animalType || typeof animalInfo.animalType != `string`){
        res.status(400).json({error: "Need a correct animal type"});
        return;
    }
    try {
        const newAnimal = await animalData.create(animalInfo.name, animalInfo.animalType);
        res.status(200).json(newAnimal);
    } catch (err) {
        res.status(400).send(err);
    }
});
router.put("/:id", async(req, res) =>{
    const animalInfo = req.body;
    let len = Object.keys(animalInfo).length;
    if(len != 1 && len != 2){
        res.status(400).json({error:"Need a correct animal"});
        return;
    }
    if(len == 1){
        if(!animalInfo.newName && !animalInfo.newType){
            res.status(400).json({error: "Need a new animal name or a new animal type"});
            return;
        }
        if(typeof animalInfo[Object.keys(animalInfo)[0]] != `string`){
            res.status(400).json({error: "Type should be string"});
            return;
        }
    }else{
        if(!animalInfo.newType || typeof animalInfo.newType != `string`){
            res.status(400).json({error:"need a new animal type"});
            return;
        }
        if(!animalInfo.newName || typeof animalInfo.newName != `string`){
            res.status(400).json({error:"need a new animal name"});
            return;
        }
    }
    let result = undefined;
    try{
        if(animalInfo.newName)
            result = await animalData.rename(req.params.id,animalInfo.newName);
        if(animalInfo.newType)
            result = await animalData.retype(req.params.id,animalInfo.newType);
        let newLikeList = [];
        for(let id of result.likes){
            let post = await postData.read(id.toString());
            newLikeList.push({_id:id, title:post.title});
        }
        result.likes = newLikeList;
        result.posts = newLikeList;
        res.status(200).json(result);
    }catch (err){
        res.status(400).send(err);
    }
});
router.delete("/:id", async(req, res) =>{
    let newLikeList = [];
    let post;
    try {
        let animal = await animalData.get(req.params.id);
        for(let postId of animal.likes){
            post = await postData.read(postId.toString());
            newLikeList.push({_id: postId, title:post.title});
            postData.delete(postId.toString());
        }
        await animalData.remove(animal._id.toString());
        animal.likes = newLikeList;
        animal.posts = newLikeList;
        let result = {};
        result.deleted = true;
        result.data = animal;
        res.status(200).json(result);
    } catch (err) {
        res.status(404).send(err);
    }
});
module.exports = router;
