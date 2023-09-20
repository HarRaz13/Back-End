# Fetching a file using node.js
This is a project description in which we will fetch a file and display it's content using node.js. 

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Code](#code)
- [Learning Outcomes](#learning-outcomes)

## Features

Here are some of the features of the project.

- Single Threaded - Node.js is based on Single Threaded Event Loop Model which can handle multiple client requests.
- Asynchronous - Node.js operates on non blocking method meaning when the server makes a request to a database or api, it does not wait for the response and gets on executing the next request.
- Event Driven - Node provides a module called “Event” which consists of an “EventEmitter” class that allows us to implement event-driven programming.
- Open Source - Node.js is open-source, which means it is free to use.
- Performance - Node works on Google Chrome’s V8 JavaScript engine which enables faster code execution.
- Highly Scalable - Node.js applications are highly scalable as they operate asynchronously (non-blocking).

## Installation
1. Download node.js   https://nodejs.org/en/download
2. Verify the installation
   ```bash
     node -v
   ```

## Code
```bash
  fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end('Internal Server Error');
  } else {
  // Display data on the webpage
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
  <html>
  <head>
  <title>Display Data</title>
  <style>
  body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  }
  .container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }
  Name - Harish Haridas UID - 22MCA20040
  h1 {
  color: #333;
  }
  pre {
  white-space: pre-wrap;
  font-size: 16px;
  line-height: 1.4;
  color: #555;
  }
  </style>
  </head>
  <body>
  <div class="container">
  <h1>Data Details</h1>
  <pre>${data}</pre>
  </div>
  </body>
  </html>
  `);
  }
  });
  } else {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Page not found');
  }
  });
  const port = 8080;
  server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  })
```

## Learning Outcomes
- Able to learn the concepts of Node.js.
- Able to learn different concepts of server side development.
