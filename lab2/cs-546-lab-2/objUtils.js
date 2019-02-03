const extend = function(...args) {
    if(args.length < 2)
        throw `extend need at least 2 args`;
    args.forEach(arg =>{
        if(undefined === arg || (typeof arg !== "object"))
            throw `${arg} is invalid input`;
    });
    let result = {};
    for(let i = 0; i < args.length; ++i){
        temp = JSON.parse(JSON.stringify(args[i]));
        result = Object.assign(temp,result);
    }
    return result;
}
const smush = function(...args) {
    if(args.length < 2)
        throw `extend need at least 2 args`;
    args.forEach(arg =>{
        if(undefined === arg || (typeof arg !== "object"))
            throw `${arg} is invalid input`;
    });
    let result = {};
    for(let i = 0; i < args.length; ++i){
        temp = JSON.parse(JSON.stringify(args[i]));
        result = Object.assign(result,temp);
    }
    return result;
}
const mapValues = function(object, func) {
    if("object" !== typeof object)
        throw `${object} should be an object.`;
    if("function" !== typeof func || func == undefined)
        throw`${func} should be a valid function`;
    const result = {};
    Object.keys(object).forEach(key => {
        result[key] = func(object[key]);
    });
    return result;
}
module.exports = {
    extend: extend,
    smush: smush,
    mapValues: mapValues
}
