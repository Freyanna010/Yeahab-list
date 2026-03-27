import { useExpandable } from '@/shared/libs/useExpandable';

import { useQuestionsFilters } from '../../model/useQuestionsFilters';
import { COMPLEXITY_ITEMS } from '../../model/filters';
import { FilterGroup } from '../FilterGroup';

const ComplexityFilter = () => {
  const { complexity, setComplexity } = useQuestionsFilters();
  const selectedIds = complexity?.map(String) || [];

  const toggle = (id: string) => {
    const numId = Number(id);
    setComplexity(
      selectedIds.includes(id)
        ? complexity?.filter((c) => c !== numId) || []
        : [...(complexity || []), numId]
    );
  };

  const {
    visibleItems,
    isExpanded,
    toggle: toggleExpand,
    hasMore,
  } = useExpandable(COMPLEXITY_ITEMS, 5);

  return (
    <FilterGroup
      title="Сложность"
      items={visibleItems}
      selectedIds={selectedIds}
      onToggle={toggle}
      isExpanded={isExpanded}
      hasMore={hasMore}
      onToggleExpand={toggleExpand}
    />
  );
};

export default ComplexityFilter;
