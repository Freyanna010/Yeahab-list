import type { ReactNode } from 'react';

import { useSearcUrlParam } from '@/shared/libs/useSearcUrlParam';
import { useFilterSelection } from '@/shared/libs/useFilterSelection';
import { useExpandable } from '@/shared/libs/useExpandable';
import { PageLoader } from '@/shared/ui/PageLoader';
import ExpandableSection from '@/shared/ui/ExpandableSection';
import { TagList } from '@/shared/ui/TagList';

interface FilterGroupProps<T> {
  title: string;
  queryParam: string;
  items?: T[];
  isLoading?: boolean;
  isMulti?: boolean;
  limit?: number;
  getId: (item: T) => string | number;

  renderItem: (
    item: T,
    isSelected: boolean,
    toggle: (id: string) => void
  ) => ReactNode;
}

const FilterGroup = <T,>(props: FilterGroupProps<T>) => {
  const {
    title,
    queryParam,
    items = [],
    isLoading = false,
    isMulti = false,
    limit = 8,
    getId,
    renderItem,
  } = props;

  const [value, setValue] = useSearcUrlParam(queryParam, 'page', 0);
  const { selectedIds, toggle } = useFilterSelection(value, setValue, isMulti);

  const {
    visibleItems,
    isExpanded,
    toggle: toggleExpand,
    hasMore,
  } = useExpandable(items, limit);

  if (isLoading) return <PageLoader />;
  if (!items.length && !isLoading) return null;

  return (
    <ExpandableSection
      title={title}
      isExpanded={isExpanded}
      hasMore={hasMore}
      onToggle={toggleExpand}
    >
      <TagList>
        {visibleItems.map((item) => {
          const id = String(getId(item));
          const isSelected = selectedIds.includes(id);
          return renderItem(item, isSelected, toggle);
        })}
      </TagList>
    </ExpandableSection>
  );
};

export default FilterGroup;
