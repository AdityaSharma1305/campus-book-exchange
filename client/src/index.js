import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
import { UserProvider } from './context/UserContext';

root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
