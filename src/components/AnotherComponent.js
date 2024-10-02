// src/components/AnotherComponent.js
import React from 'react';

const AnotherComponent = ({ children }) => {
  return (
    <div>
      <h2>Conteúdo Adicional</h2>
      {children}
    </div>
  );
};

export default AnotherComponent;
