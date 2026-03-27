import searchIcon from '@shared/assets/search.png';

import { Input } from '@/shared/ui/Input';

import { useQuestionsFilters } from '../../model/useQuestionsFilters';

const QuestionSearch = () => {
  //TODO: добавть useDebounced
  const { searchQuery, setSearchQuery } = useQuestionsFilters();

  return (
    <Input
      icon={searchIcon}
      value={searchQuery || ''}
      onChange={(e) => setSearchQuery(e.target.value || undefined)}
    />
  );
};
export default QuestionSearch;
