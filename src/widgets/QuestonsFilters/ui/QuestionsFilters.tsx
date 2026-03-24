import { useGetSpecializationsQuery } from '@/entities/specializations';
import { useGetSkillsQuery } from '@/entities/skills';
import {
  COMPLEXITY_ITEMS,
  FilterGroup,
  RATE_ITEMS,
} from '@/features/questions/questionsFilters';
import { FilterButton } from '@/shared/ui/FilterButton';

import classes from './QuestionsFilters.module.scss';

export const QuestionsFilters = () => {
  const { data: skills, isLoading: isSkillsLoading } = useGetSkillsQuery();
  const { data: specializations, isLoading: isSpecsLoading } =
    useGetSpecializationsQuery();

  return (
    <div className={classes.filtersContainer}>
      <FilterGroup
        title="Навыки"
        queryParam="skills"
        items={skills?.data}
        isLoading={isSkillsLoading}
        isMulti={true}
        getId={(skill) => skill.id}
        renderItem={(skill, isSelected, toggle) => (
          <FilterButton
            label={skill.title}
            icon={skill.imageSrc}
            isActive={isSelected}
            onClick={() => toggle(String(skill.id))}
          />
        )}
      />

      <FilterGroup
        title="Специализация"
        queryParam="specializationId"
        items={specializations?.data}
        isLoading={isSpecsLoading}
        getId={(spec) => spec.id}
        renderItem={(spec, isSelected, toggle) => (
          <FilterButton
            label={spec.title}
            isActive={isSelected}
            onClick={() => toggle(String(spec.id))}
          />
        )}
      />

      <FilterGroup
        title="Сложность"
        queryParam="complexity"
        items={COMPLEXITY_ITEMS}
        getId={(item) => item.id}
        renderItem={(item, isSelected, toggle) => (
          <FilterButton
            label={item.label}
            isActive={isSelected}
            onClick={() => toggle(item.id)}
          />
        )}
      />

      <FilterGroup
        title="Рейтинг"
        queryParam="rate"
        items={RATE_ITEMS}
        getId={(item) => item.id}
        renderItem={(item, isSelected, toggle) => (
          <FilterButton
            label={item.label}
            isActive={isSelected}
            onClick={() => toggle(item.id)}
          />
        )}
      />
    </div>
  );
};
export default QuestionsFilters;
