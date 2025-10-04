import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PropertyForm from "./PropertyForm";
import PropertyDetails from "./PropertyDetails";

export default function App() {
  const [properties, setProperties] = useState([]);

  const addProperty = (property) => {
    setProperties([...properties, property]);
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard properties={properties} />} />
      <Route path="/property" element={<PropertyForm onAddProperty={addProperty} />} />
      <Route path="/property/:id" element={<PropertyDetails properties={properties} />} />
    </Routes>
  );
}
