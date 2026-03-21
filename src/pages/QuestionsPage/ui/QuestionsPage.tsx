import { useSearchParams } from 'react-router-dom';

import { useGetQuestionsQuery } from '@/entities/question/api/questionsApi';
import { Card } from '@/shared/ui/Card';
import { Title } from '@/shared/ui/Titel';
import { QuestionsList } from '@/widgets/QuestionsList';
import { QUESTIONS_LIMIT } from '@/entities/question/model/constans';
import {
  QuestionsPagination,
  useQuestionsPagination,
} from '@/features/questions/questionsPagination';
import { QuestionsFilters } from '@/widgets/QuestonsFilters';

import classes from './QuestionsPage.module.scss';

const QuestionsPage = () => {
  const limit = QUESTIONS_LIMIT;

  const [searchParams] = useSearchParams();
  const { currentPage, changePage } = useQuestionsPagination();

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
      <Card size="small">
        <QuestionsFilters />
      </Card>
    </div>
  );
};

export default QuestionsPage;
