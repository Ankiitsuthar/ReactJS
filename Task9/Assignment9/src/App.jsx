import './App.css'
import React from 'react';
import Person from './Components/Person';
import Product from './Components/Product';

const App = () => {
  return (
    <div>
      <Person name="Ankit kumar" age={22} />
      <Product name="Puma Sheo" price="$600" />
      <Person name="Mann Solanki" age={21} />
      <Product name="Chapal" price="$1200" />
    </div>
  );
};

export default App;