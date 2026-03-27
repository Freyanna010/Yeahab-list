import {
  ComplexityFilter,
  QuestionSearch,
  RateFilter,
  SkillsFilter,
  SpecializationFilter,
} from '@/features/questions/questionsFilters';
import { Flex } from '@/shared/ui/Flex';

export const QuestionsFilters = () => {
  return (
    <Flex gap="24px" direction="column">
      <QuestionSearch />
      <SkillsFilter />
      <SpecializationFilter />
      <ComplexityFilter />
      <RateFilter />
    </Flex>
  );
};
export default QuestionsFilters;
