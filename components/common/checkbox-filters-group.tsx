'use client';

import { useState } from 'react';
import { Input, Skeleton } from '../ui';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';

type Item = FilterCheckboxProps;

interface Props {
  className?: string;
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selectedId?: Set<string>;
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  loading,
  searchInputPlaceholder = 'Search...',
  className,
  onClickCheckbox,
  defaultValue,
  selectedId,
  name
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems.slice(0, limit);

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  if (loading) {
    return (
      <div className={className}>
        <p className='mb-3 font-bold'>{title}</p>

        {...Array(limit)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className='h-6 mb-4 rounded-[10px]' />
          ))}

        <Skeleton className='h-6 w-20 rounded-[10px]' />
      </div>
    );
  }

  return (
    <div className={className}>
      <p className='mb-3 font-bold'>{title}</p>

      {showAll && (
        <div className='mb-5'>
          <Input
            className='bg-gray-50 border-none'
            placeholder={searchInputPlaceholder}
            onChange={onChangeSearchInput}
          />
        </div>
      )}

      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={selectedId?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button
            className='text-primary mt-3'
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Hide' : 'Show more'}
          </button>
        </div>
      )}
    </div>
  );
};
