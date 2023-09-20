const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Read data from the text file
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
});