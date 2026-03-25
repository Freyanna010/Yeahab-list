import { useMediaQuery } from 'react-responsive';

import { useGetQuestionsQuery } from '@/entities/question/api/questionsApi';
import { Card } from '@/shared/ui/Card';
import { Title } from '@/shared/ui/Titel';
import { QuestionsList } from '@/widgets/QuestionsList';
import {
  QuestionsPagination,
  useQuestionsPagination,
} from '@/features/questions/questionsPagination';
import { useQuestionsFilters } from '@/features/questions/questionsFilters';
import { EmptyState } from '@/shared/ui/EmptyState';
import { QuestionsFilters } from '@/widgets/QuestonsFilters';
import { Flex } from '@/shared/ui/Flex';

//TODO: добавить Flex и праметры карточки
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

  const questions = data?.data ?? [];
  const totalPages = Math.ceil((data?.total ?? 0) / limit);

  const isNotFound = !isLoading && !isFetching && questions.length === 0;
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const renderMainContent = () => {
    if (isNotFound) {
      return (
        <EmptyState
          title="По вашему запросу ничего не найдено 😪"
          description="Попробуйте изменить параметры поиска или фильтры"
          button={{
            text: 'Сбросить фильтры',
            onClick: resetFilters,
          }}
        />
      );
    }

    return (
      <>
        <QuestionsList
          questions={questions}
          isLoading={isLoading || isFetching}
          className={classes.questionsList}
        />
        {totalPages > 1 && (
          <QuestionsPagination
            currentPage={currentPage}
            totalPages={totalPages}
            changePage={changePage}
          />
        )}
      </>
    );
  };

  return (
    <Flex gap="24px" direction="row">
      <Card
        direction="column"
        align="center"
        title={<Title>Вопросы React, JavaScript</Title>}
      >
        <div className={classes.questionsContainer}>{renderMainContent()}</div>
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
