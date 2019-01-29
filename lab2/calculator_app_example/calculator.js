exports = module.exports = {
    description: `This is a calculator`,
    divideTwoNumbers :(num1, num2) => {
        if(num1 == undefined && typeof num1 !== "number")
            throw "num1 is not a number";
        if(num2 == undefined && typeof num2 !== "number")
            throw "num2 is not a number";
        if(num2 === 0)
            throw `divided num cannot be zero`;
        return num1 / num2;
    },
    mulTwoNumbers: (num1, num2) => {
        if(num1 == undefined && typeof num1 !== "number")
            throw "num1 is not a number";
        if(num2 == undefined && typeof num2 !== "number")
            throw "num2 is not a number";
        return num1 * num2;
    }
};
exports.addTwoNumbers = (num1, num2) => {
    if(num1 == undefined && typeof num1 !== "number")
        throw "num1 is not a number";
    if(num2 == undefined && typeof num2 !== "number")
        throw "num2 is not a number";
    return num1 + num2;
};
exports.subtractTwoNumbers = (num1, num2) => {
    if(num1 == undefined && typeof num1 !== "number")
        throw "num1 is not a number";
    if(num2 == undefined && typeof num2 !== "number")
        throw "num2 is not a number";
    return num1 - num2; 
};
console.log(exports)
