import React from 'react';
import ListItemComponent from './ListItemComponent';

const ListComponent = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItemComponent key={index}>{item}</ListItemComponent>
      ))}
    </ul>
  );
};

export default ListComponent;
