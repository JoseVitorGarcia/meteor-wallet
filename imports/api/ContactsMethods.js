import { ContactsCollection } from "./ContactsCollection";
import { Meteor } from "meteor/meteor";
Meteor.methods( {
    'contacts.insert'({name, email, imageUrl}) {
        return ContactsCollection.insert({name, email, imageUrl});
    }
})

