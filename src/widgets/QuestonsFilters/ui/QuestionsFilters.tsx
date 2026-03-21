import { useGetSpecializationsQuery } from '@/entities/specializations';
import { useGetSkillsQuery } from '@/entities/skills';
import {
  COMPLEXITY_ITEMS,
  FilterGroup,
  RATE_ITEMS,
} from '@/features/questions/questionsFilters';

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
        getLabel={(s) => s.title}
        getId={(s) => s.id}
        getIcon={(s) => s.imageSrc}
      />

      <FilterGroup
        title="Специализация"
        queryParam="specializationId"
        items={specializations?.data}
        isLoading={isSpecsLoading}
        getLabel={(spec) => spec.title}
        getId={(spec) => spec.id}
      />

      <FilterGroup
        title="Сложность"
        queryParam="complexity"
        items={COMPLEXITY_ITEMS}
        getLabel={(c) => c.label}
        getId={(c) => c.id}
      />

      <FilterGroup
        title="Рейтинг"
        queryParam="rate"
        items={RATE_ITEMS}
        getLabel={(r) => r.label}
        getId={(r) => r.id}
      />
    </div>
  );
};

export default QuestionsFilters;
