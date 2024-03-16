//import express
const express = require('express');
//call the express class from the express module
const app = express();

//exporting the route file into the app.js 
const {router} = require('./routes/rts')
app.use((req, res,next)=>{
    next()
})

app.use((req, res, next)=>{
    next()
})
//to create a simple routes you can use "app.get('/', (req,res)=>{})"
//We use app.use to make use of the routes
app.use('/',router);
//create the server after calling the express class
app.listen(6000,function(){
    //do console.log to initiate the server
    console.log("Server Running")
})
//Create the routes file after this.