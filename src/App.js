import React, { Component } from 'react';
import ItemList from './components/list/ItemList';
import ItemForm from './components/list/ItemForm';

class App extends Component {

  state = { items: [
    {id: 1, name: 'Eggs', cost: 8},
    {id: 2, name: 'Milk', cost: 3},
    {id: 3, name: 'Cheese', cost: 1},
    {id: 4, name: 'Bread', cost: 4},
  ]}

getId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);
};

addItem = (incomingItem) => {
  const { items } = this.state
  let newItem = { id: this.getId(), ...incomingItem }
  this.setState({ items: [newItem, ...items] })
}

  render() {
    const { items } = this.state
    return(
      <div>
        
        <ItemForm addItem={this.addItem} />
        <ItemList items={this.state.items} />
        
      </div>
    )
  }
}
export default App;
