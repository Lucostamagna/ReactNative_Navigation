import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 0, name: 'Lucia Costamagna' },
    { id: 1, name: 'Mica Boriglio' },
    { id: 2, name: 'Cielo Lee' },
];

const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state = action.payload;
    },
    addContact: (state, action) => {
      state = action.push(action.payload);
      //agrego a mi arreglo con el push
    },
    deleteContact: (state, action) => {
      const index= state.findIndex(i => i.id ===action.payload);
      state.splice(index,1);
    },
  },
});
export const {setContacts, addContact, deleteContact} = contactsSlice.actions;
export default contactsSlice.reducer;
