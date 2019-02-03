const words = {
    programming: "The action or process of writing computer programs.",
    charisma: "A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)",
    sleuth: "To act as a detective : search for information",
    foray: "A sudden or irregular invasion or attack for war or spoils : raid",
    adjudicate: "to make an official decision about who is right in (a dispute) : to settle judicially"
};
const checkInput = function(str) {
    if(typeof str !== "string")
        throw `${str} is not a string`;
    return str;
}
// console.log(typeof "abc");
const lookupDefinition = function(inputVal) {
    checkInput(inputVal);
    if(words[inputVal] != undefined)
        return words[inputVal];
    throw `${inputVal} is not exit`;
}
const getWord = function (defVal){
    checkInput(defVal);
    let getWord = Object.keys(words).find(key => words[key] === defVal);
    if (getWord == undefined){
        throw "Word not found";
    }
    return getWord;
}
module.exports = {
    lookupDefinition: lookupDefinition,
    getWord: getWord
}
