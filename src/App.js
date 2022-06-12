import React from 'react';
import './App.css';
import Header from "./components/header"
import Navbar from "./components/navbar"
import Fruits from "./components/fruits"
import data from "./fruits"

function App(){
  const fruit = data.map((item) => {
    return <Fruits {...item}/>;
  });
    return (
        <div className="App">
          <Header />
          <Navbar />
          <section className='fruits'>{fruit}</section>
        </div>
    );
}

export default App;
