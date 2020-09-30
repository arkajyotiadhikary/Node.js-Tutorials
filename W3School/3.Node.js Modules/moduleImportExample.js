const http = require('http');
const date = require('./modulesExportExample');


const server = http.createServer((req,res)=>
{
    res.writeHead(200,{'Content_Type':'text/html'});
    res.write('The Date and time are currently'+date.myDataTime());
    res.end();
});

server.listen(8080);
