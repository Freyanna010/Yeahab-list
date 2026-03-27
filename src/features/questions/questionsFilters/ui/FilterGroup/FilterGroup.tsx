import ExpandableSection from '@/shared/ui/ExpandableSection';
import { FilterButton } from '@/shared/ui/FilterButton';
import { List } from '@/shared/ui/List';

import classes from './FilterGroup.module.scss';

interface FilterItem {
  id: string | number;
  label: string;
  icon?: string;
}

interface FilterGroupProps {
  title: string;
  items: FilterItem[];
  selectedIds: string[]; // Для подсветки активных кнопок
  onToggle: (id: string) => void;
  isExpanded?: boolean;
  hasMore?: boolean;
  onToggleExpand?: () => void;
}
const FilterGroup = ({
  title,
  items,
  selectedIds,
  onToggle,
  isExpanded = false,
  hasMore = false,
  onToggleExpand = () => {},
}: FilterGroupProps) => {
  return (
    <ExpandableSection
      title={title}
      isExpanded={isExpanded}
      hasMore={hasMore}
      onToggle={onToggleExpand}
    >
      <List
        items={items}
        className={classes.filterList}
        renderItem={(item) => (
          <FilterButton
            label={item.label}
            isActive={selectedIds.includes(String(item.id))}
            onClick={() => onToggle(String(item.id))}
            icon={item.icon}
          />
        )}
      />
    </ExpandableSection>
  );
};

export default FilterGroup;
