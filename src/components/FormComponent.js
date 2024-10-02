// src/components/FormComponent.js
import React, { useState } from 'react';

const FormComponent = ({ addItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(inputValue); // Chama a função addItem passada como prop
    setInputValue(''); // Limpa o campo de entrada após adicionar
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Adicione um item"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default FormComponent;
