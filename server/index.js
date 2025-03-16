const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const connectionString = 'mongodb://localhost:27017/employee'

app.use(cors());
app.use(express.json());

//Defining Schema
const employeeSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number
})
//Defining Model 
const employeeModel = mongoose.model('employees', employeeSchema)

// Mongodb connection
mongoose.connect(connectionString)

//Routes
app.post('/addEmployee', async (req,res) => {
    const data = req.body;
    const newEmployee = new employeeModel(data);
    await newEmployee.save();
    res.send(newEmployee)
    .then((res) => {
        console.log('response : ', res);
    })
    .catch((err) => {
        console.log('error : ', err);
    })      
})




app.listen(port, () => {console.log(`Server is running on port ${port}`)});
