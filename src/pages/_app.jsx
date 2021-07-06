import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';
import {
  CssBaseline, IconButton
} from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import '../styles/main.scss';

// Icons
import CloseIcon from '@material-ui/icons/Close';

// Custom Components
import Loader from '../components/misc/loader/Loader';

// Themes
import lightTheme from '../styles/themes/light';
import darkTheme from '../styles/themes/dark';

function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState();
  const notistackRef = React.createRef();

  useEffect(() => {
    if (currentTheme) {
      localStorage.setItem('theme', currentTheme.name);
    }
  }, [currentTheme]);

  useEffect(() => {
    const savedThemeName = localStorage.getItem('theme');

    switch (savedThemeName) {
      case 'lightTheme':
        setCurrentTheme(createMuiTheme(lightTheme));
        break;
      case 'darkTheme':
        setCurrentTheme(createMuiTheme(darkTheme));
        break;
      default:
        setCurrentTheme(createMuiTheme(lightTheme));
    }
  }, []);

  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return currentTheme ? (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <SnackbarProvider
        ref={notistackRef}
        maxSnack={3}
        action={(key) => (
          <IconButton size="small" aria-label="delete" onClick={onClickDismiss(key)}>
            <CloseIcon />
          </IconButton>
        )}
      >
        <Component {...pageProps} />
      </SnackbarProvider>
    </ThemeProvider>
  ) : <Loader fullscreen />;
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
};

export default MyApp;
