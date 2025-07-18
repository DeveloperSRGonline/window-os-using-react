import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';        // ✅ Redux Provider
import { store } from './store';               // ✅ Tumhara Redux store
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>                   {/* Wrap App inside Provider */}
      <App />
    </Provider>
  </StrictMode>
);
