import React from 'react';
import ItemShow from './ItemShow';

const ItemList = ({ items, deleteItem, updateItem }) => (

    <div>
  { items.map( k => <ItemShow 
  
  key={k.id} {...k} 
    deleteItem={deleteItem}
    updateItem={updateItem}
  />
  
  )}
  </div>
)
 




export default ItemList;

























