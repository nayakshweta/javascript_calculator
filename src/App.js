import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component{
  render() {
    return(
      <div>
        <Calculator />
      </div>
    )
  }
}

export default App;
