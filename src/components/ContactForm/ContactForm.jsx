import React, { Component } from "react";
import {Form} from './ContactForm.styled'


export class ContactForm extends Component {

    state = {
        name: '',
        number: ''
    };

    handleDataInput = (e) => {
        let { name, value } = e.target;
          this.setState({[name]:value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
          name: '',
          number: ''
        });
    };

    

    render() {
        let {name,number} = this.state;
        return (
             <Form onSubmit={this.handleSubmit}>
              <label htmlFor='name'>Name</label>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                id='name'
                value={name}
                onChange={this.handleDataInput}
              />
              <label htmlFor='number'>Phone number</label>
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                id='number'
                value={number}
                onChange={this.handleDataInput}
              />
              
              <button type='submit'>Add contact</button>
            </Form>
            );
    };

};
