import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Outlet } from "react-router-dom";

function Copyleft() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyleft 🄯 "}
      <Link color="inherit" href="https://mui.com/">
        El Sur también programa
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi nueva app
          </Typography>
          <Button color="inherit">Iniciar sesión</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function App() {
  return (
    <>
      <ButtonAppBar />
      <Container maxWidth="lg">
        <Box my={4}>
          <Outlet />
        </Box>
        <Copyleft />
      </Container>
    </>
  );
}

export default App;
