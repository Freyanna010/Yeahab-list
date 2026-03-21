import { useExpandable } from '@/shared/libs/useExpandable';
import { useFilterSelection } from '@/shared/libs/useFilterSelection';
import { useSearcUrlParam } from '@/shared/libs/useSearcUrlParam';
import ExpandableList from '@/shared/ui/ExpandableList';
import { FilterButton } from '@/shared/ui/FilterButton';
import { PageLoader } from '@/shared/ui/PageLoader';

interface FilterGroupProps<T> {
  title: string;
  queryParam: string;
  items?: T[];
  isLoading?: boolean;
  isMulti?: boolean;
  limit?: number;
  getLabel: (item: T) => string;
  getId: (item: T) => string | number;
  getIcon?: (item: T) => string | undefined;
}

const FilterGroup = <T,>(props: FilterGroupProps<T>) => {
  const {
    title,
    queryParam,
    items = [],
    isLoading = false,
    isMulti = false,
    limit = 8,
    getLabel,
    getId,
    getIcon,
  } = props;

  const [value, setValue] = useSearcUrlParam(queryParam, 'page', 0);
  const { selectedIds, toggle } = useFilterSelection(value, setValue, isMulti);

  const {
    visibleItems,
    isExpanded,
    toggle: toggleExpand,
    hasMore,
  } = useExpandable(items, limit);

  if (isLoading) return <PageLoader />; //TODO: добавить скелетон
  if (!items.length && !isLoading) return null;

  return (
    <ExpandableList
      title={title}
      isExpanded={isExpanded}
      hasMore={hasMore}
      onToggle={toggleExpand}
    >
      {visibleItems.map((item) => {
        const id = String(getId(item));
        return (
          <FilterButton
            key={id}
            label={getLabel(item)}
            icon={getIcon?.(item)}
            isActive={selectedIds.includes(id)}
            onClick={() => toggle(id)}
          />
        );
      })}
    </ExpandableList>
  );
};

export default FilterGroup;
