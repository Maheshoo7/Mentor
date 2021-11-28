import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navbar from './navbar'

export default function SignUp() {
  const [category, setCategory] = useState('Associate');

  const handleAssociateClick = () => {
      setCategory('Associate')
  }

  const handleMentorClick = () => [
      setCategory('Mentor')
  ]

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const mentorFields = () => {
      if (category !== 'Mentor') return null;

      return (
          <>
            <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="organization"
                  label="Organization"
                  name="organization"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="role"
                  label="Role"
                  name="role"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="areaofinterest"
                  label="Area Of Interest"
                  name="areaofinterest"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="expertise"
                  label="Expertise"
                  name="expertise"
                />
              </Grid>
          </>
      )
  }

  return (
      <>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            marginBottom: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Registration
          </Typography>
          <Grid style={{ marginTop: '10px', marginBottom: '10px' }} container direction="row" justifyContent="center" alignItems="center" spacing={2}>
              <Grid item>
                  <Button onClick={handleAssociateClick} variant={ category === 'Associate' ? "contained" : "outlined" } >
                      Associate
                  </Button>
              </Grid>
              <Grid item>
                  <Button onClick={handleMentorClick} variant={ category === 'Mentor' ? "contained" : "outlined" } >
                      Mentor
                  </Button>
              </Grid>
          </Grid>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              {mentorFields()}
              {/* <Grid item xs={12}>
                <TextField
                  fullWidth
                  disabled
                  value={category}
                  name="category"
                  type="category"
                  id="category"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
              <Button
                variant="outlined"
                component="label"
                >
                Upload Image
                <input
                    type="file"
                    hidden
                />
              </Button>
              </Grid>
              <Grid item xs={12}>
                  <Typography color='secondary'>
                      * Required Fields
                  </Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ py:'12px', mt: 2, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </>
  );
}