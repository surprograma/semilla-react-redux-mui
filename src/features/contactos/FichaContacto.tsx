import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { useGetContactoByIdQuery } from "../../app/services/contactosApi";

export default function FichaContacto() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetContactoByIdQuery(
    parseInt(id as string)
  );

  return (
    <Grid container justifyContent="center">
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {data?.nombre}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {data?.edad} años
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
