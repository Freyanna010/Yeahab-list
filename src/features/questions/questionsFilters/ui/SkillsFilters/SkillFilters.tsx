import { useSearchParam } from '@/shared/libs/useSearchParam';
import { SkillButton, useGetSkillsQuery } from '@/entities/skills';
import { PageLoader } from '@/shared/ui/PageLoader';

const SkillsFilter = () => {
  const { data: skills, isLoading } = useGetSkillsQuery();

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
    <>
      {skills?.data.map((skill) => (
        <SkillButton
          key={skill.id}
          skill={skill}
          isActive={selectedSkills.includes(String(skill.id))}
          onClick={() => handleToggle(String(skill.id))}
        />
      ))}
    </>
  );
};

export default SkillsFilter;
