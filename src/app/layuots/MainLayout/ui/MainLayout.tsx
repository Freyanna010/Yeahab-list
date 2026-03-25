import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Header } from '@/widgets/Header';

import classes from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <main className={classes.content}>
          <Outlet />
        </main>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default MainLayout;
