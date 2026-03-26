import clsx from 'clsx';
import React from 'react';

import classes from './List.module.scss';

interface QuestionsListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
}
const List = <T,>({ items, renderItem, className }: QuestionsListProps<T>) => {
  if (!items.length) return null;

  return (
    <ul className={clsx(classes.container, className)}>
      {items.map((item, index) => (
        <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
      ))}
    </ul>
  );
};

export default List;
