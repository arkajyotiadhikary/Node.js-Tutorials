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