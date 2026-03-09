import clsx from 'clsx';

import arrowLeft from '../../assets/arrow-left.png';
import arrowRight from '../../assets/аrrow-right.png';
import { getPagesNumbers } from './getPagesNumbers';
import classes from './Pagination.module.scss';
import { Button } from '../Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}
const Pagination = (props: PaginationProps) => {
  const { currentPage, totalPages, onPageChange, className = '' } = props;

  if (totalPages <= 1) {
    return null;
  }

  const pagesNumbers = getPagesNumbers(currentPage, totalPages);

  return (
    <div className={clsx(classes.pagination, className)}>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        variant="outlined"
        shape="circle"
        icon={arrowLeft}
        aria-label="Предыдущая страница"
      />

      {pagesNumbers.map((item, index) => {
        if (item === '...') {
          return (
            <span key={`dots-${index}`} className={classes.dots}>
              ...
            </span>
          );
        }

        const pageNumber = item as number;
        const isActive = pageNumber === currentPage;

        return (
          <button
            key={`page-${pageNumber}`}
            onClick={() => onPageChange(pageNumber)}
            className={clsx(classes.paginationButton, {
              [classes.activeButton]: isActive,
              [classes.inactiveButton]: !isActive,
            })}
            disabled={isActive}
          >
            {pageNumber}
          </button>
        );
      })}

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        variant="outlined"
        shape="circle"
        icon={arrowRight}
        aria-label="Следующая страница"
      />
    </div>
  );
};

export default Pagination;
