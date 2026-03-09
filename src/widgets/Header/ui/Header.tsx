import logo from '@shared/assets/logo.png';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
