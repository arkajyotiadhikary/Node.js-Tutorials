const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    fs.readFile('demofile1.html',(err,data)=>
    {
        res.writeHead(200,{'Content_Type':'text/html'});
        
        if(!err)
        {
            res.write(data);
        }
        else
        {
            console.log(err.message);
        }

        res.end();
    });
});

server.listen(8080);