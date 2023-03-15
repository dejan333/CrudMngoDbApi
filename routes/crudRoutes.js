const express = require('express')
const Crud = require('../models/crud')
const app = express();

app.route('/crud')
  .get(async (req,res)=>{
    const crud = await Crud.find();

    try{
      res.send(crud)
    }catch(err){
      res.status(500).send(err)
    }
  })
  .post(async (req,res) => {
    const crud = new Crud(req.body)
    console.log(req.body);
    try{
      await crud.save()
      res.send(crud);
    }catch(err) {
      res.status(500).send(err);
    }
  })
 
app.route('/crud/:id')
.patch(async (req,res)=>{
  try{
    await Crud.findByIdAndUpdate(req.params.id, req.body);
   
    res.send("success")
  }catch(err){console.log(err)}
}) 
.delete(async (req,res) => {
  try{
    await Crud.findByIdAndDelete(req.params.id)
    res.send("successfuly deleted")
  }catch(err){res.send(err)}
}) 


  module.exports = app;