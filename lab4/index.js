const animals = require("./animals.js");
const dbConnection = require('./mongoConnection');
main = async () =>{
    const db = await dbConnection();
    let animal = await create("Sasha","Dog");
    let id = animal._id.toString();
    console.log(animal);
    animal = await create("Lucy","Dog");
    let all = await getAll();
    console.log(all);
    animal = await create("Duke", "Walrus");
    console.log(animal);
    animal = await rename(id,"Sashita");
    console.log(animal);
    all = await getAll();
    console.log(all);
    db.serverConfig.close();
}
main();
