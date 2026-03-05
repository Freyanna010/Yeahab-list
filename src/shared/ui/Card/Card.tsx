import clsx from 'clsx';

import classes from './Card.module.scss';

type CardSize = 'large' | 'small';

interface CardProps {
  size?: CardSize;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ size = 'large', children, className }: CardProps) => {
  return (
    <div className={clsx(classes.card, classes[size], className)}>
      {children}
    </div>
  );
};

export default Card;
