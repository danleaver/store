import React from 'react';
import ItemShow from './ItemShow';
import {Container, Grid,} from 'semantic-ui-react';

const ItemList = ({ items, deleteItem, updateItem }) => (

   <Container>
     <Grid columns={3} doubling>
       <Grid.Row>
            { items.map( k => <ItemShow 
            
            key={k.id} {...k} 
              deleteItem={deleteItem}
              updateItem={updateItem}
            />
            
            )}
      </Grid.Row>
    </Grid>
  </Container>
)
 




export default ItemList;

































