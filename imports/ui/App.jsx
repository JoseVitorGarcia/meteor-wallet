import React from "react";

export const App = () => (
  <div>
    <h1>Meteor Wallet</h1>
    <form>
      <div>
        <label htmlFor="name">Nome:</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />
      </div>
      <div>
        <label htmlFor="imageUrl">Imagem de Perfil:</label>
        <input id="imageUrl" type="text" />
      </div>
      <div>
        <button>Salvar Contato</button>
      </div>
    </form>
  </div>
);
