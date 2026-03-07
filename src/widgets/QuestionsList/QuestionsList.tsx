import { Accordion } from '@/shared/ui/Accordion';
import { PageLoader } from '@/shared/ui/PageLoader';
import { Title } from '@/shared/ui/Titel';

import classes from './QuestionsList.module.scss';

interface Question {
  id: number;
  title: string;
  description: string;
}

interface QuestionsListProps {
  questions?: Question[];
  isLoading: boolean;
}

const QuestionsList = ({ questions, isLoading }: QuestionsListProps) => {
  if (isLoading) return <PageLoader />;

  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <ul className={classes.container}>
      {questions.map((question) => (
        <li key={question.id}>
          <Accordion
            title={
              <Title level="h2" className={classes.title}>
                {question.title}
              </Title>
            }
          >
            {question.description}
          </Accordion>
        </li>
      ))}
    </ul>
  );
};

export default QuestionsList;
