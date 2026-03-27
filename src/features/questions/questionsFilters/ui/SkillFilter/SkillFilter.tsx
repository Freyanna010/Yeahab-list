import { useGetSkillsQuery } from '@/entities/skills';
import { PageLoader } from '@/shared/ui/PageLoader';
import ExpandableList from '@/shared/ui/ExpandableSection';
import { useExpandable } from '@/shared/libs/useExpandable';
import { FilterButton } from '@/shared/ui/FilterButton';
import { Flex } from '@/shared/ui/Flex';

import { useQuestionsFilters } from '../../model/useQuestionsFilters';

const SkillsFilter = () => {
  const { data: skills, isLoading } = useGetSkillsQuery();

  const { skills: selectedSkills, setSkills } = useQuestionsFilters();

  const selectedIds = selectedSkills || [];

  //TODO: вынести хук
  const toggle = (id: string) => {
    if (selectedIds.includes(id)) {
      setSkills(selectedIds.filter((s) => s !== id));
    } else {
      setSkills([...selectedIds, id]);
    }
  };
  const {
    visibleItems,
    isExpanded,
    toggle: toggleExpand,
    hasMore,
  } = useExpandable(skills?.data, 8);

  if (isLoading) return <PageLoader />;

  return (
    <ExpandableList
      title="Навыки"
      isExpanded={isExpanded}
      hasMore={hasMore}
      onToggle={toggleExpand}
    >
      <Flex gap="8px" direction="row" wrap="wrap">
        {visibleItems.map((skill) => (
          <FilterButton
            key={skill.id}
            label={skill.title}
            isActive={selectedIds.includes(String(skill.id))}
            onClick={() => toggle(String(skill.id))}
            icon={skill.imageSrc}
          />
        ))}
      </Flex>
    </ExpandableList>
  );
};
export default SkillsFilter;
