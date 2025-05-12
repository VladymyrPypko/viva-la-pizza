'use client';

import { cn } from '@/shared/lib/utils';

export type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface Props {
  className?: string;
  items: readonly Variant[];
  value?: Variant['value'];
  onClick?: (value: Variant['value']) => void;
}

export const GroupVariants: React.FC<Props> = ({
  className,
  items,
  value,
  onClick,
}) => {
  return (
    <div
      className={cn(
        'flex justify-between bg-gray-100 rounded-3xl p-1 select-none',
        className
      )}
    >
      {items.map((item) => (
        <button
          className={cn(
            'flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl text-sm transition-all duration-300',
            {
              'bg-white shadow': item.value === value,
              'text-gray-500 opacity-50 pointer-events-none': item.disabled,
            }
          )}
          key={item.name}
          onClick={() => onClick?.(item.value)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
