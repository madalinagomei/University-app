import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/University-app">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
