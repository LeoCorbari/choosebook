import React from 'react';
import './style.css';

import Header from './components/header'
import Routes from './routes'

class App extends React.Component {
  


  render(){
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    )  
  }
  
}

export default App;
