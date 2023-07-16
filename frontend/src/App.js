import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import PrivateRoute from './components/PrivateRoute';
import "./App.css";
import "./main.css";
import axios from "axios";
import Home from "./components/pages/home";
import { useState, useEffect } from "react";

export default function App() {
  const [location, setLocation] = useState([]);

  const fetchLocations = async () => {
    const { data } = await axios.get("/location");
    setLocation(data);
  };

  console.log(location);

  useEffect(() => {
    fetchLocations();
  }, []);
  return <div>
        <Home />
</div>
}
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