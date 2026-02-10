// Task 4 – Functional component with default props (JS way)
// Question:
// Create a Button component with a label prop that defaults to "Click" if not provided.

import React from "react";

function Button({ label = 'Click' }) {
    return <button>{label}</button>;
  }
  
  export default function FunCompDefProps() {
    return (
      <>
        <Button />
        <Button label="Submit" />
      </>
    );
  }
  