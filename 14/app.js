const fs = require('fs');

// Create a readable stream
const readableStream = fs.createReadStream('input.txt');

// Set the encoding of the stream
readableStream.setEncoding('utf8');

// Event handler for 'data' event
readableStream.on('data', (chunk) => {
  // Process the data chunk
  console.log(chunk);
});

// Event handler for 'end' event
readableStream.on('end', () => {
  console.log('End of stream');
});

// Event handler for 'error' event
readableStream.on('error', (error) => {
  console.error('Error:', error);
});