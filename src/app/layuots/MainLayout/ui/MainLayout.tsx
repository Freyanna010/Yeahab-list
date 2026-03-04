import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header';

import classes from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
