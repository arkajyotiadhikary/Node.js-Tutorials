# Node.js File System

# Node.js as a File Server

The Node.js file system module allows you to work with the file system on your computer.

Common uses for the file System module:

- Read files
- Create files
- Update files
- Delete files
- Rename files

## Read Files

The fs.readFile() method is used to read files on your computer.

HTML file

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>My Header</h1>
    <p>My Paragraph</p>
</body>
</html>
```

Node.js File

```jsx
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
```

# Create Files

The file system module has method for creating new files.

- fs.appendFile()
- fs.open()
- fs.writeFile()

The **fs.appendFile()** method appends specified content to a file. If the file does not exist , the file will be created:

### Example

```jsx
const fs = require('fs');

fs.appendFile('mynewfile.txt','Hello Content !',(err)=>
{
    if(err)
    {
        throw err;
    }
    else
    {
        console.log('Saved!');
    }
});
```

The **fs.open()** method takes a "flag" as the second argument ,if the flag is "w" for "writing",the specified  file is opened for writing. If the file does not exist, an empty file is created.

### Example

```jsx
const fs = require('fs');

fs.open('mynewfile2','w',(err,file)=>
{
    if(err)
    {
        throw err;
    }
    else
    {
        console.log("Saved!");
    }
});
```