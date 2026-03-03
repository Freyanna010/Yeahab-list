import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/app/providers/router';

import './app/styles/index.scss';

createRoot(document.getElementById('root')!).render(
  //   <StoreProvider store={store}>
  <RouterProvider router={router} />
  //   </StoreProvider>
);
