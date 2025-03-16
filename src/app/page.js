import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import ResponsiveAppBar from '@/components/ResponsiveAppBar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Face6 } from '@mui/icons-material'

export default function HomePage() {
  return (
    <>
    <ResponsiveAppBar> </ResponsiveAppBar>
    <Container maxWidth={false}>
      <div>
        <Grid container rowSpacing={3} columnSpacing={3} align="center">
          <Grid xs={6}>
            <div>
            <Face6 style={{ fontSize: '10rem' }}/>
            </div>
          </Grid>
          <Grid xs={6}>
            <p></p>
            <div>
            <Stack spacing={2}>
            <Button variant="outlined" href='/transfers/1'>Transfer 1: Mabel to Saloni</Button>
            <Button variant="outlined" href='/transfers/2'>Transfer 2: Mabel to Justina</Button>
            <Button variant="outlined" href='/transfers/3'>Transfer 3: Mabel to Saloni</Button>
            </Stack>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
    </>
  );
}