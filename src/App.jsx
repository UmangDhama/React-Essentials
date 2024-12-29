import CoreConcepts from "./components/CoreConcepts.jsx";
import React from "react";


import Header from "./components/Header.jsx";
import Example from "./components/Examples.jsx";



function App() {
    
  return (
    <div>
      <Header />
      <main>
       <CoreConcepts />
       <Example />
      </main>
    </div>
  );
}

export default App;
