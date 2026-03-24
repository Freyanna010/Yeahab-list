import { useGetSpecializationsQuery } from '@/entities/specializations';
import { useExpandable } from '@/shared/libs/useExpandable';
import { useFilterSelection } from '@/shared/libs/useFilterSelection';
import { useSearcUrlParam } from '@/shared/libs/useSearcUrlParam';
import ExpandableList from '@/shared/ui/ExpandableSection';
import { FilterButton } from '@/shared/ui/FilterButton';

const SpecializationFilter = () => {
  const { data: specializations } = useGetSpecializationsQuery();
  const [value, setValue] = useSearcUrlParam('specializationId', 'page', 0);

  const { selectedIds, toggle } = useFilterSelection(value, setValue, false);

  const {
    visibleItems,
    isExpanded,
    toggle: toggleExpand,
    hasMore,
  } = useExpandable(specializations?.data, 5);

  return (
    <ExpandableList
      title="Специализация"
      isExpanded={isExpanded}
      hasMore={hasMore}
      onToggle={toggleExpand}
    >
      {visibleItems.map((spec) => (
        <FilterButton
          key={spec.id}
          label={spec.title}
          isActive={selectedIds.includes(String(spec.id))}
          onClick={() => toggle(String(spec.id))}
        />
      ))}
    </ExpandableList>
  );
};

export default SpecializationFilter;
