import React from "react";
import { List } from './ContactList.sytyled';
import { Contact } from "components/Contact/Contact";

export const ContactList = ({ contacts, deleteContact }) => {
    return (
        <List>
          {contacts.map((contact) =>
            {return (
              <Contact key={contact.id} contact={contact} deleteContact={ deleteContact} />
            )}
          )}
        </List>
    );
};
