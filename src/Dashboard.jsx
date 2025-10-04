import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

export default function Dashboard({ properties }) {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="card" style={{ width: "90%", maxWidth: "1000px" }}>
        <h2 className="card-title">Manage Properties</h2>

        {/* Add Property Button */}
        <button
          className="primary-btn"
          style={{ width: "200px", marginBottom: "15px" }}
          onClick={() => navigate("/property")}
        >
          + Add Property
        </button>

        {/* Properties Table */}
        <table className="property-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Transaction</th>
              <th>Size (m²)</th>
              <th>Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {properties.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No properties added yet.
                </td>
              </tr>
            ) : (
              properties.map((p, index) => (
                <tr key={index}>
                  <td>{p.title}</td>
                  <td>{p.propertyType}</td>
                  <td>{p.transactionType}</td>
                  <td>{p.size}</td>
                  <td>{p.address}</td>
                  <td>
                    <span className="status-label">Published</span>
                  </td>
                  <td>
                    <Link to={`/property/${index}`} className="view-link">
                      View
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
