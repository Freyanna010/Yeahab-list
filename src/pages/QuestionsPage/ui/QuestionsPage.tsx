import { useMediaQuery } from 'react-responsive';

import { useGetQuestionsQuery } from '@/entities/question/api/questionsApi';
import { Card } from '@/shared/ui/Card';
import { Title } from '@/shared/ui/Titel';
import { QuestionsList } from '@/widgets/QuestionsList';
import {
  QuestionsPagination,
  useQuestionsPagination,
} from '@/features/questions/questionsPagination';
import { QuestionsFilters } from '@/widgets/QuestonsFilters';
import { useQuestionsFilters } from '@/features/questions/questionsFilters';

import classes from './QuestionsPage.module.scss';

const QuestionsPage = () => {
  const { currentPage, changePage } = useQuestionsPagination();

  const { limit, searchQuery, skills, specializationId, complexity, rate } =
    useQuestionsFilters();

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
        <div>
          <p>По вашему запросу ничего не найдено 😪</p>
          {/* TODO: вынести и добавить кнопку */}
        </div>
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
    <div className={classes.flex}>
      <Card
        title={<Title>Вопросы React, JavaScript</Title>}
        className={classes.questionsContainer}
      >
        <div className={classes.questionsContainer}>{renderMainContent()}</div>
      </Card>

      {isDesktop && (
        <Card size="small">
          <QuestionsFilters />
        </Card>
      )}
    </div>
  );
};

export default QuestionsPage;
