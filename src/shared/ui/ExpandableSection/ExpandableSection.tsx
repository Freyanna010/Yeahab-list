import { type ReactNode } from 'react';

import { Button } from '../Button';
import classes from './ExpandableSection.module.scss';
import { Title } from '../Titel';

interface ExpandableSectiontProps {
  title?: string;
  children: ReactNode;
  isExpanded: boolean;
  hasMore: boolean;
  onToggle?: () => void;
}

const ExpandableSection = (props: ExpandableSectiontProps) => {
  const { title, children, isExpanded, hasMore, onToggle } = props;

  return (
    <div className={classes.container}>
      {title && <Title level="h3">{title}</Title>}

      <div className={classes.content}>{children}</div>

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

export default ExpandableSection;
