import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppSelector } from "../../app/hooks";
import { selectContactos } from "./contactosSlice";

export default function ListaContactos() {
  const contactos = useAppSelector(selectContactos);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {contactos.map((it) => (
        <ListItem>
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
