import { useSearchParam } from '@/shared/libs/useSearchParam';
import { SkillButton, useGetSkillsQuery } from '@/entities/skills';
import { PageLoader } from '@/shared/ui/PageLoader';
import ExpandableList from '@/shared/ui/ExpandableList';
import { useExpandable } from '@/shared/libs/useExpandable';

const SkillsFilter = () => {
  const { data: skills, isLoading } = useGetSkillsQuery();

  const { visibleItems, isExpanded, toggle, hasMore } = useExpandable(
    skills?.data,
    8
  );

  const [skillsString, setSkillsString] = useSearchParam('skills');

  const selectedSkills = skillsString ? skillsString.split(',') : [];

  const handleToggle = (id: string) => {
    const isSelected = selectedSkills.includes(id);
    const newSelection = isSelected
      ? selectedSkills.filter((skill) => skill !== id)
      : [...selectedSkills, id];

    setSkillsString(newSelection.join(','));
  };

  if (isLoading) return <PageLoader />;

  return (
    <ExpandableList
      title="Навыки"
      isExpanded={isExpanded}
      hasMore={hasMore}
      onToggle={toggle}
    >
      {visibleItems.map((skill) => (
        <SkillButton
          key={skill.id}
          skill={skill}
          isActive={selectedSkills.includes(String(skill.id))}
          onClick={() => handleToggle(String(skill.id))}
        />
      ))}
    </ExpandableList>
  );
};

export default SkillsFilter;
