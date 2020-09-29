const express = require('express');
const bodyParser = require('body-parser');
const jade = require('jade');
const errorHandeler = require('errorhandler');
const json = require('json');
const nano = require('nano')('http://localhost:5948');
const logger = require('logger');
const serveFavicon = require('serve-favicon');
const url = require('url');
const routes =  require('./routes');
const http = require('http');
const path = require('path');
const methodOverride = require('method-override');

const db = nano.use("address");

const app = express();

app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine',jade);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());
app.use(express.static(path.join(__dirname,"public")));

app.get('/',routes.index);

app.post('/creatdb',(req,res) =>
{
    nano.db.create(req.body.dbname,(err)=>
    {
        if(err)
        {
            res.send("Error creating database" + req.body.dbname);
            return;
        }

        res.send('Database '+req.body.dbname+"created successfully");
    });
});

app.post('/new_contex',(req,res)=>
{
    const name = req.body.name;
    const phone = req.body.phone;

    db.insert({name:name,phone:phone,crazy:true},phone,(err,body,header)=>
        {

        })
})