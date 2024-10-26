// Import Express module from NPM
const express = require('express');
// create instance of application
const app = express();

app.use("/user", (req, res, next)=>{

    // Routing handler
    console.log("Route Handler executed!!!");
    next();
    res.send("Route handler1");   
    
},
(req, res)=>{

    // Routing handler
    console.log("Route Handler2 executed!!!");
    res.send("Route handler2");   
},

)
// create webserver on port 3000 to listen request
app.listen(3000, ()=>{ console.log('server is successfully running on port 3000...')});