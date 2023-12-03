const fs = require('fs');
fs.writeFile('test.txt','abcdpoeee',function (err) {
if (err) {
return console.log(err);
}
console.log("Write operation done");
var data = fs.readFileSync('test.txt');
console.log("File data is "+data.toString());
});
