import React from "react";

function Child(props) {
  return (
    <button onClick={() => props.greet("Anand", 101)}>
      Click Me
    </button>
  );
}

function App() {

  function showDetails(name, roll) {
    alert("Name: " + name + "\nRoll No: " + roll);
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>Multiple Arguments Example</h2>
      <Child greet={showDetails} />
    </div>
  );
}

export default App;