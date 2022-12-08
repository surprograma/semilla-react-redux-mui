import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useGetContactosQuery } from "../../app/services/contactosApi";

export default function ListaContactos() {
  const { data, error, isLoading } = useGetContactosQuery();

  return (
    <List>
      {data?.map((it) => (
        <ListItem
          key={it.id}
          secondaryAction={
            <Button component={Link} to={`/contactos/${it.id}`}>
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
