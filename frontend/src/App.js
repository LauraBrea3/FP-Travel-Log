import React from "react";
import "./App.css";
import "./main.css";
import { useState, useEffect } from "react";
// import Navbar from './components/navbar';
import Home from './components/pages/home';
import axios from "axios";
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
        <PrivateRoute path="/home" component={Home} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}
export default App; 
