const fs = require("fs");
const jsonFileMode = require("./jsonFileMod");
let vowels = /[a,e,i,o,u]/i;
let testString = "hello, world";
let names = [];

let jsonFileResult = jsonFileMode.readJson("the-c-team.json");
jsonFileResult.then((data) =>{
    console.log("success");
    console.log(data);
}).catch((err) =>{
    console.error("there was an error prasing the original file");
})

// console.log("Before readFile");
// jsonFileMode.readJson("the-c-team.json", (err, data) =>{
//     if(err)
//         throw err;
//     console.log("start calling back");
//     // console.log(data);
//     var asObject = JSON.parse(data);
//     asObject.forEach((persionName) =>{
//         names.push(persionName.name);
//     });
//     // console.log(typeof asObject);
//     // console.log(asObject[0]);
//     // for(let i = 0; i < names.length; ++i){
//     //     console.log(names[i]);
//     // }
//     for(let i = 0; i < names.length; ++i){
//         temp = names[i];
//         let numVowelsInNames = 0;
//         for(let i = 0; i < temp.length; ++i){
//             if(vowels.test(temp[i]))
//                 ++numVowelsInNames;
//         }
//         console.log(`The ${names[i]} has ${numVowelsInNames} vowels in it`);
//     }
//     jsonFileMode.writeJson("myWrite", names, (err, data) => {
//         if(err) throw err;
//         console.log("writing");
//         // fs.writeFile("myWrite",names,data);
//         jsonFileMode.readJson("myWrite", (err,data) => {
//             // console.log("do sth before read\n data:");
//             // fs.readFile("myWrite","utf-8",(err,data) =>{
//             //     console.log(data);
//             // });
//         });
//     });
// });

// console.log("After readFile");
