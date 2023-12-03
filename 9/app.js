var os = require('os');

// Function 1: Get the platform of the operating system
console.log("Platform: " + os.platform());

// Function 2: Get the architecture of the operating system
console.log("Architecture: " + os.arch());

// Function 3: Get the hostname of the operating system
console.log("Hostname: " + os.hostname());

// Function 4: Get the temporary directory for the system
console.log("Temporary directory for system is " + os.tmpdir());

// Function 5: Get the total system memory
console.log("Total system memory is " + os.totalmem());

// Function 6: Get the user information
console.log(os.userInfo());

// Function 7: Get the free system memory
console.log('Free System Memory (bytes):', os.freemem());