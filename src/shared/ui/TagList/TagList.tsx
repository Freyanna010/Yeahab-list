import React, { type ReactNode } from 'react';

import classes from './TagList.module.scss';

interface TagListProps {
  children: ReactNode;
}

const TagList = ({ children }: TagListProps) => {
  return (
    <ul className={classes.list}>
      {React.Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ul>
  );
};

export default TagList;
