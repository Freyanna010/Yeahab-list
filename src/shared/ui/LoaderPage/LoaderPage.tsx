// LoaderPortal.tsx
import { MoonLoader } from 'react-spinners';
import ReactDOM from 'react-dom';
import type { FC } from 'react';

import classes from './LoaderPage.module.scss';
// TODO: можно добавить пропсы - цыет и размер
const LoaderPage: FC = () => {
  return ReactDOM.createPortal(
    <div className={classes.loaderWrapper}>
      <MoonLoader color="#5a17ff" size={90} />
    </div>,
    document.body
  );
};

export default LoaderPage;
