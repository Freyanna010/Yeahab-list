import { useSearchParams } from 'react-router-dom';

import { QUESTIONS_LIMIT } from '@/entities/question/model/constans';

export const useQuestionsFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('search') || undefined;

  const skillsQuery = searchParams.get('skills');
  const skills = skillsQuery
    ? skillsQuery.split(',').filter(Boolean)
    : undefined;

  const specQuery = searchParams.get('specializationId');
  const specializationId = specQuery ? Number(specQuery) : undefined;

  const complexityQuery = searchParams.get('complexity');
  const complexity = complexityQuery
    ? complexityQuery
        .split(',')
        .map(Number)
        .filter((n) => !isNaN(n))
    : undefined;

  const rateQuery = searchParams.get('rate');
  const rate = rateQuery ? Number(rateQuery) : undefined;

  const resetFilters = () => setSearchParams({});

  return {
    limit: QUESTIONS_LIMIT,
    searchQuery,
    skills,
    specializationId,
    complexity,
    rate,
    resetFilters,
  };
};
