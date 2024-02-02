import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// let nexId = 3;
const initialContacts = [
  { id: 0, name: 'Lucia Costamagna' },
  { id: 1, name: 'Mica Boriglio' },
  { id: 2, name: 'Cielo Lee' },
];
//creo el contexto
const contactsStore = React.createContext([]);
const { Provider } = contactsStore;

function ContactsProvider({ children }) {
  const [contacts, dispatch] = React.useReducer(contactReducer, []);

  React.useEffect(() => {
    getContacts();
  }, []);
  //get me busca y el set me guarda
  async function getContacts() {
    const contact = await AsyncStorage.getItem('@contacts');
    if (contact === null) {
      await AsyncStorage.setItem('@contact', JSON.stringify(initialContacts));
      dispatch({ type: 'SET_CONTACTS', contact: initialContacts });
    } else {
      dispatch({ type: 'SET_CONTACTS', contact: JSON.parse(contact) });
    }
  }

  function handleAddContact(name) {
    dispatch({ type: 'ADD', id: Math.random(), name });
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
    case 'SET_CONTACTS': {
      return action.contact;
    }
    case 'ADD': {
      const newContacts = [...contacts, { id: action.id, name: action.name }];
      const jsonValue = JSON.stringify(newContacts);
      AsyncStorage.setItem('@contact', jsonValue);

      return newContacts;
    }
    case 'DELETE': {
      const newContacts = contacts.filter(contact => contact.id !== action.id);
      const jsonValue = JSON.stringify(newContacts);
      AsyncStorage.setItem('@contact', jsonValue);
      return newContacts;
    }
    case 'CHANGE': {
      const newContacts = contacts.map(c =>
        c.id === action.contact.id ? action.contact : c
      );
      const jsonValue = JSON.stringify(newContacts);
      AsyncStorage.setItem('@contact', jsonValue);
      return newContacts;
    }
    default: {
      throw new Error('error action type', action.type);
    }
  }
}
