import React from "react";
import "./App.css";
import styles from "./App.module.css";

function App() {

  return (
    <div style={{ padding: "30px" }}>

      <h2>React CSS Styling Methods</h2>

      {/* 1. Inline Styling */}
      <h3 style={{ color: "blue", backgroundColor: "lightgray" }}>
        Inline Styling Example
      </h3>

      {/* 2. CSS Stylesheet */}
      <h3 className="heading">
        Stylesheet CSS Example
      </h3>

      {/* 3. CSS Modules */}
      <h3 className={styles.title}>
        CSS Module Example
      </h3>

      <button className="btn">Click Me</button>

    </div>
  );
}

export default App;