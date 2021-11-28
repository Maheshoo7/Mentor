import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function ButtonAppBar(props) {
    const renderLinks = () => {
        const { items } = props;

        return items.map((item, index) => {
            return <Button color="inherit" href={item.navigate} key={index}>{item.label}</Button>
        })
    }
  return (
      <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Container>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Mentor a Ship
                </Typography>
                {renderLinks()}
                </Toolbar>
                </Container>
            </AppBar>
        </Box>
  );
}
