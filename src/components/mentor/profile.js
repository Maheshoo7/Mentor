import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FaceIcon from '@mui/icons-material/Face';
import Container from '@mui/material/Container';
import EditProfile from './editProfile'

export default function SignIn() {
  const [edit, setEdit] = useState(false)

  const handleClick = () => {
    setEdit(true)
  }

  const renderProfileDetails = () => {
      if ( edit ) return null;
      return (
        <Box
          sx={{
            border: '2px solid grey', 
            borderRadius: 4,
            padding: 4,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="profile pic"
            style={{ width: 200, height: 200 }}
        />

        <Typography variant="h4" mt={4}>
            Person Name
        </Typography>
        <Typography variant="h6" mb={2}>
            personname@gmail.com
        </Typography>
        <Button variant='contained' color="primary" onClick={handleClick}>
            Edit Profile
        </Button>
        </Box>
      )
  }

  const renderEditProfile = () => {
      if (!edit) return null;
      return <EditProfile />
  }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        {renderProfileDetails()}
        {renderEditProfile()}
      </Container>
  );
}