// Import Express module from NPM
 const express = require('express');
// create instance of application
const app = express();

// create webserver on port 3000 to listen request
app.listen(3000, ()=>{ console.log('server is successfully running on port 3000...')});

// Request handler

// app.use("/",(res,response)=>{
//     response.send('Welocme To Home Page');
// });

// app.use("/user",(res,response)=>{

//     response.send('HAHAHAAHAHHAHA');
// });

app.get("/user/:UserId/:password", (req,res)=>{
    console.log(req.params);
    res.send( { firstName:"Siva", lastName:"Konderu" });
})

app.post("/user", (req,res)=>{
    console.log("Save Data to Database");
    res.send( "Data Successfully saved to Database");
})

app.use("/test",(res,response)=>{
    response.send('Hello from Server');
});

app.use("/welcome",(res,response)=>{
    response.send('Hello Hello Hello!!!');
});