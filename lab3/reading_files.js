const fs = require('fs');

fs.readFile("the-c-team.json", "utf-8",(err,data) => {
    if (err) throw err;
    console.log(data);
});
