import React from "react";
import { ContactItem } from './Contact.styled';

export const Contact = ({ contact, deleteContact }) => {
    let { id, name, number } = contact;

    return (
        <ContactItem key={id}>
            {name}: {number}
            <button onClick={()=>deleteContact(id)}>
                Delete
            </button>
        </ContactItem>
    );
};