import { FilterButton } from '@/shared/ui/FilterButton';
import { InfoRow } from '@/shared/ui/InfoRow';
import { TagList } from '@/shared/ui/TagList';
import type { Question } from '@/entities/question';
import ExpandableSection from '@/shared/ui/ExpandableSection';

interface QuestionDetailsSidebarProps {
  question: Question;
}

const QuestionDetailsSidebar = ({ question }: QuestionDetailsSidebarProps) => {
  return (
    <>
      <ExpandableSection title="Уровень:" isExpanded={false} hasMore={false}>
        <InfoRow label="Сложность:" value={question.complexity} />
        <InfoRow label="Рейтинг:" value={question.rate} />
      </ExpandableSection>

      <ExpandableSection title="Навыки:" isExpanded={true} hasMore={false}>
        <TagList>
          {question.questionSpecializations.map((spec) => (
            <FilterButton key={String(spec.id)} label={spec.title} />
          ))}
        </TagList>
      </ExpandableSection>
    </>
  );
};

export default QuestionDetailsSidebar;
