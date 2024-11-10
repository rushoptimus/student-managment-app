
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./new.css";

function New() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/New", { name, email, age, result})
      .then((result) => {
        console.log(result);
        navigate("/Students");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
      <h1>Add New Student</h1>
      <form onSubmit={Submit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="text"
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <label>Result</label> 
          <select value={result} onChange={(e) => setResult(e.target.value)}>
            <option value="">Select Result</option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </div>

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default New;
