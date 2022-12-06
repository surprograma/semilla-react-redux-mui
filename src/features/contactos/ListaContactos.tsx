import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppSelector } from "../../app/hooks";
import { selectContactos } from "./contactosSlice";
import { Link } from "react-router-dom";

export default function ListaContactos() {
  const contactos = useAppSelector(selectContactos);

  return (
    <List>
      {contactos.map((it) => (
        <ListItem
          secondaryAction={
            <Button
              variant="contained"
              component={Link}
              to={`/contactos/${it.id}`}
            >
              Ver detalles
            </Button>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={it.nombre} secondary={`${it.edad} años`} />
        </ListItem>
      ))}
    </List>
  );
}
