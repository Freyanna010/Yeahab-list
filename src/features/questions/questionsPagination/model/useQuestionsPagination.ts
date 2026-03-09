import { useSearchParams } from 'react-router-dom';

export const useQuestionsPagination = (defaultPage = 1) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || defaultPage;

  const changePage = (page: number) => {
    setSearchParams({ page: String(page) });
  };

  return {
    currentPage,
    changePage,
  };
};
