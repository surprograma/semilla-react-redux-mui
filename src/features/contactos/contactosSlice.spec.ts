import { RootState } from "../../app/store";
import contactosReducer, {
  ContactosState,
  agregarContacto,
  selectContactoPorId,
} from "./contactosSlice";

describe("contactos reducer", () => {
  const initialState: ContactosState = {
    todos: [{ id: 120, nombre: "Juan", edad: 13 }],
  };

  const rootState: RootState = {
    contactos: initialState,
  };

  describe("agregarContacto", () => {
    let actual: ContactosState;

    beforeAll(() => {
      actual = contactosReducer(
        initialState,
        agregarContacto({ nombre: "Cecilia", edad: 28 })
      );
    });

    it("asigna el siguiente id disponible", () => {
      expect(actual.todos[1].id).toEqual(121);
    });

    it("agrega el contacto", () => {
      expect(actual.todos).toContainEqual(
        expect.objectContaining({ nombre: "Cecilia", edad: 28 })
      );
    });
  });

  describe("selectContactoPorId", () => {
    it("devuelve el contacto cuando existe", () => {
      expect(selectContactoPorId(120)(rootState)).toEqual({
        id: 120,
        nombre: "Juan",
        edad: 13,
      });
    });

    it("devuelve undefined cuando no existe", () => {
      expect(selectContactoPorId(666)(rootState)).toBeUndefined();
    });
  });
});
