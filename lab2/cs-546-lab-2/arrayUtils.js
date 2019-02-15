const head = function(arr) {
    isValidArray(arr);
    return arr[0];
}
const last = function(arr) {
    isValidArray(arr);
    return arr[arr.length - 1];
}
const remove = function(arr,index) {
    isValidArray(arr);
    if("number" !== typeof index )
        throw `${index} is not a number`;
    if(index < 0 || index >= arr.length)
        throw `${index} is out of bound`;
    arr.splice(index, 1);
    return arr;
}
const range = function(end, value){
    if("number" !== typeof end)
        throw `${end} is not a number`;
    if(end <= 0)
        throw `${end} should be positive`;
    let result = [];
    if(typeof value === "undefined"){
        for(let i = 1; i < end; ++i)
            result.push(i);
        return result;
    }
    for(let i = 0; i < end; ++i)
        result.push(value);
    return result;
}
const countElements = function(arr) {
    if(false === Array.isArray(arr))
        throw `${arr} is not an array`;
    const result = {};
    for(let i = 0; i < arr.length; ++i){
        if(typeof result[arr[i]] != "number")
            result[arr[i]] = 1;
        else
            result[arr[i]] += 1;
    }
    return result;
}
const isEqual = function (arr1,arr2) {
    if(false === Array.isArray(arr1))
        throw `${arr1} is not an array`;
    if(false === Array.isArray(arr2))
        throw `${arr2} is not an array`;
    if(arr1.length != arr2.length)
        return false;
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}
function isValidArray(arr) {
    if(false === Array.isArray(arr))
        throw `${arr} is not an array`;
    if(0 == arr.length)
        throw `${arr} is an empty array`;
    return true;
}
module.exports = {
    head: head,
    last: last,
    remove: remove,
    range: range,
    countElements: countElements,
    isEqual: isEqual
}
