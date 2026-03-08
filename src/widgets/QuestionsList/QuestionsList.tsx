import arrowRight from '@shared/assets/аrrow-right.png';

import { Accordion } from '@/shared/ui/Accordion';
import { PageLoader } from '@/shared/ui/PageLoader';
import { Title } from '@/shared/ui/Titel';
import { QuestionInfo } from '@/entities/question/ui/QuestionInfo';
import type { Question } from '@/entities/question';
import { MarkdownText } from '@/shared/ui/MarkdowmText';
import Button from '@/shared/ui/Button/Button';
import { getQuestionDetailsPath } from '@/shared/libs';

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
      {questions?.map((question) => (
        <li key={question.id}>
          <Accordion
            title={
              <Title level="h2" className={classes.title}>
                {question.title}
              </Title>
            }
          >
            <QuestionInfo
              complexity={question.complexity}
              rate={question.rate}
            />
            <MarkdownText content={question.shortAnswer} />

            <Button
              toLink={getQuestionDetailsPath(question.id)}
              variant="text"
              text="подробнее"
              icon={arrowRight}
              iconPlacement="end"
            />
          </Accordion>
        </li>
      ))}
    </ul>
  );
};

export default QuestionsList;
