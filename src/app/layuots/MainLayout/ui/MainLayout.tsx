import { Outlet } from 'react-router-dom';

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
    </>
  );
};

export default MainLayout;
