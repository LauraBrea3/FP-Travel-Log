import React from "react";
import "./App.css";
import "./main.css";
import { useState, useEffect } from "react";
// import Navbar from './components/navbar';
// import Home from './components/pages/home';
import axios from "axios";
import Home from "./components/pages/home";

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