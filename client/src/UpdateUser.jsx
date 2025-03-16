import React from 'react'

export const UpdateUser = () => {
  return (
    <div className="d-flex bg-primary vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder='Enter Name' className="form-control" onChange={(e)=>{console.log(e.target.value)}}/>
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder='Enter Email' className="form-control" />
          </div>
          <div className="mb-2">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" placeholder='Enter Age' className="form-control" />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  )
}
