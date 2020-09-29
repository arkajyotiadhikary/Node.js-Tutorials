const express = require('express');
const bodyParser = require('body-parser');
const fortunes = require('./Data/fortunes.json');

const app = express();

// get the fortune.
app.get('/fortunes',(req,res) => {
    res.json(fortunes);
});

// Get random fortunes from the fortune json file. 
app.get('/fortunes/random',(req,res) =>{
    res.json(fortunes[Math.floor(Math.random()*fortunes.length)]);
});

// get fortunes using the id.
app.get('/fortunes/:id',(req,res) => 
{
   res.json(fortunes.find(f => f.id == req.params.id));
});

app.use(bodyParser.json());

app.post('/fortunes',(req,res) => {
    console.log(req.body);

    const {message,lucky_number,spirit_animal} = req.body;
});

module.exports = app;