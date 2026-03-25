import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import clsx from 'clsx';

import classes from './QuestionListItem.module.scss';

export const SkeletonQuestionItem = () => {
  return (
    <li className={classes.root}>
      <div className={clsx(classes.acc, classes.skeletonWrapper)}>
        <Skeleton
          height={48}
          borderRadius={8}
          baseColor="#f3f3f3"
          highlightColor="#ecebeb"
        />
      </div>
    </li>
  );
};

export default SkeletonQuestionItem;
