import ExpandableSection from '@/shared/ui/ExpandableSection';
import { FilterButton } from '@/shared/ui/FilterButton';
import { useExpandable } from '@/shared/libs/useExpandable';
import { Flex } from '@/shared/ui/Flex';

import { useQuestionsFilters } from '../../model/useQuestionsFilters';
import { COMPLEXITY_ITEMS } from '../../model/filters';

const ComplexityFilter = () => {
  const { complexity: selectedComplexity, setComplexity } =
    useQuestionsFilters();
  const selectedIds = selectedComplexity?.map(String) || [];

  //TODO: хук
  const toggle = (id: string) => {
    const numId = Number(id);
    if (selectedIds.includes(id)) {
      setComplexity(selectedComplexity?.filter((c) => c !== numId) || []);
    } else {
      setComplexity([...(selectedComplexity || []), numId]);
    }
  };

  const {
    visibleItems,
    isExpanded,
    toggle: toggleExpand,
    hasMore,
  } = useExpandable(COMPLEXITY_ITEMS, 5);

  return (
    <ExpandableSection
      title="Сложность"
      isExpanded={isExpanded}
      hasMore={hasMore}
      onToggle={toggleExpand}
    >
      <Flex gap="8px" direction="row" wrap="wrap">
        {visibleItems.map((item) => (
          <FilterButton
            key={item.id}
            label={item.label}
            isActive={selectedIds.includes(item.id)}
            onClick={() => toggle(item.id)}
          />
        ))}
      </Flex>
    </ExpandableSection>
  );
};

export default ComplexityFilter;
