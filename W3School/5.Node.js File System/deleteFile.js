const fs = require('fs');

fs.unlink('mynewfile.txt',(err)=>{
    if(err)
    {
        throw err;
    }
    else
    {
        console.log('File has been deleted!');
    }
});