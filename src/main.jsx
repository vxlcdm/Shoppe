import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './redux/Store.jsx';
import { persistor } from './redux/Store.jsx';

import { PersistGate } from 'redux-persist/integration/react';
createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
  <StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
  </StrictMode>,
  </Provider>
)
