import { Outlet } from 'react-router-dom';

import classes from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <>
      <header>header</header>
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
