import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Users = () => {
  const [user, setUser] = useState([
    {
      name: "Sagar",
      email: "sagar@gmail.com",
      age: 20
    }
  ]);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-40 bg-white rounded p-3">
        <Link to="/createUser" className="btn btn-success">Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {user.map((u) => {
              return (
                <tr>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.age}</td>
                  <td>
                    <Link to="/UpdateUser" className="btn btn-primary">Edit</Link>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
