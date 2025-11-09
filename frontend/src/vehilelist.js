// src/components/VehicleList.js
import React from 'react';

export const VehicleList = ({ vehicles }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
      {vehicles.map(vehicle => (
        <div key={vehicle.id} style={{
          border: '1px solid #e5e7eb',
          borderRadius: '16px',
          padding: '1rem',
          backgroundColor: 'white'
        }}>
          <h3 style={{ fontWeight: 'bold' }}>{vehicle.name}</h3>
          <p>{vehicle.type} - {vehicle.color}</p>
          <p>${vehicle.pricePerHour}/hour ⭐ {vehicle.rating}</p>
        </div>
      ))}
    </div>
  );
};
