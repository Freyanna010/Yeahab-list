import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDebounce } from '@/shared/libs';

export const useSearcUrlParam = (
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
    if (debouncedValue === undefined) return;

    setSearchParams((prevParams) => {
      const currentUrlValue = prevParams.get(searchParam) || '';
      if (debouncedValue === currentUrlValue) {
        return prevParams;
      }

      const params = new URLSearchParams(prevParams);
      if (debouncedValue) {
        params.set(searchParam, debouncedValue);
      } else {
        params.delete(searchParam);
      }
      params.set(pageParam, '1');
      return params;
    });
  }, [debouncedValue, searchParam, pageParam, setSearchParams]);

  return [value, setValue] as const;
};
