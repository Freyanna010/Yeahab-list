import React from 'react';
import clsx from 'clsx';

import { Accordion } from '@/shared/ui/Accordion';
import { Title } from '@/shared/ui/Titel';
import { QuestionBody, type Question } from '@/entities/question';

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
        className={classes.acc}
        title={
          <Title level="h2" className={classes.title}>
            {question.title}
          </Title>
        }
      >
        <QuestionBody question={question} />
      </Accordion>
    </li>
  );
});

export default QuestionListItem;
