let myObj = {
    hello: "world",
    num : 1,
    bool : true,
    myFn : () => {
        return "Hello!"; 
    }
};
console.log(myObj);
myObj["newKey"] = "I am a new key!";
myObj.directlyAddedKey = "I have been added!";

let keyName = "myStrKey";
myObj[keyName] = "this was made dynamically";
myObj.hello = "hello world";
console.log(myObj);

console.log(myObj.myFn());
