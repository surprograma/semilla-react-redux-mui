import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { find } from "ramda";

export interface Contacto {
  id: number;
  nombre: string;
  edad: number;
}

type ContactoSinId = Omit<Contacto, "id">;

export interface ContactosState {
  todos: Contacto[];
}

const initialState: ContactosState = {
  todos: [
    { id: 1, nombre: "Bartolina Sisa", edad: 32 },
    { id: 2, nombre: "Tupac Katari", edad: 31 },
  ],
};

export const contactosSlice = createSlice({
  name: "contactos",
  initialState,
  reducers: {
    agregarContacto: (state, action: PayloadAction<ContactoSinId>) => {
      const ultimoId = Math.max(...state.todos.map((it) => it.id));
      state.todos.push({ id: ultimoId + 1, ...action.payload });
    },
  },
});

export const { agregarContacto } = contactosSlice.actions;

export const selectContactoPorId = (id: number) => (state: RootState) =>
  find((it) => it.id === id, state.contactos.todos);

export const selectContactos = (state: RootState) => state.contactos.todos;

export default contactosSlice.reducer;
