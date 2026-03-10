import { QuestionSearch } from '@/features/questions/questionsFilters';
import { Card } from '@/shared/ui/Card';

const QuestonsFilters = () => {
  return (
    <Card size="small">
      <QuestionSearch />
    </Card>
  );
};

export default QuestonsFilters;
