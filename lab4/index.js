const animals = require("./data/animals");
const dbConnection = require('./data/mongoConnection');
main = async () =>{
    const db = await dbConnection();
    try {
        let animal = await create("a","Dog");
        // console.log(typeof animal._id);
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
    } catch (err) {
        console.log(err);
    } finally {
        db.serverConfig.close();
    }
}
main();
