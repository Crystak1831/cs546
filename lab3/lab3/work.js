const axios = require("axios");
async function getPeople(){
    let buf = [];
    try {
        const {data} = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
        buf = data;
    } catch (err){
        throw `axios get people data error`;
    }
    return buf;
}
async function getWork(){
    let buf = [];
    try {
        const {data} = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json');
        buf = data;
    } catch (err) {
        throw `axios get work data error`;
    }
    return buf;
}
whereDoTheyWork = async (firstName, lastName) => {
    if(!firstName || !lastName)
        throw "Need input firstName and lastName";
    if(typeof firstName != "string" || typeof lastName != "string")
        throw "firstName and lastName should be string";
    let people_data = await getPeople();
    let ssn = undefined;
    for(let people of people_data){
        if(firstName.localeCompare(people.firstName) == 0 &&
           lastName.localeCompare(people.lastName) == 0){
            ssn = people.ssn;
            break;
        }
    }
    if(ssn == undefined)
        throw `People \"${firstName} ${lastName}\" does not exit`;
    let found;
    let work_data = await getWork();
    let work_obj = {};
    for(let work of work_data){
        if(ssn.localeCompare(work.ssn) == 0){
            work_obj.company = work.company;
            work_obj.jobTitle = work.jobTitle;
            work_obj.willBeFired = work.willBeFired;
            break;
        }
    }
    if(Object.entries(work_obj).length === 0 && work_obj.constructor === Object)
        throw `There is no ${ssn} in the work_data`;
    if(work_obj.willBeFired == true)
        return `${firstName} ${lastName} - ${work_obj.jobTitle} at ${work_obj.company}. They will be fired.`;
    return `${firstName} ${lastName} - ${work_obj.jobTitle} at ${work_obj.company}. They will not be fired.`;
}
findTheHacker = async (ip) => {
    if(!ip)
        throw `There is no ip_address`;
    if(typeof ip != "string")
        throw `${ip} should be a string`;
    let work_data = await getWork();
    let ssn = undefined;
    for(let work of work_data){
        if(ip.localeCompare(work.ip) == 0){
            ssn = work.ssn;
            break;
        }
    }
    if(ssn == undefined)
        throw `${ip} is not exist in ip_data`;
    let people_data = await getPeople();
    let name = undefined;
    for(let people of people_data){
        if(ssn.localeCompare(people.ssn) == 0){
            name = people.firstName.concat(" ", people.lastName," is the hacker!");
            break;
        }
    }
    if(name == undefined)
        throw `${ssn} is not find in people_data`;
    return name;
}
module.exports = {
    whereDoTheyWork: whereDoTheyWork,
    findTheHacker: findTheHacker
}
