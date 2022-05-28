import React from 'react';
import './App.css';
import Header from "./components/header"
import Navbar from "./components/navbar"
import Weather from "./components/weather"

class App extends React.Component {

  render() {
    return (
        <div className="App">
          <Header />
          <Navbar />
          <Weather />
        </div>
    );
    ;
  }
}

export default App;
