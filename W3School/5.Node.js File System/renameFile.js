const fs = require('fs');

fs.rename('mynewfile2','myrenamedfile2',(err)=>
{
    if(err)
    {
        throw err;
    }
    else
    {
        console.log("File renamed!");
    }
});