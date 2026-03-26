import clsx from 'clsx';

import {
  QuestionListItem,
  SkeletonQuestionItem,
  type Question,
} from '@/entities/question';
import { DEFAULT_SKELETON_COUNT } from '@/shared/constants';

import classes from './QuestionsList.module.scss';

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
  if (isLoading) {
    return (
      <ul className={clsx(classes.container, className)}>
        {Array.from({ length: DEFAULT_SKELETON_COUNT }).map((_, i) => (
          <SkeletonQuestionItem key={i} />
        ))}
      </ul>
    );
  }

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
