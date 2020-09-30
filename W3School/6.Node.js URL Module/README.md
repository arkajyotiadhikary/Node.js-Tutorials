# Node.js URL Module

# The Built-in URL Module

The URL module splits up a web address into readable parts.

Parse an address with the **url.parse()** method, and it will return a URL object with each part of the address as properties.

### Example

```jsx
const url = require('url');

const adr 
= 'http//localhost:8080/default.htm?year=2017&month=february';

const q = url.parse(adr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

const qdata = q.query;

console.log(qdata.month);
console.log(qdata.year);
```

### Node.js File Server

- Create two HTML files and save them in the same folder as your Node.js files.

summer.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Summer</h1>
    <p>I love the Sun!</p>
</body>
</html>
```

winter.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Winter</h1>
    <p>I love the snow!</p>
</body>
</html>
```

Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:

server.js file

```jsx
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
```
