import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useGetContactosQuery } from "../../app/services/contactosApi";

export default function ListaContactos() {
  const { data, error, isLoading } = useGetContactosQuery();

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>
          Ocurrió un error al intentar acceder a la API. ¿Está levantada? 🤔
        </AlertTitle>
        El error que arrojó la request es{" "}
        <i>{JSON.stringify(error, undefined, 2)}</i>
      </Alert>
    );
  }

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
