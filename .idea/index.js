//console.log("hello");
//let express;
const express = require('express');
//const http=require('ex');
var exp=express();

exp.get('/' ,(req,res)=>
    {
        res.send("new line added");

        //res.send("checking");
       // res.writeHead(200,<text/html>);
        //res.send('hello');

       res.end();
    });
exp.listen(3000,() =>
{
    console.log('listening');
})
