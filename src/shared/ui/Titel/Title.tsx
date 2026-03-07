import clsx from 'clsx';

import classes from './Title.module.scss';

type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
  level?: TitleLevel;
  children: React.ReactNode;
  className?: string;
  weight?: 400 | 500 | 600;
  color?: string;
}

const Title = ({
  level = 'h1',
  children,
  className,
  weight = 500,
  color,
}: TitleProps) => {
  const Component = level;
  return (
    <Component
      className={clsx(classes[Component], className)}
      style={{
        fontWeight: weight,
        color: color,
      }}
    >
      {children}
    </Component>
  );
};

export default Title;
