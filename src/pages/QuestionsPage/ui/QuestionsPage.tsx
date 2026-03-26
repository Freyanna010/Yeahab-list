import { useMediaQuery } from 'react-responsive';

import { useGetQuestionsQuery } from '@/entities/question/api/questionsApi';
import { Card } from '@/shared/ui/Card';
import { Title } from '@/shared/ui/Titel';
import { QuestionsList } from '@/widgets/QuestionsList';
import { useQuestionsPagination } from '@/features/questions/questionsPagination';
import { useQuestionsFilters } from '@/features/questions/questionsFilters';
import { QuestionsFilters } from '@/widgets/QuestonsFilters';
import { Flex } from '@/shared/ui/Flex';
import { useQuestionsState } from '@/shared/libs';

const QuestionsPage = () => {
  const { currentPage, changePage } = useQuestionsPagination();

  const {
    limit,
    searchQuery,
    skills,
    specializationId,
    complexity,
    rate,
    resetFilters,
  } = useQuestionsFilters();

  const { data, isLoading, isFetching } = useGetQuestionsQuery({
    page: currentPage,
    limit,
    titleOrDescription: searchQuery,
    skills,
    skillFilterMode: skills ? 'ANY' : undefined,
    specializationId,
    complexity,
    rate,
  });

  const { status, questions, totalPages } = useQuestionsState({
    data,
    isLoading,
    isFetching,
    limit,
  });

  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <Flex gap="24px" direction="row">
      <Card title={<Title>Вопросы React, JavaScript</Title>}>
        <QuestionsList
          isLoading={isLoading || isFetching}
          status={status}
          questions={questions}
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={changePage}
          onResetFilters={resetFilters}
        />
      </Card>

      {isDesktop && (
        <Card size="small">
          <QuestionsFilters />
        </Card>
      )}
    </Flex>
  );
};

export default QuestionsPage;
