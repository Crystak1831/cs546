const people = require("./people");
const weather = require("./weather");
const work = require("./work");

main = async () =>{
    try {
        peopledata = await people.getPersonById(43);
        console.log(peopledata);
    } catch (err) {
        console.log(err);
    }
}
main();
