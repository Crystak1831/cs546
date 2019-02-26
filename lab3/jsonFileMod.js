const fs = require("fs");
let jsonFileMode = module.exports;
// console.log(jsonFileMode);

jsonFileMode.readJson = (fileName,callback) => {
    return new Promise((fulfill, reject) => {
        if(!fileName) throw "no file name";
        fs.readFile(fileName,"utf-8", (err, data) =>{
            if(err){
                reject(err);
                return;
            }
            try{
                let parse_data = JSON.parse(data);
                fulfill(parse_data);
            }catch(parsingErr){
                reject(parsingErr);
            }
        });
        console.log("before calling back");
    });
   

};
jsonFileMode.writeJson = (fileName,data,callback) => {
    console.log("before write");
    fs.writeFile(fileName, JSON.stringify(data,null,4), callback);
    console.log("after write, but exe before callback");
};
