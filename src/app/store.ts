import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import contactosReducer from "../features/contactos/contactosSlice";

export const store = configureStore({
  reducer: {
    contactos: contactosReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
