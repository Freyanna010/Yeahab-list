import React, { type ReactNode } from 'react';

import { Flex } from '@/shared/ui/Flex';

interface TagListProps {
  children: ReactNode;
  className?: string;
}

const TagList = ({ children, className }: TagListProps) => {
  return (
    <Flex gap="8px" direction="row">
      <ul className={className}>
        {React.Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </ul>
    </Flex>
  );
};

export default TagList;
