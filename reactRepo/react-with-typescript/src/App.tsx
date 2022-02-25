import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/assignment1';

function App() {
  return (
    <div className="App">
      <Hello name="ikram" age={21}/>
      <Hello name="john" age={17}/>
      <Hello name="jack" age={20}/>
    </div>
  );
}

export default App;
