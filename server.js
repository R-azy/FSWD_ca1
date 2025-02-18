const express = require('express');

const app  = express();
app.use(express.json())
app.post('/signup',(req,res)=>{
    const {name,email,password}= req.body;
    if(!email){
        res.status(400).json({message:"Email cannot be empty"});
    }
    if(password.length<8 || password.length>16){
        res.status(400).json({message:"Password length should be greater than 8 or less than or equal to 16"})
    }  
    res.status(201).json({message:"User created"});
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})