import {
  QuestionSearch,
  SkillsFilter,
} from '@/features/questions/questionsFilters';
import { Card } from '@/shared/ui/Card';

import classes from './QuestionsFilters.module.scss';

const QuestionsFilters = () => {
  return (
    <Card size="small" className={classes.filtersContainer}>
      <div className={classes.filtersContainer}>
        <QuestionSearch />
        <SkillsFilter />
      </div>
    </Card>
  );
};

export default QuestionsFilters;
