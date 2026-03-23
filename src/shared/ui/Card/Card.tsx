import clsx from 'clsx';

import classes from './Card.module.scss';
import type {
  AlignItems,
  CardSize,
  FlexDirection,
  JustifyContent,
} from './types';

interface CardProps {
  size?: CardSize;
  children: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
  gap?: string;
  padding?: string;
  direction?: FlexDirection;
  align?: AlignItems;
  justify?: JustifyContent;
}

const Card = (props: CardProps) => {
  const {
    size = 'large',
    children,
    className,
    title,
    padding,
    gap,
    align,
    justify,
    direction,
  } = props;

  return (
    <div className={clsx(classes.card, classes[size], className)}>
      {title && <div className={classes.cardTitle}>{title}</div>}
      <div
        className={classes.content}
        style={
          {
            '--card-padding': padding,
            '--card-gap': gap,
            '--card-align': align,
            '--card-justify': justify,
            '--card-direction': direction,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
