import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';



//id = nanoid();

export class App extends Component {

  state = {
    contacts: [],
    filter: ''
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    };

  };

  componentDidUpdate(prevState) {

    
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  };


  
  //  contacts: [
  //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  // ],

  handleDataInput = (e) => {
    let { name, value } = e.target;
      this.setState({[name]:value})
  };

  checkContactEntry = ({ name, number }) => {
        let normalizedName = name.toLowerCase();

      !this.state.contacts.find((contact)=>contact.name.toLowerCase()===normalizedName)?this.addNewContact({name,number}):alert(`${name} is already in contacts.`);
  }
  addNewContact = ({ name, number }) => {
    
    let contact = {
          id: nanoid(),
          name: name,
          number: number
    };
    
    this.setState(({ contacts }) => ({
          contacts: [...contacts, contact],
        }));
  }

  filterContacts = () => {
    let { filter, contacts } = this.state;
    let normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
    );

  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  
  
  
  render() {
    let {filter} = this.state;
    let filteredContacts = this.filterContacts();


    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'top',
        alignItems: 'flex-start',
        marginLeft:'50px',
        fontSize: 18,
        color: '#010101'
      }}
      >
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.checkContactEntry} />

        <h2>Contacts</h2>

        <Filter
          value={filter}
          onChange={this.handleDataInput}
        />
        
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />

      </div>
    );
  };
};