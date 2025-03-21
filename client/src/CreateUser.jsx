import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form data : ', name, email, age);
    axios.post('http://localhost:3001/addEmployee', {name,email,age})
    .then((res) => {
      console.log('response : ', res);
    //Navigate to User list
      navigate('/');
    })
    .catch((err) => {
      console.log('error : ', err);
    })
  }
  return (
    <div className="d-flex bg-primary vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder='Enter Name' className="form-control" onChange={(e)=>{setName(e.target.value)}}/>
          </div>
          <div className="mb-2">                                                                                                      
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder='Enter Email' className="form-control" onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div className="mb-2">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" placeholder='Enter Age' className="form-control" onChange={(e)=>{setAge(e.target.value)}}/>
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  )
}
