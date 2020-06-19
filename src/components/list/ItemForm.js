import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ItemForm extends Component {
  state = { name: '', cost: '' }

    componentDidMount() {
        if (this.props.id) {
            const { name, cost } = this.props
            this.setState({ name, cost })
        }
    }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
        this.props.updateItem( this.props.id, this.state)
    } else { 

        this.props.addItem(this.state)

    }
    this.setState({ name: '', cost: ''})
  }


render() {
    const { name, cost } = this.state
    return(
        <Form onSubmit={this.handleSubmit}>
        <Form.Input
        name='name'
        value={name}
        onChange={this.handleChange}
        label='Name'
        required

    />
           <Form.Input
        name='cost'
        value={cost}
        onChange={this.handleChange}
        label='Cost'
        required
    />      
        

        <Form.Button>Submit</Form.Button>
        </Form>
    )
}
}


export default ItemForm;