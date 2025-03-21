import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Users = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getAllUsers")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log("error is", err);
      });
  }, []);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-40 bg-white rounded p-3">
        <Link to="/createUser" className="btn btn-success">
          Add +
        </Link>
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
            {user.map((u, id) => {
              return (
                <tr key={id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.age}</td>
                  <td>
                    <Link to="/UpdateUser" className="btn btn-primary">
                      Edit
                    </Link>
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
