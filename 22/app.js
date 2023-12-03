const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // 1. Get the HTTP method of the request
  const method = req.method;
  console.log(`HTTP method: ${method}`);

  // 2. Get the URL of the request
  const url = req.url;
  console.log(`URL: ${url}`);

  // 3. Get the headers of the request
  const headers = req.headers;
  console.log(`Headers: ${JSON.stringify(headers)}`);

  // 4. Get the query parameters of the request
  const queryParams = req.query;
  console.log(`Query parameters: ${JSON.stringify(queryParams)}`);

  // 5. Get the body of the request (assuming it's a JSON payload)
  const body = req.body;
  console.log(`Body: ${JSON.stringify(body)}`);

  // Send a response to the client
  res.send('Hello from Express!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
