// shared/libs/hooks/useFilterSelection.ts
export const useFilterSelection = (
  currentValue: string,
  onChange: (value: string) => void,
  isMulti: boolean
) => {
  const selectedIds = currentValue ? currentValue.split(',') : [];

  const toggle = (id: string) => {
    if (!isMulti) {
      const newValue = selectedIds.includes(id) ? '' : id;
      onChange(newValue);
      return;
    }
    //TODO: повторить логику
    const newSelection = selectedIds.includes(id)
      ? selectedIds.filter((item) => item !== id)
      : [...selectedIds, id];

    onChange(newSelection.join(','));
  };

  return { selectedIds, toggle };
};
