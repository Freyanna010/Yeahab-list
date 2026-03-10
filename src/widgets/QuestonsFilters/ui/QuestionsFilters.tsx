import { QuestionSearch } from '@/features/questions/questionsFilters';
import { Card } from '@/shared/ui/Card';

const QuestionsFilters = () => {
  return (
    <Card size="small">
      <QuestionSearch />
    </Card>
  );
};

export default QuestionsFilters;
