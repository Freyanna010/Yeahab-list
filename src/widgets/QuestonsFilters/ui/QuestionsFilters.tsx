import { QuestionSearch } from '@/features/questions/questionsFilters';
import { Card } from '@/shared/ui/Card';

import classes from './QuestionsFilters.module.scss';

const QuestionsFilters = () => {
  return (
    <Card size="small" className={classes.filtersContainer}>
      <QuestionSearch />
    </Card>
  );
};

export default QuestionsFilters;
