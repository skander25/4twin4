import React, { useState, useEffect } from 'react';
import './App.css';
import Products from './Component/Products';




 function App() {
 /*const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(calculateTotal(students));
  }, []);*/

  return (
    <div>
      
      <Products></Products>
    </div>
  );

}

export default App;


