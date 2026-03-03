import { Outlet } from 'react-router-dom';

import classes from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <div className={classes.container}>
      <header>header</header>
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
