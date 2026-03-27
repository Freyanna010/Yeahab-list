export const useFilterToggle = <T extends string | number>(
  selected: T | T[] | undefined,
  onChange: (value: T | T[] | undefined) => void,
  mode: 'single' | 'multiple' = 'multiple'
) => {
  const toggle = (id: T) => {
    if (mode === 'single') {
      onChange(selected === id ? undefined : id);
    } else {
      const current = Array.isArray(selected) ? selected : [];
      const next = current.includes(id)
        ? current.filter((i) => i !== id)
        : [...current, id];
      onChange(next);
    }
  };

  return { toggle };
};
