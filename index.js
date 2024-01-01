const express=require('express');
const app=express();
const blog=require("./routes/blog");
const dbConnect=require("./config/database");

require("dotenv").config();

const PORT=process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1",blog);

app.listen(PORT,()=>{
    console.log("App is running on port "+PORT);
})

app.get("/",(req,res)=>{
    res.send("<h1>Home page of Blog App</h1>")
})

dbConnect();