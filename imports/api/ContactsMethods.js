import { ContactsCollection } from "./ContactsCollection";
import {Meteor} from "meteor/meteor";

Meteor.methods( {
    'contactsinsert'({name, email, imageUrl}) {
        if (!name) {
            throw new Meteor.Error("name is required")
        }
        return ContactsCollection.insert({ name, email, imageUrl });
    }
})

