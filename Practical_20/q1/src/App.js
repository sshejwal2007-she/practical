import React from "react";

function App() {

  const students = ["Rahul", "Anand", "Priya", "Sneha"];

  return (
    <div style={{ padding: "30px" }}>
      <h2>Student List</h2>

      <h3>Without Key</h3>
      <ul>
        {students.map((student) => (
          <li>{student}</li>
        ))}
      </ul>

      <h3>With Key</h3>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;