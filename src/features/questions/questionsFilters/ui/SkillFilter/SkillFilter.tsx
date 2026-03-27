import { useGetSkillsQuery } from '@/entities/skills';
import { PageLoader } from '@/shared/ui/PageLoader';
import { useExpandable } from '@/shared/libs/useExpandable';

import { useQuestionsFilters } from '../../model/useQuestionsFilters';
import { FilterGroup } from '../FilterGroup';

const SkillsFilter = () => {
  const { data: skills, isLoading } = useGetSkillsQuery();
  const { skills: selected, setSkills } = useQuestionsFilters();
  const selectedIds = selected || [];

  const toggle = (id: string) => {
    setSkills(
      selectedIds.includes(id)
        ? selectedIds.filter((s) => s !== id)
        : [...selectedIds, id]
    );
  };

  const {
    visibleItems,
    isExpanded,
    toggle: toggleExpand,
    hasMore,
  } = useExpandable(skills?.data, 8);

  const items =
    visibleItems?.map((s) => ({
      id: s.id,
      label: s.title,
      icon: s.imageSrc,
    })) || [];

  if (isLoading) return <PageLoader />;

  return (
    <FilterGroup
      title="Навыки"
      items={items}
      selectedIds={selectedIds}
      onToggle={toggle}
      isExpanded={isExpanded}
      hasMore={hasMore}
      onToggleExpand={toggleExpand}
    />
  );
};

export default SkillsFilter;
