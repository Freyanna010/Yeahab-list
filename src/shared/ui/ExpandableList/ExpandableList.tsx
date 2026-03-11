// shared/ui/ExpandableList/ExpandableList.tsx
import { type ReactNode } from 'react';

import { Button } from '../Button';
import classes from './ExpandableList.module.scss';

interface ExpandableListProps {
  title?: string;
  children: ReactNode;
  isExpanded: boolean;
  hasMore: boolean;
  onToggle: () => void;
}

const ExpandableList = (props: ExpandableListProps) => {
  const { title, children, isExpanded, hasMore, onToggle } = props;

  return (
    <div className={classes.container}>
      {title && <h4 className={classes.title}>{title}</h4>}

      <div className={classes.list}>{children}</div>

      {hasMore && (
        <Button
          variant="text"
          onClick={onToggle}
          className={classes.toggleBtn}
          text={isExpanded ? 'Скрыть' : 'Посмотреть все'}
        />
      )}
    </div>
  );
};

export default ExpandableList;
