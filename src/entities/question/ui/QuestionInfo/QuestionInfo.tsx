import clsx from 'clsx';

import classes from './QuestionInfo.module.scss';

interface QuestionInfoProps {
  rate: number;
  complexity: number;
  className?: string;
}

const QuestionInfo = ({ rate, complexity, className }: QuestionInfoProps) => {
  return (
    <div className={clsx(classes.row, className)}>
      <div className={classes.item}>
        <span className={classes.label}>Рейтинг:</span>
        <span className={classes.value}>{rate}</span>
      </div>

      <div className={classes.item}>
        <span className={classes.label}>Сложность:</span>
        <span className={classes.value}>{complexity}</span>
      </div>
    </div>
  );
};

export default QuestionInfo;
