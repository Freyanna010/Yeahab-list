import type { Question } from '@/entities/question';

type QuestionsStatus = 'loading' | 'empty' | 'success';

interface UseQuestionsStateParams {
  data?: {
    data: Question[];
    total: number;
  };
  isLoading: boolean;
  isFetching: boolean;
  limit: number;
}

export const useQuestionsState = ({
  data,
  isLoading,
  isFetching,
  limit,
}: UseQuestionsStateParams) => {
  const questions = data?.data ?? [];
  const total = data?.total ?? 0;

  const totalPages = Math.ceil(total / limit);

  const status: QuestionsStatus = isLoading
    ? 'loading'
    : questions.length === 0
      ? 'empty'
      : 'success';

  return {
    status,
    questions,
    totalPages,
    isFetching,
  };
};
