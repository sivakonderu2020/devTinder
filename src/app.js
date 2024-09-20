// Import Express module from NPM
 const express = require('express');
// create instance of application
const app = express();

// create webserver on port 3000 to listen request
app.listen(3000, ()=>{ console.log('server is successfully running on port 3000...')});

// Request handler

app.use("/",(res,response)=>{
    response.send('Welocme To Home Page');
});

app.use("/test",(res,response)=>{
    response.send('Hello from Server');
});

app.use("/welcome",(res,response)=>{
    response.send('Hello Hello Hello!!!');
});