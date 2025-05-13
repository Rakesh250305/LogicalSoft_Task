const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const customerModel = require('./models/Customer.js');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/Customers'); 

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  customerModel.findOne({email:email , password:password})  
  .then(user =>{
    if(user){
        if(user.password === password){
            res.json("success");
        }else{
            res.json("Invalid Password");
        }
    }else{
        res.json("User not found");
    }
  })
})

app.post('/signup', (req, res) => {
    customerModel.create(req.body)
        .then(customer =>{
            console.log(customer);
            res.json(customer);
        })
        .catch(err =>{
            res.json(err);
        })
})

app.listen(3001, ()=>{
    console.log("server is running");
})