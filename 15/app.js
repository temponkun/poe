const fs = require('fs');

// Create a writable stream
const writeStream = fs.createWriteStream('output.txt');

// Write data into the stream
writeStream.write('Hello, world!\n');
writeStream.write('This is a sample text.');

// End the stream
writeStream.end();

// Handle stream events
writeStream.on('finish', () => {
  console.log('Data has been written to the file.');
});

writeStream.on('error', (err) => {
  console.error('Error writing data:', err);
});
