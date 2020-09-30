const http = require('http');
const url = require('url');
const fs = require('fs');


const server = http.createServer((req,res)=>
{
    const q = url.parse(req.url,true);
    const filename ="." + q.pathname;

    fs.readFile(filename,(err,data)=>
    {
        if(err)
        {
            res.writeHead(404,{'Content_Type':'text/html'});
            return res.end('404 not found');
        }
        else
        {
            res.writeHead(200,{'Content_Type':'text/html'});
            res.write(data);
            res.end();
        }
    });
});

server.listen(8080);