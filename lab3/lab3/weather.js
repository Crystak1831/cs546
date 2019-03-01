const axios = require("axios");
const TEMP_TO_GO = 34;
getWeather = async () =>{
    let buf = [];
    try {
        const {data} = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json');
        buf = data;
    } catch (err) {
        throw 'axios get weather error';
    }
    return buf;
}
async function getPeople(){
    let buf = [];
    try {
        const {data} = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
        buf = data;
    } catch (err){
        throw `axios get data error`;
    }
    return buf;
}
shouldTheyGoOutside = async (firstName, lastName) => {
    if(!firstName || !lastName)
        throw "Need input firstName and lastName";
    if(typeof firstName != "string" || typeof lastName != "string")
        throw "firstName and lastName should be string";
    let zip_code = undefined;
    people_data = await getPeople();
    for(let people of people_data){
        if(firstName.localeCompare(people.firstName) == 0 &&
           lastName.localeCompare(people.lastName) == 0){
            zip_code = people.zip;
            break;
        }
    }
    console.log(typeof zip_code);
    if(zip_code == undefined)
        throw `People \"${firstName} ${lastName}\" does not exit`;
    weather_data = await getWeather();
    let temprature = undefined;
    for(let weather of weather_data){
        if(zip_code.localeCompare(weather.zip) == 0){
            temprature = weather.temp;
            break;
        }
    }
    if(temprature == undefined)
        throw "There is no ${zip_code} in the weather_data";
    if(TEMP_TO_GO <= temprature)
        return `Yes, ${firstName} should go outside.`;
    else
        return `No, ${firstName} should not go outside`;
}
module.exports = {
    shouldTheyGoOutside : shouldTheyGoOutside
}
