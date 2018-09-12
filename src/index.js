import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    background: {
      footer: '#f5f5f5'
    }
  },
  typography: {
    button: {
      fontSize: 13
    }
  },
  shape: {
    cardWidth: 240,
    cardMargin: 12,
    cardWrapperMargin: 36,
    totalCardWidth() {
      return this.cardWidth + this.cardMargin * 2;
    },
    // returns minimal width to draw desirable number of cards per row
    cardsBreakpointWidth(numberOfCards) {
      return this.totalCardWidth() * numberOfCards + this.cardWrapperMargin * 2 -this.cardMargin * 2;
    },
    cardsContainerWidth(numberOfCards) {
      return (this.cardWidth + this.cardMargin * 2) * numberOfCards;
    },
    editIconSize: 30,
  }
});

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);