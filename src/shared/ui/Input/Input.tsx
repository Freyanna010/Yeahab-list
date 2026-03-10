// shared/ui/Input/Input.tsx
import { type InputHTMLAttributes, type ReactNode } from 'react';
import clsx from 'clsx';

import classes from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  className?: string;
}
const Input = ({ icon, className, ...otherProps }: InputProps) => {
  return (
    <div className={clsx(className, classes.inputWrapper)}>
      {icon && <img src={icon as string} className={classes.inputImg} />}

      <input className={classes.inputField} {...otherProps} />
    </div>
  );
};

export default Input;
