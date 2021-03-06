import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navbar from './navbar'

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
      <>
      <Navbar />
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <VpnKeyIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
              Forgot Password
          </Typography>
          <Typography mt={4} component="h1" variant="h6">
          Enter your email address and we'll send you a otp to reset your password.
          </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ py:'12px', mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
              <Link href="/" variant="body2">
                  Back to Login
                </Link>
              </Grid>
            </Grid>
          </Box>
      </Container>
      </>
  );
}