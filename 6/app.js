const fs = require('fs');
//try running each function separately by commenting others

//function1
fs.mkdir("test",function (err) {
console.log("Directory created successfully!");
});

//function2
fs.open('test/demo.txt', 'w+', function (err) {
    console.log('Saved!');
});

//function3
fs.unlink('test/demo.txt',function (err) {
console.log("File deleted!");
});

//function4
fs.rmdir('test',function (err) {
console.log("Directed deleted");
});

//function5
fs.rename('abc.txt','def.txt',function (err) {
if (err) {
console.log(err);
}
});

//function6
fs.exists('check.txt', (file) => {
  if(file){
    console.log('File Found');
  }
  else{
    console.log('File Not Found');
  }
});

