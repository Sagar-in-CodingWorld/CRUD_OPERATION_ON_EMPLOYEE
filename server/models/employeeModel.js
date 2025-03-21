const mongoose = require('mongoose')
//Defining Schema
const employeeSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number
})
//Defining Model 
const employeeModel = mongoose.model('employees', employeeSchema)
module.exports = {employeeModel}    