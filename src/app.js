const express = require('express');

const app = express();

const { AdminAuth, UserAuth } = require('./middleware/auth')

// app.use("/", (req,res)=>{
//     res.send("handling /route");
// });

// handle midlleware for all admin , user requests GET, POST, DELETE, PATCH, PUT for authorization


app.use("/user/data", UserAuth, (req,res)=>{
    res.send("User Data Sent!");
} );

app.post("/user/login", (req,res)=>{
    res.send("User Login was Successfull!");
}); 

app.get("/admin/getAllData", (req,res)=>{
    console.log("Admin Authorized");
    res.send("Sent Admin Data!")
}

);

app.use("/admin", AdminAuth );
app.get("/admin/getDeletedUser", (req,res)=>{
    
        console.log("Admin Authorized");
        res.send("User Data Deleted")
    }
    );

// create webserver on port 3000 to listen request
app.listen(3000, ()=>{ console.log('server is successfully running on port 3000...')});

