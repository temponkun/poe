http.createServer(function (_, res) {
    //res.write('<html><body><h1>Hello</h1></body></html>');	
    res.write('Hello');
    res.end(); 
}).listen(5000);

console.log('Server running at 5000');

