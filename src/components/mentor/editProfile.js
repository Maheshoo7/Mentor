import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FaceIcon from '@mui/icons-material/Face';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" mt={1} variant="h5">
              Edit Profile
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              defaultValue="Person Name"
              label="Full Name"
              type="name"
              id="name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              defaultValue="personname@gmail.com"
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
            <Button
                variant="outlined"
                component="label"
                >
                Change Image
                <input
                    type="file"
                    hidden
                />
              </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{py:'12px', mt: 3}}
            >
              Save
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              href='/home'
              sx={{py:'12px', mt: 1, mb: 2 }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Container>
  );
}