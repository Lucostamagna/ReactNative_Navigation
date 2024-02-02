import * as React from 'react';

let nexId = 3;
const initialContacts = [
  { id: 0, name: 'Lucia Costamagna' },
  { id: 1, name: 'Mica Boriglio' },
  { id: 2, name: 'Cielo Lee' },
];
//creo el contexto
const contactsStore = React.createContext(initialContacts);
const { Provider } = contactsStore;

function ContactsProvider({ children }) {
  const [contacts, dispatch] = React.useReducer(
    contactReducer,
    initialContacts
  );

  function handleAddContact(name) {
    dispatch({ type: 'ADD', id: nexId++, name });
  }
  function handleDeleteContact(id) {
    dispatch({ type: 'DELETE', id });
  }

  function hanldeChangeContact(contact) {
    dispatch({ type: 'CHANGE', contact });
  }

  return (
    <Provider
      value={{
        contacts,
        handleAddContact,
        handleDeleteContact,
        hanldeChangeContact,
      }}
    >
      {children}
    </Provider>
  );
}

export { ContactsProvider, contactsStore };

export function contactReducer(contacts, action) {
  switch (action.type) {
    case 'ADD': {
      return [...contacts, { id: action.id, name: action.name }];
    }
    case 'DELETE': {
      return contacts.filter(contact => contact.id !== action.id);
    }
    case 'CHANGE': {
      return contacts.map(c =>
        c.id === action.contact.id ? action.contact : c
      );
    }
    default: {
      throw new Error('error action type', action.type);
    }
  }
}
