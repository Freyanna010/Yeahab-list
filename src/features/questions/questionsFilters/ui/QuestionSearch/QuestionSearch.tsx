import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDebounce } from '@/shared/libs';

const QuestionSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlSearch = searchParams.get('search') || '';

  const [value, setValue] = useState(urlSearch);
  const debouncedSearch = useDebounce(value, 300);

  const [prevUrlSearch, setPrevUrlSearch] = useState(urlSearch);
  if (urlSearch !== prevUrlSearch) {
    setPrevUrlSearch(urlSearch);
    setValue(urlSearch);
  }

  useEffect(() => {
    const currentSearchInUrl = searchParams.get('search') || '';

    if (debouncedSearch !== currentSearchInUrl) {
      const params = new URLSearchParams(searchParams);

      if (debouncedSearch) {
        params.set('search', debouncedSearch);
      } else {
        params.delete('search');
      }

      params.set('page', '1');

      setSearchParams(params, { replace: true });
    }
  }, [debouncedSearch, setSearchParams, searchParams]);

  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default QuestionSearch;
