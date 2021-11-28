import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function ButtonAppBar() {
  return (
      <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Container>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Mentor a Ship
                </Typography>
                <Button color="inherit" href="/">Login</Button>
                <Button color="inherit" href="/register">Register</Button>
                </Toolbar>
                </Container>
            </AppBar>
        </Box>
  );
}
