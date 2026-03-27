import { useGetSpecializationsQuery } from '@/entities/specializations';
import { useExpandable } from '@/shared/libs/useExpandable';

import { useQuestionsFilters } from '../../model/useQuestionsFilters';
import { FilterGroup } from '../FilterGroup';

const SpecializationFilter = () => {
  const { data: spec } = useGetSpecializationsQuery();
  const { specializationId, setSpecializationId } = useQuestionsFilters();
  const selectedIds = specializationId ? [String(specializationId)] : [];

  const toggle = (id: string) => {
    setSpecializationId(selectedIds.includes(id) ? undefined : Number(id));
  };

  const {
    visibleItems,
    isExpanded,
    toggle: toggleExpand,
    hasMore,
  } = useExpandable(spec?.data, 5);

  const items = visibleItems?.map((s) => ({ id: s.id, label: s.title })) || [];

  return (
    <FilterGroup
      title="Специализация"
      items={items}
      selectedIds={selectedIds}
      onToggle={toggle}
      isExpanded={isExpanded}
      hasMore={hasMore}
      onToggleExpand={toggleExpand}
    />
  );
};

export default SpecializationFilter;
