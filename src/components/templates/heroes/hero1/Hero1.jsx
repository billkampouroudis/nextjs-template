import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Grid, Container
} from '@material-ui/core';
import Image from 'next/image';

import StartupFlatlineIl from '../../../../assets/illustrations/Startup_Flatline.svg';

// Custom Components
import ContactMeForm from '../../../forms/contactMe/ContactMeForm';

export default function Hero1(props) {
  const {
    title, subtitle, cta, contactMe
  } = props;

  return (
    <header id="hero1" className="d-flex align-items-center">
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

    </header>
  );
}

Hero1.defaultProps = {
  subtitle: undefined,
  cta: undefined,
  contactMe: false
};

Hero1.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  cta: PropTypes.node,
  contactMe: PropTypes.bool
};
