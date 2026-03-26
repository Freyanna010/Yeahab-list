import clsx from 'clsx';
import React from 'react';

import classes from './List.module.scss';

interface QuestionsListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
}
export const List = <T extends { id: string | number }>({
  items,
  renderItem,
  className,
}: QuestionsListProps<T>) => {
  if (!items.length) return null;

  return (
    <ul className={clsx(classes.container, className)}>
      {items.map((item) => (
        <li key={item.id} className={classes.item}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

export default List;
