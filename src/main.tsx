import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Provider } from 'react-redux';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './Store/Store';
import CreateModelVersionGroup from './ModelManagement/Features/ModelTypeGroups/CreateModelVersionGroup.tsx';
import ViewModelVersionGroup from './ModelManagement/Features/ModelTypeGroups/ViewModelVersionGroup.tsx';
//const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/groups" element={<ViewModelVersionGroup />} />
            <Route path="/newgroups" element={<CreateModelVersionGroup />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
