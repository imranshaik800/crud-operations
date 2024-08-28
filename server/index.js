const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const UserModel = require("./model/User")



const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")
.then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log("Failed to connect MongoDB")
})

app.post("/Addusers",(req,res)=>{
    
    UserModel.create(req.body)
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        res.json(err)
    })
})

app.get("/UpdateUsers/:id",(req,res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id}) 
    .then((result) => {
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
})

app.put("/UpdateUsers/:id",(req,res)=>{
    const id = req.params.id;
    const updateData = req.body 
    UserModel.findByIdAndUpdate(id,updateData)
    .then((result) => {
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })

})
app.get("/",(req,res)=>{
    UserModel.find({})
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        res.json(err)
    })
})

app.delete("/Deleteuser/:id",(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
})
app.listen(3001,()=>{
    console.log("server is running at 3000")
})
