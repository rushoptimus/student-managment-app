import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './new.css'

function Edit() {
    const { id } = useParams();  // Get the 'id' from the URL
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [result, setResult] = useState(''); 
    const navigate = useNavigate();

    // Fetch the student data when the component mounts
    useEffect(() => {
        axios.get(`http://localhost:3000/students/${id}`)
            .then(response => {
                const student = response.data;
                setName(student.name);
                setEmail(student.email);
                setAge(student.age);
                setResult(student.result);
            })
            .catch(error => {
                console.error("Error fetching student data:", error);
            });
    }, [id]);

    // Handle form submission to update the student
    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedStudent = { name, email, age , result };

        // Send the PUT request to update the student
        axios.put(`http://localhost:3000/students/${id}`, updatedStudent)
            .then(response => {
                console.log("Student updated:", response.data);
                navigate("/Students"); // Navigate back to the list of students or another page
            })
            .catch(error => {
                console.error("Error updating student:", error);
                alert("Error updating student. Please try again.");
            });
    };

    return (
        <div className="form-container">
            <h1>Edit Student</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter student's name"
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter student's email"
                    />
                </div>
                <div>
                    <label>Age</label>
                    <input
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter student's age"
                    />
                </div>

                <div>
                    <label>Result</label> 
                    <select
                        value={result}
                        onChange={(e) => setResult(e.target.value)}
                    >
                        <option value="Pass">Pass</option>
                        <option value="Fail">Fail</option>
                    </select>
                </div>

                <button type="submit">Update Student</button>
            </form>
        </div>
    );
}

export default Edit;
