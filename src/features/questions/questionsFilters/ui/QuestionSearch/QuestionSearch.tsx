import searchIcon from '@shared/assets/search.png';

import { useSearchParam } from '@/shared/libs';
import { Input } from '@/shared/ui/Input';

const QuestionSearch = () => {
  const [search, setSearch] = useSearchParam('search');

  return (
    <Input
      icon={searchIcon}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};
export default QuestionSearch;
