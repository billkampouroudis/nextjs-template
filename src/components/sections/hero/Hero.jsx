import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Grid, Container
} from '@material-ui/core';
import Image from 'next/image';

import StartupFlatlineIl from '../../../assets/illustrations/Startup_Flatline.svg';

// Custom Components
import ContactMeForm from '../../forms/contactMe/ContactMeForm';
import Navbar from '../navbar/Navbar';

export default function Hero(props) {
  const {
    title, subtitle, cta, contactMe
  } = props;

  return (
    <>

      <header className="bg-white">
        <Navbar />
        <div className="hero">
          <Container>
            <Grid container className="d-flex align-items-center">
              <Grid item xs={12} sm={7} md={6}>
                <Typography variant="h1" className="mb-4">
                  {title}
                </Typography>

                {subtitle && (
                <Typography variant="subtitle1" className="mb-4">
                  {subtitle}
                </Typography>
                )}

                {cta && (
                <div className="mb-4">
                  {cta}
                </div>
                )}

                {contactMe && (
                <ContactMeForm />
                )}

              </Grid>

              <Grid item xs={12} sm={5} md={6} className="text-right">
                <Image src={StartupFlatlineIl} alt="Startup flatline illustration" layout="responsive" />
              </Grid>
            </Grid>
          </Container>
        </div>

      </header>
    </>
  );
}

Hero.defaultProps = {
  subtitle: undefined,
  cta: undefined,
  contactMe: false
};

Hero.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  cta: PropTypes.node,
  contactMe: PropTypes.bool
};
