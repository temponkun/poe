const fs = require("fs"); 

let directory_name = "dir"; 
let filenames = fs.readdirSync(directory_name); 
console.log("Contents in directory:"); 
filenames.forEach((file) => { 
	console.log(file); 
}); 
