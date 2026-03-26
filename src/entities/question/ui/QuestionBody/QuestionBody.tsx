import arrowRight from '@shared/assets/аrrow-right.png';

import { getQuestionDetailsPath } from '@/shared/libs';
import { MarkdownText } from '@/shared/ui/MarkdowmText';
import { Button } from '@/shared/ui/Button';

import { QuestionInfo } from '../QuestionInfo';
import classes from './QuestionBody.module.scss';
import type { Question } from '../../model/types';

const QuestionBody = ({ question }: { question: Question }) => (
  <div className={classes.accContent}>
    <QuestionInfo complexity={question.complexity} rate={question.rate} />
    <MarkdownText content={question.shortAnswer} />
    <div className={classes.rowBottom}>
      <Button
        toLink={getQuestionDetailsPath(question.id)}
        variant="text"
        text="Подробнее"
        icon={arrowRight}
        iconPlacement="end"
      />
    </div>
  </div>
);

export default QuestionBody;
