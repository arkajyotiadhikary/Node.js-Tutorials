// Importing HTTP module
const http = require('http');
const url = require('url')

// Creating a server
const server = http.createServer((req,res)=>
{
    // Add an HTTP header
    res.writeHead(200,{'Content_Type':'text/html'});

    const q = url.parse(req.url,true).query;
    const text = q.year+" "+q.month;

    res.end(text);
});

server.listen(8080);