import { useFilterSelection } from '@/shared/libs/useFilterSelection';
import { useSearcUrlParam } from '@/shared/libs/useSearcUrlParam';
import ExpandableList from '@/shared/ui/ExpandableList';
import { FilterButton } from '@/shared/ui/FilterButton';

export const RATING_VALUES = [1, 2, 3, 4, 5];
const RateFilter = () => {
  const [value, setValue] = useSearcUrlParam('rate', 'page', 0);
  const { selectedIds, toggle } = useFilterSelection(value, setValue, false);

  return (
    <ExpandableList title="Рейтинг" isExpanded={false} hasMore={false}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {RATING_VALUES.map((rating) => (
          <FilterButton
            key={rating}
            label={String(rating)}
            isActive={selectedIds.includes(String(rating))}
            onClick={() => toggle(String(rating))}
          />
        ))}
      </div>
    </ExpandableList>
  );
};

export default RateFilter;
