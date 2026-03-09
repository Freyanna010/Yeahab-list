import { Pagination } from '@/shared/ui/Pagination';

interface QuestionsPaginationProps {
  currentPage: number;
  totalPages: number;
  changePage: (page: number) => void;
}

const QuestionsPagination = ({
  currentPage,
  totalPages,
  changePage,
}: QuestionsPaginationProps) => {
  const handlePageChange = (page: number) => {
    changePage(page);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
};

export default QuestionsPagination;
