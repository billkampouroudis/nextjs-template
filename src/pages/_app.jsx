import React, { useEffect, useState } from 'react';
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';
import {
  CssBaseline
} from '@material-ui/core';
import style from '../styles/main.scss'; // eslint-disable-line no-unused-vars
import lightTheme from '../styles/themes/light';
import darkTheme from '../styles/themes/dark';
import Loader from '../components/misc/loader/Loader';

function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState();

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

  return currentTheme ? (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  ) : <Loader fullscreen />;
}

export default MyApp;
