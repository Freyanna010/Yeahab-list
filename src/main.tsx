import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';

import { router } from '@/app/providers/router';

import './app/styles/index.scss';
import { store } from './app/providers/store';

createRoot(document.getElementById('root')!).render(
  <StoreProvider store={store}>
    <RouterProvider router={router} />/
  </StoreProvider>
);
