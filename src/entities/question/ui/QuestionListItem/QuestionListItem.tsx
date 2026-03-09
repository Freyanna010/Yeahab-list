import React from 'react';
import clsx from 'clsx';
import arrowRight from '@shared/assets/аrrow-right.png';

import { Accordion } from '@/shared/ui/Accordion';
import { Title } from '@/shared/ui/Titel';
import { QuestionInfo } from '@/entities/question/ui/QuestionInfo';
import { MarkdownText } from '@/shared/ui/MarkdowmText';
import Button from '@/shared/ui/Button/Button';
import { getQuestionDetailsPath } from '@/shared/libs';
import type { Question } from '@/entities/question';

import classes from './QuestionListItem.module.scss';

interface Props {
  question: Question;
  className?: string;
}

const QuestionListItem = React.memo(function QuestionListItem({
  question,
  className,
}: Props) {
  return (
    <li className={clsx(classes.root, className)} key={question.id}>
      <Accordion
        title={
          <Title level="h2" className={classes.title}>
            {question.title}
          </Title>
        }
      >
        <div className={classes.content}>
          <QuestionInfo complexity={question.complexity} rate={question.rate} />
          <MarkdownText content={question.shortAnswer} />
          <div className={classes.rowBottom}>
            <Button
              toLink={getQuestionDetailsPath(question.id)}
              variant="text"
              text="Подробнее"
              aria-label="Подробнее"
              //TODO: можно сдлеать чтобы примала swg-компоненты
              icon={arrowRight}
              iconPlacement="end"
            />
          </div>
        </div>
      </Accordion>
    </li>
  );
});

export default QuestionListItem;
