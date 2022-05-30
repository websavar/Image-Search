import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/sass/styles.scss';
import Layout from 'layout/layout';
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Layout />
    </QueryClientProvider>
  </React.StrictMode>
);

