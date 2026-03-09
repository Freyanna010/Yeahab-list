import { useGetQuestionsQuery } from '@/entities/question/api/questionsApi';
import { Card } from '@/shared/ui/Card';
import { Title } from '@/shared/ui/Titel';
import { QuestionsList } from '@/widgets/QuestionsList';
import { QUESTIONS_LIMIT } from '@/entities/question/model/constans';
import {
  QuestionsPagination,
  useQuestionsPagination,
} from '@/features/Questions';

import classes from './QuestionsPage.module.scss';

const QuestionsPage = () => {
  const limit = QUESTIONS_LIMIT;

  const { currentPage, changePage } = useQuestionsPagination();

  const { data, isLoading } = useGetQuestionsQuery({
    page: currentPage,
    limit,
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
        <div>тут фильтрация</div>
      </Card>
    </div>
  );
};

export default QuestionsPage;
