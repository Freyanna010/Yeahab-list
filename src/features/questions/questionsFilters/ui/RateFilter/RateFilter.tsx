import { RATING_VALUES } from '../../model/constans';
import { useQuestionsFilters } from '../../model/useQuestionsFilters';
import { FilterGroup } from '../FilterGroup';

const RateFilter = () => {
  const { rate, setRate } = useQuestionsFilters();
  const selectedIds = rate ? [String(rate)] : [];

  // TODO: хук
  const toggle = (id: string) => {
    setRate(selectedIds.includes(id) ? undefined : Number(id));
  };

  const items = RATING_VALUES.map((r) => ({ id: r, label: String(r) }));

  return (
    <FilterGroup
      title="Рейтинг"
      items={items}
      selectedIds={selectedIds}
      onToggle={toggle}
      isExpanded={false}
      hasMore={false}
    />
  );
};

export default RateFilter;
