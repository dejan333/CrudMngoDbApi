const express = require('express')
const Crud = require('../models/crud')
const app = express();

app.route('/crud')
//Read ALl
  .get(async (req,res)=>{
    const crud = await Crud.find();

    try{
      res.send(crud)
    }catch(err){
      res.status(500).send(err)
    }
  })
  //Create 
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
 //By Id
app.route('/crud/:id')
//Find by Id
.get(async (req,res) => {

  try {
    const crud = await Crud.findById(req.params.id)
    res.send(crud)
  } catch (error) {
    console.log(err);
  }
})
//Update by id
.patch(async (req,res)=>{
  try{
    await Crud.findByIdAndUpdate(req.params.id, req.body);
   
    res.send("success")
  }catch(err){console.log(err)}
}) 
//Delete by id
.delete(async (req,res) => {
  try{
    await Crud.findByIdAndDelete(req.params.id)
    res.send("successfuly deleted")
  }catch(err){res.send(err)}
}) 


  module.exports = app;