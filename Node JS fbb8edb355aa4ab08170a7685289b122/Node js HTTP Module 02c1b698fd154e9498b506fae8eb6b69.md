# Node.js HTTP Module

Node.js has a build-in module called HTTP,  which allows Node.js to transfer data over the Hyper Text Transfer Protocol(HTTP).

To include the HTTP module, use the **require()** method.

```jsx
const http = require('http');
```

# Node.js as a Web Server

The HTTP module can create an HTTP server that listen to server ports and gives a response back to the client.

Use the createServer() method to create a server:

```jsx
const http = require('http');
const server = http.createServer((req,res) =>
{
	res.write('Hello World');
	res.end();
});

server.listen(8080);
```

# Add an HTTP Header

If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type.

```jsx
// Importing HTTP module
const http = require('http');

// Creating a server
const server = http.createServer((req,res)=>
{
    // Add an HTTP header
    res.writeHead(200,{'Content_Type':'text/html'});
    res.write("Hello World");
    res.end();
});

server.listen(8080);
```

The first argument of the res.writeHead() method is the status code,200 means that all is ok,the second argument is an object containing the response headers.

# Read the Query String

The function passed into the http.createServer() has a req argument that represents the request from the client as an object.

This object has a property url.

```jsx
/ Importing HTTP module
const http = require('http');

// Creating a server
const server = http.createServer((req,res)=>
{
    // Add an HTTP header
    res.writeHead(200,{'Content_Type':'text/html'});
    res.write(req.url);
    res.end();
});

server.listen(8080);
```