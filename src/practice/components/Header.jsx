// Create Title and Subtitle as separate functional components and use them inside Header.

import React from "react";


function Title() {
    return <h1>My React App</h1>;
  }
  
  function Subtitle() {
    return <h3>Learning functional components</h3>;
  }
  
  function Header() {
    return (
      <header>
        <Title />
        <Subtitle />
      </header>
    );
  }
  
  export default function App() {
    return <Header />;
  }
  