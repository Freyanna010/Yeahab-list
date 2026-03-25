// shared/ui/EmptyState/EmptyState.tsx
import React from 'react';

import { Button, type ButtonProps } from '@/shared/ui/Button';

import classes from './EmptyState.module.scss';
import { Title } from '../Titel';

interface EmptyStateProps {
  title?: string;
  description?: string;
  button?: {
    text: string;
    onClick: () => void;
    variant?: ButtonProps['variant'];
  };
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  button,
}) => {
  return (
    <div className={classes.emptyState}>
      <Title level="h1">{title}</Title>
      <p className={classes.description}>{description}</p>
      {button && (
        <Button
          text={button.text}
          onClick={button.onClick}
          variant={button.variant || 'text'}
          className={classes.button}
        />
      )}
    </div>
  );
};

export default EmptyState;
