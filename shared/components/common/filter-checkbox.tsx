import { Checkbox } from '../ui';

export interface FilterCheckboxProps {
  text: string;
  value: string;
  name?: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  name,
  endAdornment,
  onCheckedChange,
  checked,
}) => {
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox
        className='w-6 h-6 rounded-[8px]'
        value={value}
        onCheckedChange={onCheckedChange}
        checked={checked}
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      <label
        className='flex-1 leading-none cursor-pointer'
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
