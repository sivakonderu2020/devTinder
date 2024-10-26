const express = require('express');

const app = express();

// app.use("/", (req,res)=>{
//     res.send("handling /route");
// });

app.get("/user", (req,res, next)=>{
next();
},
(req,res, next)=>{
    res.send("Response route handler 2!!");
    }
);

// create webserver on port 3000 to listen request
app.listen(3000, ()=>{ console.log('server is successfully running on port 3000...')});

