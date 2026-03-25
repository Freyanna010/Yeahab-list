import { useNavigate, useParams } from 'react-router-dom';
import frame from '@shared/assets/frame.png';
import arrowLeft from '@shared/assets/arrow-left.png';
import arrowRight from '@shared/assets/аrrow-right.png';
import { useMediaQuery } from 'react-responsive';

import {
  useGetQuestionByIdQuery,
  useGetQuestionsTotalQuery,
} from '@/entities/question';
import { Card } from '@/shared/ui/Card';
import { Title } from '@/shared/ui/Titel';
import { Button } from '@/shared/ui/Button';
import { MarkdownText } from '@/shared/ui/MarkdowmText';
import { PageLoader } from '@/shared/ui/PageLoader';
import { getQuestionDetailsPath } from '@/shared/libs';
import { Flex } from '@/shared/ui/Flex';
import { QuestionDetailsSidebar } from '@/widgets/QuestionDetailsSidebar';

import classes from './QuestionDetailsPage.module.scss';

const QuestionDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const questionId = id ? Number(id) : 0;
  const { data: question, isLoading } = useGetQuestionByIdQuery(
    Number(questionId)
  );
  const { data: totalQuestions } = useGetQuestionsTotalQuery();

  const hasPrev = questionId > 1;
  const hasNext = totalQuestions ? questionId < totalQuestions : true;

  const onPrev = () => {
    if (hasPrev) {
      navigate(getQuestionDetailsPath(questionId - 1));
    }
  };
  const onNext = () => {
    if (hasNext) {
      navigate(getQuestionDetailsPath(questionId + 1));
    }
  };

  if (isLoading) return <PageLoader />;
  if (!question) return <Title level="h1">Вопрос не найден</Title>;

  const { imageSrc, title, description, shortAnswer, longAnswer } = question;

  //TODO: потом можно разбить на виджеты
  return (
    <Flex direction="row" gap="20px">
      <Flex gap="20px" direction="column">
        <Card
          padding="24px"
          justify={isMobile ? 'center' : 'start'}
          direction={isMobile ? 'column' : 'row'}
        >
          <img
            src={imageSrc || frame}
            alt={question?.title}
            className={classes.img}
          />
          <div>
            <Title level="h1">{title}</Title>
            <p>{description}</p>
          </div>
        </Card>

        <Card direction="row" align="center" justify="center">
          <Button
            text="предыдущий"
            variant="text"
            icon={arrowLeft}
            onClick={onPrev}
            disabled={!hasPrev}
          />
          <Button
            text="следующий"
            variant="text"
            icon={arrowRight}
            iconPlacement="end"
            onClick={onNext}
            disabled={!hasNext}
          />
        </Card>

        <Card>
          <Title level="h2">Краткий ответ</Title>
          <MarkdownText content={shortAnswer} />
        </Card>

        <Card>
          <Title level="h2">Развёрнутый ответ</Title>
          <MarkdownText content={longAnswer} />
        </Card>
      </Flex>
      {isDesktop && (
        <Card gap="24px" padding="24px">
          <QuestionDetailsSidebar question={question} />
        </Card>
      )}
    </Flex>
  );
};

export default QuestionDetailsPage;
