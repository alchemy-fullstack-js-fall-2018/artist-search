import React from 'react';



export default function Artist({ name, description }) {
  return (
    <div>
      <h3>{name} - {description}</h3>
    </div>
  );
}
