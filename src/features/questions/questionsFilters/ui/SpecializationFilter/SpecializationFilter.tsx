import { useGetSpecializationsQuery } from '@/entities/specializations';
import { useExpandable } from '@/shared/libs/useExpandable';
import ExpandableList from '@/shared/ui/ExpandableSection';
import { FilterButton } from '@/shared/ui/FilterButton';
import { Flex } from '@/shared/ui/Flex';

import { useQuestionsFilters } from '../../model/useQuestionsFilters';

const SpecializationFilter = () => {
  const { data: specializations } = useGetSpecializationsQuery();
  const { specializationId, setSpecializationId } = useQuestionsFilters();

  const selectedIds = specializationId ? [String(specializationId)] : [];

  //TODO: вынести в хук
  const toggle = (id: string) => {
    const numId = Number(id);
    if (selectedIds.includes(id)) {
      setSpecializationId(undefined);
    } else {
      setSpecializationId(numId);
    }
  };

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
      <Flex gap="8px" direction="row" wrap="wrap">
        {visibleItems.map((spec) => (
          <FilterButton
            key={spec.id}
            label={spec.title}
            isActive={selectedIds.includes(String(spec.id))}
            onClick={() => toggle(String(spec.id))}
          />
        ))}
      </Flex>
    </ExpandableList>
  );
};

export default SpecializationFilter;
