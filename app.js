const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const colors = require('colors')
const router = require('./routes/crudRoutes')

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

//MongoDb Connection
try {
  mongoose.connect('mongodb://127.0.0.1:27017/CRUD')
  console.log('Successfully connected to DB' .brightYellow);
}
 catch(error){
  console.error(error);
 }
 
 //Routes
 app.use(router);

 app.listen(3000, console.log('Server running'.bold))