const fs = require('fs');


fs.writeFile('mynewfile3','Hello Arka!',(err)=>
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