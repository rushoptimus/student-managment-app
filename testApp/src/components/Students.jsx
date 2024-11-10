import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './student.css'
function Students() {
  const [data, SetStudent] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios.get('http://localhost:3000')
      .then(result => {
        SetStudent(result.data);
      })
      .catch(err => console.log(err));
  };

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:3000/students/${id}`)
      .then(() => {
        alert("Student deleted successfully");
        fetchStudents(); // Refresh the list after deletion
      })
      .catch(err => console.error("Error deleting student:", err));
  };

  
return (
  <div className="table-container">
      <h2 className='marginss'>Student List</h2>
      <Link to="/New" className="add-new-btn">ADD NEW Student</Link>
      <table>
          <thead>
              <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>User Name</th>
                  <th>Email ID</th>
                  <th>Result</th> 
                  <th className='red'>Age</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
        {data.map((student, index) => (
                  <tr key={student._id}>
                      <td>
                          <input type="checkbox" />
                      </td>
              <td>{index + 1}</td> {/* Display the index + 1 */}
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.result}</td>
              <td>{student.age}</td>
              <td className="action-buttons">
                <Link to={`/Edit/${student._id}`} className="edit-btn">Edit</Link>
                <button className="delete-btn" onClick={() => deleteStudent(student._id)}>Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;























