import { Typography, Stack } from "@mui/material";
import ListaContactos from "./features/contactos/ListaContactos";
import NuevoContacto from "./features/contactos/NuevoContacto";

export default function Home() {
  return (
    <Stack spacing={2}>
      <Typography variant="h3" gutterBottom>
        Contactos
      </Typography>
      <NuevoContacto />
      <ListaContactos />
    </Stack>
  );
}
