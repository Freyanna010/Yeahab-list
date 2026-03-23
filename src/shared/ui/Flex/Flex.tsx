import clsx from 'clsx';

import classes from './Flex.module.scss';
import type { AlignItems, FlexDirection, JustifyContent } from './types';

interface FlexProps {
  children: React.ReactNode;
  className?: string;
  direction?: FlexDirection;
  gap?: string;
  align?: AlignItems;
  justify?: JustifyContent;
}

const Flex = (props: FlexProps) => {
  const { children, className, direction, gap, align, justify } = props;

  return (
    <div
      className={clsx(classes.flex, className)}
      style={
        {
          '--flex-direction': direction,
          '--flex-gap': gap,
          '--flex-align': align,
          '--flex-justify': justify,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default Flex;
