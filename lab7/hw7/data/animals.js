const mongoCollections = require("./collections");
const animals = mongoCollections.animals;
const posts = mongoCollections.posts;
const postData = require("./posts.js");
const {ObjectId} = require("mongodb");
create = async (name, animalType, likes) =>{
    if(!name)
        throw "need input an animal name";
    if(!animalType)
        throw "need input an animalType";
    if(typeof name !== 'string' || typeof animalType !== 'string')
        throw "name and animalType should be strings";
    if(likes){
        if(!Array.isArray(likes))
            throw `${likes} should be an array`;
        const postsCollection = await posts();
        for(let like of likes){
            if(typeof like != "string")
                throw `${like} in likes should be string`;
            if(ObjectId.isValid(like)){
                likeObjId = new ObjectId(like);
                like_exist = await postsCollection.find({_id:likeObjId}).limit(1).next();
                if(like_exist == null)
                    throw `animals with non-exist id ${like} in likes`;
            }else
                throw `${like} is invalid objectId in likes`;
        }
    }else
        likes = [];
    const addedAnimal = {
        name : name,
        animalType : animalType,
        likes :likes
    };
    const animalsCollection = await animals();
    let info = await animalsCollection.insertOne(addedAnimal);
    if(info.insertedCount == 0)
        throw `insert ${addedAnimal} error`;
    return get(info.insertedId.toString());
};
getAll = async () => {
    allAnimals = [];
    try{
        const animalsCollection = await animals();
        allAnimals = await animalsCollection.find({}).toArray();
    }catch(err){
        throw `find All animals error`;
    }
    return allAnimals;
};
get = async (id) =>{
    if(!id || typeof id !== 'string')
        throw `${id} should be a string`;
    if(!ObjectId.isValid(id))
        throw "error string to ObjectId";
    const animalsCollection = await animals();
    let objectId = new ObjectId(id);
    let animal = null;
    try {
        animal = await animalsCollection.find({_id:objectId}).limit(1).next();
    } catch (err) {
        throw "find error";
    }
    if(animal == null)
        throw `Id ${id} is not exist in the database`;
    return animal;
};
remove = async function remove(id){
    let animal = await get(id);
    const animalsCollection = await animals();
    try {
        await animalsCollection.deleteOne(animal);
    } catch (err) {
        throw "deleteOne error";
    }
    return animal;
};
rename = async function rename(id, newName){
    if(!newName || typeof newName !== 'string')
        throw `${newName} should be string`;
    let animal = await get(id);
    const animalsCollection = await animals();
    try {
        // upsert default false
        await animalsCollection.updateOne({_id: animal._id},{$set: {
            name: newName
        }});
    } catch (err) {
        throw "animal updateOne error";
    }
    return get(id);
};
retype = async(id, newType) =>{
    if(!newType || typeof newType !== `string`)
        throw `${newType} should be string`;
    let animal = await get(id);
    const animalsCollection = await animals();
    try {
        await animalsCollection.updateOne({_id: animal._id},{$set:{
            animalType: newType
        }});
    } catch (err){
        throw `animal updateOne error`;
    }
    return get(id);
};
/*
  update the likes list, 0 for update, 0 for delete
*/
updateLikes = async(animalId, postId, action) =>{
    if(!animalId || typeof animalId != `string`)
        throw `need correct animalId`;
    if(!postId || typeof postId != `string`)
        throw `need correct postId`;
    animal = await get(animalId);
    post = await postData.read(postId);
    let index = animal.likes.indexOf(post._id.toString());
    if(index != -1 ){
        if(action == 0 ){ // in likes need delete
            animal.likes.splice(index,1);
            const animalsCollection = await animals();
            await animalsCollection.updateOne({_id: animal._id},{$set:{likes:animal.likes}});
        }
        return get(animal._id.toString());
    }else{
        if(action == 1){ // not in likes need update
            animal.likes.push(post._id.toString());
            const animalsCollection = await animals();
            await animalsCollection.updateOne({_id: animal._id},{$set:{likes:animal.likes}});
        }
        return get(animal._id.toString());
    }
};
module.exports = {
    create,
    getAll,
    get,
    remove,
    rename,
    retype,
    updateLikes
};
