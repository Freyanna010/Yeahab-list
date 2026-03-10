import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDebounce } from '@/shared/libs';

export const useSearchParam = (
  searchParam: string,
  pageParam: string = 'page',
  debounceMs: number = 300
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlValue = searchParams.get(searchParam) || '';

  const [value, setValue] = useState(urlValue);
  const debouncedValue = useDebounce(value, debounceMs);

  useEffect(() => {
    setValue(urlValue);
  }, [urlValue]);

  useEffect(() => {
    const currentUrlValue = searchParams.get(searchParam) || '';

    if (debouncedValue !== currentUrlValue) {
      const params = new URLSearchParams(searchParams);

      if (debouncedValue) {
        params.set(searchParam, debouncedValue);
      } else {
        params.delete(searchParam);
      }

      params.set(pageParam, '1');

      setSearchParams(params, { replace: true });
    }
  }, [debouncedValue, searchParam, pageParam, searchParams, setSearchParams]);

  return [value, setValue] as const;
};
