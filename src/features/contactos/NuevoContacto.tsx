import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useCreateContactoMutation } from "../../app/services/contactosApi";

export default function NuevoContacto() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  const [agregarContacto] = useCreateContactoMutation();

  const guardar = () => {
    agregarContacto({ nombre, edad: parseInt(edad) });
    setNombre("");
    setEdad("");
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <TextField
        id="nombre"
        label="Nombre"
        required
        variant="standard"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <TextField
        id="edad"
        label="Edad"
        type="number"
        required
        variant="standard"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />
      <Button variant="contained" onClick={guardar}>
        Agregar
      </Button>
    </Stack>
  );
}
