// src/components/App.js
import React, { useState } from 'react';
import FormComponent from './FormComponent';
import ListComponent from './ListComponent';
import ListItemComponent from './ListItemComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import AnotherComponent from './AnotherComponent';

const App = () => {
    const [items, setItems] = useState([]);

    const addItem = (newItem) => {
        if (newItem) {
            setItems((prevItems) => [...prevItems, newItem]); // Adiciona o novo item à lista
        }
    };

    return (
        <div>
            <HeaderComponent title="Dynamics Components" />
            <FormComponent addItem={addItem} /> {/* Passa a função addItem como prop */}
            <ListComponent items={items} />
            {items.map((item, index) => (
                <ListItemComponent key={index} item={item} />
            ))}
            <AnotherComponent>
                <p>Este é um conteúdo dinâmico dentro do AnotherComponent!</p>
            </AnotherComponent>
            <FooterComponent /> 
        </div>
    );
};

export default App;
