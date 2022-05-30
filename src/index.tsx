import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/sass/styles.scss';
import Layout from 'layout/layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

