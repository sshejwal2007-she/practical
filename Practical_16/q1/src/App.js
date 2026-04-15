import React from "react";

function Child(props) {
  return (
    <button onClick={() => props.greet("Student")}>
      Click
    </button>
  );
}

function App() {

  function show(name) {
    alert("Hello " + name);
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>Passing Function Example</h2>
      <Child greet={show} />
    </div>
  );
}

export default App;