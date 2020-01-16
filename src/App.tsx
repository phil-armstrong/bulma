import React from 'react'
import { ThemeProvider } from 'styled-components';
import { theme } from './bulma/themes';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
          <div>asdf</div>
        </ThemeProvider>
    );
};