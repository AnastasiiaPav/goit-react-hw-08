import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persist, store } from 'Redux/storage';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
    <BrowserRouter basename="/goit-react-hw-08">
        <App />
        </BrowserRouter>
        </PersistGate>
    </Provider>
  </React.StrictMode>
);
