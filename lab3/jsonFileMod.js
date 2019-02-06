const fs = require("fs");
let jsonFileMode = module.exports;
// console.log(jsonFileMode);

jsonFileMode.readJson = (fileName,callback) => {
    fs.readFile(fileName, callback);
    console.log("before calling back");

};
jsonFileMode.writeJson = (fileName,data,callback) => {
    console.log("before write");
    fs.writeFile(fileName, JSON.stringify(data,null,4), callback);
    console.log("after write, but exe before callback");
};
