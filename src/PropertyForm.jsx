import React, { useState } from "react";
import axios from "axios";
import "./PropertyForm.css"; // for styles

function PropertyForm() {
  const [form, setForm] = useState({
    propertyId: "",
    project: "",
    type: "",
    price: "",
    location: "",
    furnishing: "",
    status: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/properties", form);
    alert("Property added!");
  };

  return (
    <div className="form-container">
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit} className="property-form">
        <input name="propertyId" placeholder="Property ID" onChange={handleChange} />

        <input name="project" placeholder="Project" onChange={handleChange} />

        {/* Dropdown for Property Type */}
        <select name="type" onChange={handleChange}>
          <option value="">Select Property Type</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Penthouse">Penthouse</option>
          <option value="Condo">Condo</option>
        </select>

        {/* Dropdown for Furnishing */}
        <select name="furnishing" onChange={handleChange}>
          <option value="">Furnishing</option>
          <option value="Fully Furnished">Fully Furnished</option>
          <option value="Semi Furnished">Semi Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>

        {/* Dropdown for Status */}
        <select name="status" onChange={handleChange}>
          <option value="">Availability</option>
          <option value="On Sale">On Sale</option>
          <option value="Coming Soon">Coming Soon</option>
          <option value="Sold">Sold</option>
        </select>

        <input name="price" placeholder="Price" onChange={handleChange} />
        <input name="location" placeholder="Location" onChange={handleChange} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default PropertyForm;
