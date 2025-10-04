import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/properties/${id}`)
      .then(res => setProperty(res.data));
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{property.project} - {property.type}</h2>
      <p><b>Property ID:</b> {property.propertyId}</p>
      <p><b>Location:</b> {property.location}</p>
      <p><b>Price:</b> {property.price}</p>
      <p><b>Status:</b> {property.status}</p>
      <p><b>Furnishing:</b> {property.furnishing}</p>
    </div>
  );
}

export default PropertyDetails;
