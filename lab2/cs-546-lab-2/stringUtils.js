const capitalize = function(string) {
    isString(string);
    let flag = true;
    let result = [];
    for(let i = 0; i < string.length; ++i){
        if(!isAlphabet(string[i])){
            result.push(string[i]);
            continue;
        }
        if(flag == true){
            flag = false;
            result.push(string[i].toUpperCase());
        }else
            result.push(string[i].toLowerCase());
    }
    return result.join("");
}
const repeat = function(string, num) {
    isString(string);
    if("number" !== typeof num)
        throw `${num} is not a number`;
    if(num <= 0)
        throw `${num} should be positive`;
    let result = [];
    for(let i = 0; i < num; ++i)
        result.push(string);
    return result.join("");
}
const countChars = function(string) {
    isString(string);
    const result = {};
    for(let i = 0; i < string.length; ++i){
        if("number" !== typeof result[string[i]])
            result[string[i]] = 1;
        else
            result[string[i]]++;
    }
    return result;
}
function isString(str){
    if("string" !== typeof str)
        throw `${str} is not a string`;
    return true;
}
function isAlphabet(ch) {
    return /[a-zA-Z]/.test(ch);
}
module.exports = {
    capitalize: capitalize,
    repeat: repeat,
    countChars: countChars
}
