import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import {App} from './components/App';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      
    <BrowserRouter basename="goit-react-hw-08-phonebook">
    <ChakraProvider>
          <App />
          </ChakraProvider>
        </BrowserRouter>
        
     
    </Provider>
  </React.StrictMode>
);