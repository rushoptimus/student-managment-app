import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './result.css'
function Results() {
  const [results, setResults] = useState({ Pass: [], Fail: [] });

  useEffect(() => {
    // Fetch the results from the server
    axios.get('http://localhost:3000/results')
      .then(response => {
        const passStudents = response.data.find(r => r._id === 'Pass');
        const failStudents = response.data.find(r => r._id === 'Fail');
        
        setResults({
          Pass: passStudents ? passStudents.students : [],
          Fail: failStudents ? failStudents.students : []
        });
      })
      .catch(error => {
        console.error("Error fetching results:", error);
      });
  }, []);

  return (
    <div className="results-container">
      <h1>Student Results</h1>
      
      {/* Pass Section */}
      <div className="table-section pass">
        <h2>Passed Students</h2>
        {results.Pass.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {results.Pass.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td  style={{backgroundColor: "#f9f9f9"}}>{student.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="empty-message">No students passed.</p>
        )}
      </div>

      {/* Fail Section */}
      <div className="table-section fail">
        <h2>Failed Students</h2>
        {results.Fail.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody >
              {results.Fail.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td style={{backgroundColor: "#f9f9f9"}}>{student.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="empty-message">No students failed.</p>
        )}
      </div>
    </div>
  );
}

export default Results;
