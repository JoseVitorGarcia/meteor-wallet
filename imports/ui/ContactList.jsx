import React from "react";
import {ContactsCollection} from "../api/ContactsCollection";
import { useTracker } from 'meteor/react-meteor-data';

export const ContactList = () => {
  const contact = useTracker(() => {
    return ContactsCollection.find({}).fetch();
  });
  return (
    <>
      <h3>Lista de Contatos</h3>
      {contact.map((contact) => (
        <li key={contact.email}>
          {contact.name} - {contact.email}
        </li>
      ))}
    </>
  );
};
