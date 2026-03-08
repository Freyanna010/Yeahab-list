import { type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Link, type LinkProps } from 'react-router-dom';

import classes from './Button.module.scss';

type ButtonVariant = 'filled' | 'outlined' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonShape = 'default' | 'circle';
type IconPlacement = 'start' | 'end';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  loading?: boolean;
  icon?: React.ReactNode;
  text?: string | number;
  iconPlacement?: IconPlacement;
  toLink?: string;
}

const Button = (props: ButtonProps) => {
  const {
    variant = 'filled',
    size = 'medium',
    shape = 'default',
    loading = false,
    icon,
    text,
    iconPlacement = 'start',
    className,
    disabled,
    type = 'button',
    toLink,
    ...rest
  } = props;

  const hasIcon = !!icon;
  const hasText = !!text || text === 0;

  const buttonClasses = clsx(
    classes.button,
    classes[variant],
    classes[size],
    classes[shape],
    {
      [classes.loading]: loading,
      [classes.disabled]: disabled,
      [classes.withIcon]: hasIcon && hasText,
      [classes.onlyIcon]: hasIcon && !hasText,
      [classes.iconStart]: hasIcon && hasText && iconPlacement === 'start',
      [classes.iconEnd]: hasIcon && hasText && iconPlacement === 'end',
    },
    className
  );

  const renderContent = () => {
    if (hasIcon && !hasText) {
      return <span className={classes.icon}>{icon}</span>;
    }

    if (hasIcon && hasText) {
      return (
        <div className={classes.row}>
          {iconPlacement === 'start' && (
            <img src={icon as string} alt="" className={classes.icon} />
          )}
          <span className={classes.text}>{text}</span>
          {iconPlacement === 'end' && (
            <img src={icon as string} alt="" className={classes.icon} />
          )}
        </div>
      );
    }

    return <span className={classes.text}>{text}</span>;
  };

  if (toLink) {
    return (
      <Link
        to={toLink}
        className={buttonClasses}
        {...(rest as Omit<LinkProps, 'to'>)}
      >
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...rest}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
