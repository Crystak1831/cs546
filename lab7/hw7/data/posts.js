const mongoCollections = require("./collections");
const posts = mongoCollections.posts;
const {ObjectId} = require('mongodb');
create = async (title, author, content) => {
    if(!title || typeof title != `string`)
        throw `post title illegal`;
    if(!author || typeof author != `string`)
        throw `post author illegal`;
    if(!content || typeof content != `string`)
        throw `post content illegal`;
    animalFn = require("./animals.js");
    let animal = await animalFn.get(author);
    const addedPost = {
        title: title,
        author: animal._id,
        content: content
    };
    const postsCollection = await posts();
    let info = await postsCollection.insertOne(addedPost);
    if(info.insertedCount == 0)
        throw `Insert posts error`;
    return read(info.insertedId.toString());
};
read = async (id) =>{
    if(!id || !ObjectId.isValid(id) || typeof id != `string`)
        throw `posts ${id} illegal`;
    const postsCollection = await posts();
    let post = await postsCollection.find({_id:new ObjectId(id)}).limit(1).next();
    if(post == null)
        throw `${id} is not exist in posts`;
    return post;
};
Delete = async(id) => {
    let post = await read(id);
    const postsCollection = await posts();
    postsCollection.deleteOne(post);
    return post;
};
newTitle = async(id, newTitle) =>{
    if(!newTitle || typeof newTitle !==`string`)
        throw `${newTitle} should be string`;
    let post = await read(id);
    const postCollection = await posts();
    try{
        await postCollection.updateOne({_id: post._id},{$set:{title: newTitle}});
    }catch(err){
        throw `newTitle update error`;
    }
    return read(id);
};
newContent = async(id,newContent) =>{
    if(!newContent || typeof newContent != `string`)
        throw `${newTitle} should be a string`;
    let post = await read(id);
    const postCollection = await posts();
    try {
        await postCollection.updateOne({_id:post._id},{$set:{content: newContent}});
    } catch (err) {
        throw `update newContent error`;
    }
    return read(id);
};
getAll = async() => {
    allPosts = [];
    try{
        const postsCollection = await posts();
        allPosts = await postsCollection.find({}).toArray();
    }catch(err){
        throw `find all posts error`;
    }
    return allPosts;
};
module.exports = {
    getAll: getAll,
    read: read,
    create: create,
    newContent: newContent,
    newTitle: newTitle,
    delete: Delete
};
