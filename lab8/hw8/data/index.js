const axios = require(`axios`);
getPeople = async () => {
    let buf;
    try {
        const {data} = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json");
        buf = data;
        console.log(buf);
    } catch (err) {
        throw `Get data error`;
    }
    return buf;
};
getById = async (id) =>{
    if(id == "undefined")
        throw `need input an id`;
    id = Number(id);
    if(isNaN(id))
        throw `Id should be a number`;
    if((!Number.isInteger(id)) || id < 1 || id > 500)
        throw `${id} should be integer from 1 to 500`;
    let data = await getPeople();
    let person = data.find(x => x.id === id);
    return person;
};
getByName = async (name) =>{
    if(!name)
        throw `need a name`;
    if(typeof name != `string`)
        throw `name should be string`;
    let data = await getPeople();
    let buf = [];
    let n = 0;
    for(people of data){
        if(people.firstName == name || people.lastName == name){
            buf.push(people);
            ++n;
        }
        if( n == 20 )
            return buf;
    }
    return buf;
};
module.exports = {
    getById,
    getByName
};
