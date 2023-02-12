import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ChakraBaseProvider } from '@chakra-ui/react';

import { store } from './app/store';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraBaseProvider>
        <App />
      </ChakraBaseProvider>
    </Provider>
  </React.StrictMode>
);