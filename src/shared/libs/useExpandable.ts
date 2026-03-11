// shared/libs/hooks/useExpandable.ts
import { useState } from 'react';

export const useExpandable = <T>(items: T[] = [], initialLimit: number = 8) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => setIsExpanded((prev) => !prev);

  const visibleItems = isExpanded ? items : items.slice(0, initialLimit);
  const hasMore = items.length > initialLimit;

  return {
    visibleItems,
    isExpanded,
    toggle,
    hasMore,
  };
};
