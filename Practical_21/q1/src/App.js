import React from "react";

function App() {

  const subjects = ["English", "Maths", "Science", "History"];

  return (
    <div style={{ padding: "30px" }}>
      <h2>Subject List</h2>

      <ul>
        {subjects.map((sub, index) => (
          <li key={index}>
            {index + 1}. {sub}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;