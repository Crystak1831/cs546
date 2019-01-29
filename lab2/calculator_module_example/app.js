function addTwoNumbers(num1, num2) {
    if(num1 == undefined && typeof num1 !== "number")
        throw "num1 is not a number";
    if(num2 == undefined && typeof num2 !== "number")
        throw "num2 is not a number";
    return num1 + num2;
}
function divideTwoNumbers(num1, num2) {
    if(num1 == undefined && typeof num1 !== "number")
        throw "num1 is not a number";
    if(num2 == undefined && typeof num2 !== "number")
        throw "num2 is not a number";
    if(num2 === 0)
        throw `divided num cannot be zero`;
    return num1 / num2;
}
function mulTwoNumbers(num1, num2) {
    if(num1 == undefined && typeof num1 !== "number")
        throw "num1 is not a number";
    if(num2 == undefined && typeof num2 !== "number")
        throw "num2 is not a number";
    return num1 * num2;
}
function sustractTwoNumbers(num1, num2) {
    if(num1 == undefined && typeof num1 !== "number")
        throw "num1 is not a number";
    if(num2 == undefined && typeof num2 !== "number")
        throw "num2 is not a number";
    return num1 - num2; 
}
// let addTenAndTwelve = addTwoNumbers(10, 12);
// console.log(`the result is ${addTenAndTwelve}`);
// let division = divideTwoNumbers(420,20);
// console.log(`the result is ${division}`);
const calculator = require("./calculator");
console.log(calculator.description);
let addTenAndTwelve = calculator.addTwoNumbers(10, 12);
console.log(`the result is ${addTenAndTwelve}`);
let division = calculator.divideTwoNumbers(420,20);
console.log(`the result is ${division}`);
