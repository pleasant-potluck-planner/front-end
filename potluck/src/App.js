import './App.css';
import AddEvent from './Components/CreateEvent'
import React, { useState, useEffect } from 'react'

function App() {

  const [potlucks, setPotlucks] = useState([])

  const onSubmit = (evnt,) => {
    evnt.preventDefault();

  }

  return (
    <div className="App">
      <h1>Potluck Planner</h1>
      <AddEvent onSubmit={onSubmit} />
    </div>
  );
}

export default App;
