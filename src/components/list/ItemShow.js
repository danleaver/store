import React from 'react'
import { Button, Label, Checkbox, Grid, Card, Item} from 'semantic-ui-react'
import ItemForm from './ItemForm';
const ItemShow = ({ id, name, cost, deleteItem, updateItem}) => (
   
      <Grid.Column>
        <Card>
          <Card.Content header={name} />
          <Card.Content>
          <Checkbox></Checkbox>
          </Card.Content>

       

        <Label.Group tag>
        <Label as='a'>${cost}.00</Label>

        </Label.Group> 

        <ItemForm
         updateItem={updateItem}
        id={id}
        name={name}
        cost={cost}
        />
        <Button color='red' onClick={ () => deleteItem(id) }> Delete</Button>
        </Card>
      </Grid.Column>

        
      

)

export default ItemShow;