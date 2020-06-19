import React from 'react';
import ItemShow from './ItemShow';

const ItemList = ({ items }) => (

    <div>
  { items.map( k => <ItemShow key={k.id} {...k} />)}
  </div>
)
 




export default ItemList;





















