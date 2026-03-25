import clsx from 'clsx';
import { useCallback, useMemo } from 'react';

import arrowLeft from '../../assets/arrow-left.png';
import arrowRight from '../../assets/аrrow-right.png';
import { getPagesNumbers } from './getPagesNumbers';
import classes from './Pagination.module.scss';
import { Button } from '../Button';
import PaginationButtons from './PaginationButtons';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}
const Pagination = (props: PaginationProps) => {
  const { currentPage, totalPages, onPageChange, className = '' } = props;

  const pagesNumbers = useMemo(
    () => getPagesNumbers(currentPage, totalPages),
    [currentPage, totalPages]
  );

  const handlePrev = useCallback(
    () => onPageChange(currentPage - 1),
    [currentPage, onPageChange]
  );
  const handleNext = useCallback(
    () => onPageChange(currentPage + 1),
    [currentPage, onPageChange]
  );

  if (totalPages <= 1) return null;

  return (
    <nav
      className={clsx(classes.pagination, className)}
      aria-label="Pagination"
    >
      <Button
        onClick={handlePrev}
        disabled={currentPage <= 1}
        shape="circle"
        icon={arrowLeft}
        aria-label="Предыдущая страница"
      />

      <div className={classes.pagesContainer}>
        {pagesNumbers.map((item, index) => {
          if (item === '...') {
            return (
              <span
                key={`dots-${index}`}
                className={classes.dots}
                aria-hidden="true"
              >
                ...
              </span>
            );
          }

          return (
            <PaginationButtons
              key={`page-${item}`}
              page={item as number}
              isActive={item === currentPage}
              onClick={onPageChange}
            />
          );
        })}
      </div>

      <Button
        onClick={handleNext}
        disabled={currentPage >= totalPages}
        shape="circle"
        icon={arrowRight}
        aria-label="Следующая страница"
      />
    </nav>
  );
};

export default Pagination;
