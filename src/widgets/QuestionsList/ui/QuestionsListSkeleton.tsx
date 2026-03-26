import clsx from 'clsx';

import { SkeletonQuestionItem } from '@/entities/question';
import { DEFAULT_SKELETON_COUNT } from '@/shared/constants';

import classes from './QuestionsList.module.scss';

interface QuestionsListSkeletonProps {
  className?: string;
  count?: number;
}

const QuestionsListSkeleton = ({
  className,
  count = DEFAULT_SKELETON_COUNT,
}: QuestionsListSkeletonProps) => {
  return (
    <ul className={clsx(classes.container, className)}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonQuestionItem key={`skeleton-${i}`} />
      ))}
    </ul>
  );
};

export default QuestionsListSkeleton;
