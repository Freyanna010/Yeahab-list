import { PageLoader } from '@/shared/ui/PageLoader';
import type { Question } from '@/entities/question';
import { QuestionListItem } from '@/entities/question/ui/QuestionListItem';

import classes from './QuestionsList.module.scss';
import clsx from 'clsx';

interface QuestionsListProps {
  questions?: Question[];
  isLoading: boolean;
  className?: string;
}

const QuestionsList = ({
  questions,
  isLoading,
  className,
}: QuestionsListProps) => {
  if (isLoading) return <PageLoader />; //TODO: заменить на загрeзку карточек

  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <ul className={clsx(classes.container, className)}>
      {questions.map((question) => (
        <QuestionListItem key={question.id} question={question} />
      ))}
    </ul>
  );
};

export default QuestionsList;
