import logo from '@shared/assets/logo.png';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
