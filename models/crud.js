const mongoose = require('mongoose')

const crudSchema = new mongoose.Schema({
  title:{
    type: String,
    trim:true,
    lowercase:true
  },
  content:String
})

module.exports =new mongoose.model('Crud', crudSchema);