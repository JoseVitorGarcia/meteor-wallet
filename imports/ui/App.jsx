import React from "react";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Header } from "./Header";
export const App = () => (
  <div>
    <Header></Header>
    <div className="min-h-full">
      <div className="max-w-4xl mx-auto p-2">
        <ContactForm></ContactForm>
        <ContactList></ContactList>
      </div>
    </div>
  </div>
);
