import React from "react";

function App() {

  const names = ["Anand", "Rohit", "Amit", "Sneha", "Ajay"];

  return (
    <div style={{ padding: "30px" }}>
      <h2>Names Starting with A</h2>

      <ul>
        {names
          .filter(name => name.startsWith("A"))
          .map((name, index) => (
            <li key={index}>{name}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;