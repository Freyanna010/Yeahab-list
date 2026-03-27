import ExpandableList from '@/shared/ui/ExpandableSection';
import { FilterButton } from '@/shared/ui/FilterButton';
import { Flex } from '@/shared/ui/Flex';

import { useQuestionsFilters } from '../../model/useQuestionsFilters';

export const RATING_VALUES = [1, 2, 3, 4, 5];
const RateFilter = () => {
  const { rate, setRate } = useQuestionsFilters();
  const selectedRate = rate ? String(rate) : undefined;
  //TODO:  хук
  const toggle = (id: string) => {
    const numId = Number(id);
    if (selectedRate === id) {
      setRate(undefined);
    } else {
      setRate(numId);
    }
  };

  return (
    <ExpandableList title="Рейтинг" isExpanded={false} hasMore={false}>
      <Flex gap="8px" direction="row" wrap="wrap">
        {RATING_VALUES.map((rating) => (
          <FilterButton
            key={rating}
            label={String(rating)}
            isActive={selectedRate === String(rating)}
            onClick={() => toggle(String(rating))}
          />
        ))}
      </Flex>
    </ExpandableList>
  );
};

export default RateFilter;
