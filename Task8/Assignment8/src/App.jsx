
import './App.css'
import React from "react";
import Person from "./Components/Person";
import Product from "./Components/Product";

function App() {
  return (
    <div>
      <Person name="Ankit's" age={20} />
      <Product name="Sheos" price="$699" />

      <Person name="Ayush" age={23} />
      <Product name="Chapal" price="$1200" />
      
    </div>
  );
}

export default App;