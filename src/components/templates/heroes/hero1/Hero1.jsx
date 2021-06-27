import React from 'react';
import {
  Typography, Grid, Container, Button
} from '@material-ui/core';

export default function Hero1() {
  return (
    <header id="hero1" className="d-flex align-items-center">
      <Container>
        <Grid>
          <Grid item xs={12} sm={7} md={6}>
            <Typography variant="h1" className="mb-4">This is an extremely amazing title</Typography>
            <Typography variant="subtitle1" className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            <Button variant="contained" color="primary" size="large">
              Show me more
            </Button>
          </Grid>
        </Grid>
      </Container>

    </header>
  );
}

Hero1.defaultProps = {

};

Hero1.propTypes = {

};
