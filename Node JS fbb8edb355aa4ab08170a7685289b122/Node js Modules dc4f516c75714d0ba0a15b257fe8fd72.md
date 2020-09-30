# Node.js Modules

# What is a module in Node.js?

Same as JavaScript libraries.

A set of functions you want to include in your application.

# Built-in Modules

Node.js has a set of built in modules which you can use without any further installation.

# Create your own Modules

You can create your own modules and easily include them in your applications.

### Example:

```jsx
exports.myDataTime = () => {
    return Date();
};
```

# Include your Own Module

Now you can include and use the module in any of your Node.js file

```jsx
const http = require('http');

// Importing our module
const date = require('./modulesExportExample');

const server = http.createServer((req,res)=>
{
    res.writeHead(200,{'Content_Type':'text/html'});
    res.write('The Date and time are currently'+date.myDataTime());
    res.end();
});

server.listen(8080);
```