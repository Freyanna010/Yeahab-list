import { type ReactNode } from 'react';
import clsx from 'clsx';

import classes from './List.module.scss';

interface ListSkeletonProps {
  renderSkeleton: (index: number) => ReactNode;
  count?: number;
  className?: string;
}

export const ListSkeleton = ({
  renderSkeleton,
  count = 5,
  className,
}: ListSkeletonProps) => {
  return (
    <ul className={clsx(classes.container, className)}>
      {Array.from({ length: count }).map((_, i) => (
        <li key={`skeleton-${i}`} className={classes.item}>
          {renderSkeleton(i)}
        </li>
      ))}
    </ul>
  );
};

export default ListSkeleton;
