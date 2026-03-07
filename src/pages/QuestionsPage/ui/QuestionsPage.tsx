import { useGetQuestionsQuery } from '@/entities/question/api/questionsApi';
import { Card } from '@/shared/ui/Card';
import { Title } from '@/shared/ui/Titel';
import { PageLoader } from '@/shared/ui/PageLoader';
import { Accordion } from '@/shared/ui/Accordion';

import classes from './QuestionsPage.module.scss';

const QuestionsPage = () => {
  const { data, isLoading } = useGetQuestionsQuery({ page: 1 });

  if (isLoading) return <PageLoader />;

  if (!data) return null;

  return (
    <div className={classes.flex}>
      <Card title={<Title>Вопросы React, JavaScript</Title>}>
        <div>
          <ul>
            {data?.data.map((question) => (
              <li>
                <Accordion title={<Title level="h2">{question.title}</Title>}>
                  {question.description}
                </Accordion>
              </li>
            ))}
          </ul>
        </div>
      </Card>
      <Card size="small">
        <div>ddddd</div>
      </Card>
    </div>
  );
};

export default QuestionsPage;
