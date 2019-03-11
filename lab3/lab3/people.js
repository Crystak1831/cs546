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
getPersonById = async (id) =>{
    if(id == "undefined")
        throw `need input an id`;
    if("number" !==typeof id)
        throw `${id} should be a number`;
    if((!Number.isInteger(id)) || id < 1 || id > 500)
        throw `${id} should be integer from 1 to 500`;
    let data = await getPeople();
    let person = data.find(x => x.id === id);
    let personName = person.firstName.concat(" ", person.lastName);
    return personName;
}
lexIndex = async (index) => {
    if(index == "undefined")
        throw `need input an id`;
    if("number" !==typeof index)
        throw `${index} should be a number`;
    if((!Number.isInteger(index)) || index < 0 || index > 500)
        throw `${index} should be integer from 0 to 499`;
    let data = await getPeople();
    data.sort((current, next) =>{
        if(current.lastName == next.lastName)
            return current.firstName.localeCompare(next.firstName);
        return current.lastName.localeCompare(next.lastName);
    });
    let name = data[index].firstName.concat(" ", data[index].lastName);
    return name;

}
firstNameMetrics = async() =>{
    let data = await getPeople();
    let totalLetters = 0;
    let totalVowels  = 0;
    let totalConsonants = 0;
    let longestName = data[0].firstName;
    let shortestName = data[0].firstName;
    let long = longestName.length;
    let short = shortestName.length;
    data.forEach((people) =>{
        if(people.firstName.length > long){
            longestName = people.firstName;
            long = longestName.length;
        }else if(people.firstName.length < short){
            shortestName = people.firstName;
            short = shortestName.length;
        }
        [...people.firstName].forEach((ch) =>{
            if(/[a-z]/i.test(ch)){
                totalLetters++;
                if(/[aeiou]/i.test(ch))
                    totalVowels++;
                else
                    totalConsonants++;
            }else
                totalConsonants++;
        });
    });
    let metrics = {};
    metrics.totalLetters = totalLetters;
    metrics.totalVowels = totalVowels;
    metrics.totalConsonants = totalConsonants;
    metrics.longestName = longestName;
    metrics.shortestName = shortestName;
    return metrics;
}
module.exports = {
    getPersonById : getPersonById,
    lexIndex: lexIndex,
    firstNameMetrics: firstNameMetrics
}
