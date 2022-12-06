import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectContactoPorId } from "./contactosSlice";
import { Grid } from "@mui/material";

export default function FichaContacto() {
  const { id } = useParams();
  const contacto = useAppSelector(selectContactoPorId(parseInt(id as string)));

  return (
    <Grid container justifyContent="center">
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {contacto?.nombre}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {contacto?.edad} años
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container justifyContent="flex-end">
              <Button size="small" component={Link} to="/">
                Volver
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
