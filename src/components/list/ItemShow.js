import React from 'react'
import { Label, Checkbox } from 'semantic-ui-react'

const ItemShow = ({ id, name, cost}) => (
    <div>
        {name}
        <Checkbox>
            {name}
        </Checkbox>
            
        <Label.Group tag>
        <Label as='a'>${cost}.00</Label>
        </Label.Group> 
    </div>
)

export default ItemShow;