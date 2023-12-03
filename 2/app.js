const fs = require('fs');
fs.readFile('test.txt','utf8',function (err,data) {
console.log(data);
});
//var data = fs.readFileSync('test.txt');
//console.log(data.toString());