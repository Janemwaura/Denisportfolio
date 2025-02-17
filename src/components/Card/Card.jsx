import React from 'react';
import './Card.css';
const Card = ({date, role, responsibilities}) => {
  return (
    <div className="card">
        <span>{date}</span>
        <span>{role}</span>
        <span>{responsibilities}</span>

    </div>
  )
}

export default Card;