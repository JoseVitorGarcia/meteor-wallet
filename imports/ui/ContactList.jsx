import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import {userTracker} from 'meteor/tracker';
export const ContactList = () => {
    const contacts = userTracker(()=>{
       return ContactsCollection.find({}).fetch();
    }) 
    return(
        <>
        <h3>Lista de Contatos</h3>
        {contacts.map(contacts =>(
            <li key={contacts.email}>{contacts.name} - {contacts.email}</li>
        ))}
        </>
    )
}