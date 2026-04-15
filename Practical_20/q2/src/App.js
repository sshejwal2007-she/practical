import React, { useState } from "react";

function App() {

  const [students, setStudents] = useState([
    "Amit",
    "Riya",
    "Neha",
    "Karan"
  ]);

  const deleteStudent = (index) => {
    const newList = students.filter((_, i) => i !== index);
    setStudents(newList);
  };

  const updateStudent = (index) => {
    const newList = [...students];
    newList[index] = "Updated Name";
    setStudents(newList);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Update & Delete List Items</h2>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}

            <button style={{marginLeft:"10px"}} onClick={() => updateStudent(index)}>
              Update
            </button>
          

            <button style={{margin:"10px"}} onClick={() => deleteStudent(index)}>
              Delete
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;