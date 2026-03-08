import { PageLoader } from '@/shared/ui/PageLoader';
import type { Question } from '@/entities/question';
import { QuestionListItem } from '@/entities/question/ui/QuestionListItem';

import classes from './QuestionsList.module.scss';

interface QuestionsListProps {
  questions?: Question[];
  isLoading: boolean;
}

const QuestionsList = ({ questions, isLoading }: QuestionsListProps) => {
  if (isLoading) return <PageLoader />; //TODO: заменить на загрeзку карточек

  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <ul className={classes.container}>
      {questions.map((question) => (
        <QuestionListItem key={question.id} question={question} />
      ))}
    </ul>
  );
};

export default QuestionsList;
