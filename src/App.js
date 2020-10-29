import React from 'react';
import './App.css';
import Mobiles from './components/Mobiles';
import NavBar from './components/NavBar'

function App() {
  console.log("Working")
  return (
    <>
      <NavBar />
      <Mobiles />
    </>
  );
}

export default App;
