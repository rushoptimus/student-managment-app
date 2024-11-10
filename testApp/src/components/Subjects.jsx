import React from 'react';
import './Subjects.css'
function Subjects() {
  const subjects = [
    { index: 1, name: "HTML", minMarks: 30, maxMarks: 70 },
    { index: 2, name: "CSS", minMarks: 30, maxMarks: 70 },
    { index: 3, name: "JavaScript", minMarks: 30, maxMarks: 70 },
    { index: 4, name: "React", minMarks: 30, maxMarks: 70 },
    { index: 5, name: "Node.js", minMarks: 30, maxMarks: 70 },
    { index: 6, name: "Express", minMarks: 30, maxMarks: 70 },
    { index: 7, name: "MongoDB", minMarks: 30, maxMarks: 70 },
  ];

  return (
    <div className="subjects-container">
      <h1>Subject List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Subject Name</th>
            <th>Min Marks</th>
            <th>Max Marks</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.index}>
              <td>{subject.index}</td>
              <td>{subject.name}</td>
              <td>{subject.minMarks}</td>
              <td>{subject.maxMarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Subjects;
