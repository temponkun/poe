var timt = "Time taken by warnc function";
//function1
console.log("Log function for displaying data");

//function2
console.error(new Error('New Error has happened')); 

//function3
console.time(timt);

//function4
function warnc(x) { 
    console.warn(`today is ${x} POE`); 
}  
const x = 'APL'; 
warnc(x); 

//function5
console.timeEnd(timt);

//function6
console.trace();


