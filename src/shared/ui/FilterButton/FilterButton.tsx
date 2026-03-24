import { Button } from '@/shared/ui/Button';

interface FilterButtonProps {
  label: string | number;
  isActive?: boolean;
  onClick?: () => void;
  icon?: string;
  className?: string;
}
const FilterButton = (props: FilterButtonProps) => {
  const { label, isActive, onClick, icon } = props;

  return (
    <Button
      type="button"
      variant={isActive ? 'outlinedActiv' : 'outlinedNoActiv'}
      onClick={onClick}
      icon={icon}
      text={label}
    />
  );
};

export default FilterButton;
