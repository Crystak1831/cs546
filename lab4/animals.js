const mongoCollections = require("./mongoCollections");
const animals = mongoCollections.animals;
const {ObjectId} = require('mongodb');
create = async function create(name, animalType){
    if(!name)
        throw "need input an animal name";
    if(!animalType)
        throw "nedd input an animalType";
    if(typeof name !== 'string' || typeof animalType !== 'string')
        throw "name and animalType should be strings";
    let addedAnimal = {
        name: name,
        animalType: animalType
    };
    const animalsCollection = await animals();
    let info = await animalsCollection.insertOne(addedAnimal);
    if(info.insertedCount == 0)
        throw "Insert animal error";
    return get(info.insertedId.toString());
}
getAll = async function getAll(){
    let buf = {};
    try {
        const animalsCollection = await animals();
        buf = await animalsCollection.find({}).toArray();
    } catch (err) {
        throw "get animalsCollection error";
    }
    return buf;
}
get = async function get(id){
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
}
remove = async function remove(id){
    let animal = await get(id);
    const animalsCollection = await animals();
    try {
        await animalsCollection.deleteOne(animal);
    } catch (err) {
        throw "deleteOne error";
    }
    return animal;
}
rename = async function rename(id, newName){
    if(!newName || typeof newName !== 'string')
        throw `${newName} should be string`;
    let animal = await get(id);
    const animalsCollection = await animals();
    let newAnimal;
    try {
        // upsert default false
        await animalsCollection.updateOne({_id: animal._id},{$set: {
            name: newName
        }});
    } catch (err) {
        throw "updateOne error"; 
    }
    return get(id);
}
module.exports = {
    create: create,
    getAll: getAll,
    get: get,
    remove: remove,
    rename: rename
}
