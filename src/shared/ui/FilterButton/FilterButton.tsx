import { Button } from '@/shared/ui/Button';

import type { Skill } from '../../../entities/skills/model/types';

interface SkillBadgeProps {
  skill: Skill;
  isActive: boolean;
  onClick: () => void;
}
const FilterButton = ({ skill, isActive, onClick }: SkillBadgeProps) => {
  return (
    <Button
      type="button"
      variant={isActive ? 'outlinedActiv' : 'outlinedNoActiv'}
      onClick={onClick}
      icon={skill.imageSrc}
      text={skill.title}
    />
  );
};

export default FilterButton;
