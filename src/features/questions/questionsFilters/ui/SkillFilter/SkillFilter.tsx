import { useSearcUrlParam } from '@/shared/libs/useSearcUrlParam';
import { useGetSkillsQuery } from '@/entities/skills';
import { PageLoader } from '@/shared/ui/PageLoader';
import ExpandableList from '@/shared/ui/ExpandableSection';
import { useExpandable } from '@/shared/libs/useExpandable';
import { useFilterSelection } from '@/shared/libs/useFilterSelection';
import { FilterButton } from '@/shared/ui/FilterButton';

const SkillsFilter = () => {
  const { data: skills, isLoading } = useGetSkillsQuery();

  const [skillsString, setSkillsString] = useSearcUrlParam('skills', 'page', 0);

  const { selectedIds, toggle } = useFilterSelection(
    skillsString,
    setSkillsString,
    true
  );

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
      {visibleItems.map((skill) => (
        <FilterButton
          key={skill.id}
          label={skill.title}
          isActive={selectedIds.includes(String(skill.id))}
          onClick={() => toggle(String(skill.id))}
          icon={skill.imageSrc}
        />
      ))}
    </ExpandableList>
  );
};
export default SkillsFilter;
