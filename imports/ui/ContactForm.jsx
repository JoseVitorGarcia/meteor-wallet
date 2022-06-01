import React from "react";
import { useState } from "react";
import { ContactsCollection } from "../api/ContactsCollection";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const SaveContact = () => {
    ContactsCollection.insert(name, email, imageUrl);
    console.log({ name, email, imageUrl });
    setEmail((value = ""));
    setName((value = ""));
    setImageUrl((value = ""));
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Imagem de Perfil:</label>
        <input
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <button type="button" onClick={SaveContact}>
          Salvar Contato
        </button>
      </div>
    </form>
  );
};
