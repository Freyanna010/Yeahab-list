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

  const { data, isLoading } = useGetQuestionsQuery({
    page: currentPage,
    limit,
    titleOrDescription: searchQuery,
    skills,
    skillFilterMode: skills ? 'ANY' : undefined,
  });

  const questions = data?.data ?? [];
  const totalPages = Math.ceil((data?.total ?? 0) / limit);

  return (
    <div className={classes.flex}>
      <Card
        title={<Title>Вопросы React, JavaScript</Title>}
        className={classes.questionsContainer}
      >
        <div className={classes.questionsContainer}>
          <QuestionsList
            questions={questions}
            isLoading={isLoading}
            className={classes.questionsList}
          />

          <QuestionsPagination
            currentPage={currentPage}
            totalPages={totalPages}
            changePage={changePage}
          />
        </div>
      </Card>
      <Card size="small">
        <div>
          <QuestionsFilters />
        </div>
      </Card>
    </div>
  );
};

export default QuestionsPage;
