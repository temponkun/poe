const net = require('net');

// Function 1: Creating a TCP server
const server = net.createServer((socket) => {
  console.log('Client connected');

  // Function 2: Handling data received from the client
  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);
  });

  // Function 3: Handling client connection termination
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Function 4: Starting the TCP server and listening on a specific port
server.listen(3000, 'localhost', () => {
  console.log('Server started and listening on port 3000');
});

// Function 5: Checking if a given IP address is a valid IPv4 or IPv6 address
const ipAddress = '192.168.0.1';
const isIpAddressValid = net.isIP(ipAddress);
console.log(`Is ${ipAddress} a valid IP address? ${isIpAddressValid}`);