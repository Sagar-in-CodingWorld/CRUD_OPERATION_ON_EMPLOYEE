const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const {employeeModel} = require('./models/employeeModel')

const connectionString = 'mongodb://localhost:27017/employee'

app.use(cors());
app.use(express.json());



// Mongodb connection
mongoose.connect(connectionString)

//Routes
app.post('/addEmployee', async (req,res) => {
    try{
        const data = req.body;
        const newEmployee = new employeeModel(data);
        await newEmployee.save();
        res.send(newEmployee);
        console.log('response : ', newEmployee);
    }
    catch(err){
        console.log('error is ', err);
        res.status(500).send(err);
    }   
})
app.get('/getAllUsers', async (req,res) => {
    try{
        const allEmployees = await employeeModel.find();
        res.send(allEmployees)
    }catch(err){
        console.log('error is ', err)
    }
})




app.listen(port, () => {console.log(`Server is running on port ${port}`)});
