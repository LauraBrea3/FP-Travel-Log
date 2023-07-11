import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

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
  return <div>Welcome to the best travel log app out there!</div>;
}
