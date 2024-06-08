import React from 'react';
import './ServiceCard.css';

function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <img src={icon} alt={`${title} icon`} className="service-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
