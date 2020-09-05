import React from 'react';
import './App.css';
import Mobiles from './components/Mobiles';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  console.log("Working")
  return (
    
    <Router>
      <NavBar />
    <Switch>
          <Route exact path="/">
            <Mobiles />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
      </Switch>
      </Router>
  );
}

export default App;
