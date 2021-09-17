const file = require("file");
file.readFile("Jsonfile.json",(err,Jsonfile) => {
    if(err){
        console.log("Error in reading from folder",err);
        return;
    }