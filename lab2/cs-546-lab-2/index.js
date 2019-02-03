const arrayUtils = require("./arrayUtils");
const stringUtils = require("./stringUtils");
const objUtils = require("./objUtils");
try {
    let headOne = arrayUtils.head([2, 3, 4]);
    console.log('arrayUtils.head([2, 3, 4]\npassed successfully');
    console.log("result: " + headOne);
} catch (e) {
    console.error('failed test case');
}
try {
    let headTwo = arrayUtils.head(1234);
    console.error('head did not error');
} catch (e) {
    console.log('arrayUtils.head(1234)\nfailed successfully\n');
}

try {
    let capResult = stringUtils.capitalize("04?a B c D e F G , H i J K LMN");
    console.log('stringUtils.capitalize("04?a B c D e F G , H i J K LMN")\npassed successfully');
    console.log("result: " + capResult);
} catch (e) {
    console.error('failed test case');
}
try {
    let result = stringUtils.capitalize([1,2,3]);
    console.error('head did not error');
} catch (e) {
    console.log('stringUtils.capitalize([1,2,3]))\nfailed successfully\n');
}

try {
    let result = stringUtils.countChars("It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.");
    console.log('stringUtils.countChars("It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.")\npassed successfully');
    console.log(result);
} catch (e) {
    console.error('failed test case');
}
try {
    let result = stringUtils.countChars(undefined);
    console.error('head did not error');
} catch (e) {
    console.log('stringUtils.countChars(undefined)\n failed successfully\n');
}

try {
    console.log("test as extend example");
    const first = { x: 2, y: 3};
    const second = { a: 70, x: 4, z: 5 };
    const third = { x: 0, y: 9, q: 10 };
    const firstSecondThird = objUtils.extend(first, second, third);
    // { x: 2, y: 3, a: 70, z: 5, q: 10 }
    const secondThird = objUtils.extend(second, third);
    // { a: 70, x: 4, z: 5, y: 9, q: 10 } 
    const thirdFirstSecond = objUtils.extend(third, first, second);
    // { x: 0, y: 9, q: 10, a: 70, z: 5 }
    console.log('objUtils.extend passed successfully');
    console.log(firstSecondThird, secondThird, thirdFirstSecond);
} catch (e) {
    console.error('failed test case');
}
try {
    let result = objUtils.extend("not an obj");
    console.error('head did not error');
} catch (e) {
    console.log('objUtils.extend(\"not an obj\")\nfailed successfully\n');
}
