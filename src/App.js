import React from 'react';
import './configs/ReactotronConfig';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CssBaseline />
        <>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </>
      </PersistGate>
    </Provider>
  );
}

export default App;
