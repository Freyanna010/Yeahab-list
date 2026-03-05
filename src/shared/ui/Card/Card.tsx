import clsx from 'clsx';

import classes from './Card.module.scss';

type CardSize = 'large' | 'small';

interface CardProps {
  size?: CardSize;
  children: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
}

const Card = ({ size = 'large', children, className, title }: CardProps) => {
  return (
    <div className={clsx(classes.card, classes[size], className)}>
      {title && <div className={classes.cardTitle}>{title}</div>}
      {children}
    </div>
  );
};

export default Card;
