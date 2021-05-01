const express = require('express');
var mysql = require('mysql');
const app = express();

var connection = mysql.createConnection({

    host: 'localhost',
    user:'root',
    password:'',
    database: 'senthil'
})

connection.connect(function(error)
{
    if(!!error)
    {
        console.log(error);
    }
    else{
        console.log("connected");
    }
})
app.set("view engine", "ejs");

app.get('/',(req,res)=>{
    res.render("index");
});

app.post('/uploads',(req,res)=>{
    
        console.log(req.body.results);
})

app.listen(5000,()=>{
    console.log("server connected to 5000");
  });