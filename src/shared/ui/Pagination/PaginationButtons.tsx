import clsx from 'clsx';
import React from 'react';

import classes from './Pagination.module.scss';

const PaginationButtons = React.memo(
  ({
    page,
    isActive,
    onClick,
  }: {
    page: number;
    isActive: boolean;
    onClick: (page: number) => void;
  }) => (
    <button
      type="button"
      onClick={() => onClick(page)}
      className={clsx(classes.paginationButton, {
        [classes.activeButton]: isActive,
        [classes.inactiveButton]: !isActive,
      })}
      disabled={isActive}
    >
      {page}
    </button>
  )
);

export default PaginationButtons;
