import clsx from 'clsx';

import classes from './Flex.module.scss';
import type {
  AlignItems,
  FlexDirection,
  FlexWrap,
  JustifyContent,
} from './types';

interface FlexProps {
  children: React.ReactNode;
  className?: string;
  direction?: FlexDirection;
  gap?: string;
  align?: AlignItems;
  justify?: JustifyContent;
  wrap?: FlexWrap;
}

const Flex = (props: FlexProps) => {
  const { children, className, direction, gap, align, justify, wrap } = props;

  return (
    <div
      className={clsx(classes.flex, className)}
      style={
        {
          '--flex-direction': direction,
          '--flex-gap': gap,
          '--flex-align': align,
          '--flex-justify': justify,
          '--flex-wrap': wrap,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default Flex;
