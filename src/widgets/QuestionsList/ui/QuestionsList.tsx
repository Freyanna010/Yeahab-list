import {
  QuestionListItem,
  SkeletonQuestionItem,
  type Question,
} from '@/entities/question';
import { QuestionsPagination } from '@/features/questions/questionsPagination';
import { EmptyState } from '@/shared/ui/EmptyState';
import { Flex } from '@/shared/ui/Flex';
import { List, ListSkeleton } from '@/shared/ui/List';

interface QuestionsListProps {
  status: string;
  questions: Question[];
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onResetFilters: () => void;
}
const QuestionsList = ({
  status,
  questions,
  totalPages,
  currentPage,
  onPageChange,
  onResetFilters,
}: QuestionsListProps) => {
  if (status === 'loading') {
    return (
      <ListSkeleton
        count={5}
        renderSkeleton={(i) => <SkeletonQuestionItem key={i} />}
      />
    );
  }

  if (status === 'empty') {
    return (
      <EmptyState
        title="По вашему запросу ничего не найдено 😪"
        button={{
          text: 'Сбросить фильтры',
          onClick: onResetFilters,
        }}
      />
    );
  }

  return (
    <Flex align="center" direction="column" gap="32px">
      <List
        items={questions}
        renderItem={(question) => (
          <QuestionListItem key={question.id} question={question} />
        )}
      />

      {totalPages > 1 && (
        <QuestionsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          changePage={onPageChange}
        />
      )}
    </Flex>
  );
};

export default QuestionsList;
