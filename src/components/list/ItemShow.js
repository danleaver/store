import React from 'react'
import { Button, Label, Checkbox, Grid, Card, Item} from 'semantic-ui-react'
import ItemForm from './ItemForm';
const ItemShow = ({ id, name, cost, deleteItem, updateItem}) => (
   
      
          <Grid.Column>
            <Card>
              <Card.Content header={name}>
               
              </Card.Content>
            
              <Card.Content>
              <Label.Group tag>
                  <Checkbox></Checkbox>
                  <Label as='a'> {name} ${cost}.00</Label>
                </Label.Group> 
              </Card.Content>

         
             
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