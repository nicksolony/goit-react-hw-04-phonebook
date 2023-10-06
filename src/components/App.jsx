import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';



//id = nanoid();

export const App = () => {

  // state = {
  //   contacts: [],
  //   filter: ''
  // };

  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    
    if (parsedContacts) {
      return parsedContacts;
    } else {
      return [];
    };
  });
  
  const [filterValue, setFilterValue] = useState('');

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
    
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   };

  // };

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
    
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   };
  // }, []);

  // componentDidUpdate(prevState) {

    
  //   const nextContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;

  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  
  //  contacts: [
  //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  // ],

  const handleFilterInput = (e) => {
    let { value } = e.target;
    setFilterValue(value);
  };

  const checkContactEntry = (name, number ) => {
    let normalizedName = name.toLowerCase();

    !contacts.find((contact) => contact.name.toLowerCase() === normalizedName) ? addNewContact({ name, number }) : alert(`${name} is already in contacts.`);
  };

  const addNewContact = ({ name, number }) => {
    
    let contact = {
          id: nanoid(),
          name: name,
          number: number
    };
    
    setContacts([...contacts, contact]);
  };


  const filterContacts = () => {
    let normalizedFilter = filterValue.toLowerCase();  
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };
  
  
  let filteredContacts = filterContacts();


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
        <ContactForm onSubmit={checkContactEntry} />

        <h2>Contacts</h2>

        <Filter
          value={filterValue}
          onChange={handleFilterInput}
        />
        
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />

      </div>
    );
  };
