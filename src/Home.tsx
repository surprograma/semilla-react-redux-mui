import { Typography } from "@mui/material";
import ListaContactos from "./features/contactos/ListaContactos";

export default function Home() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Contactos
      </Typography>
      <ListaContactos />
    </>
  );
}
