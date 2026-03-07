import { useGetQuestionsQuery } from '@/entities/question/api/questionsApi';
import { Card } from '@/shared/ui/Card';
import { Title } from '@/shared/ui/Titel';
import { QuestionsList } from '@/widgets/QuestionsList';

import classes from './QuestionsPage.module.scss';

const QuestionsPage = () => {
  const { data, isLoading } = useGetQuestionsQuery({ page: 1 });

  return (
    <div className={classes.flex}>
      <Card title={<Title>Вопросы React, JavaScript</Title>}>
        <QuestionsList questions={data?.data} isLoading={isLoading} />

        <div>тут пагинация</div>
      </Card>
      <Card size="small">
        <div>тут фильтрация</div>
      </Card>
    </div>
  );
};

export default QuestionsPage;
