import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ChakraBaseProvider } from '@chakra-ui/react';

import { store } from './app/store';
import App from './App';
import { AppTheme } from './theme';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraBaseProvider theme={AppTheme}>
        <App />
      </ChakraBaseProvider>
    </Provider>
  </React.StrictMode>
);