import searchIcon from '@shared/assets/search.png';
import { useEffect, useState } from 'react';

import { Input } from '@/shared/ui/Input';
import { useDebounce } from '@/shared/libs';

import { useQuestionsFilters } from '../../model/useQuestionsFilters';

const QuestionSearch = () => {
  const { searchQuery, setSearchQuery } = useQuestionsFilters();

  const [localValue, setLocalValue] = useState(searchQuery || '');

  const debouncedValue = useDebounce(localValue, 500);

  useEffect(() => {
    setSearchQuery(debouncedValue || undefined);
  }, [debouncedValue, setSearchQuery]);

  //TODO: сброс фильтра если не найдено

  return (
    <Input
      icon={searchIcon}
      value={localValue}
      onChange={(e) => setLocalValue(e.target.value)}
    />
  );
};
export default QuestionSearch;
