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
