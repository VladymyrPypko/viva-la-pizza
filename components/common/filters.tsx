'use client';

import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { Input } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { FilterCheckbox } from './filter-checkbox';
import { RangeSlider } from './range-slider';
import { Title } from './title';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onToggleId, selectedId } = useFilterIngredients();

  const ingredientsItems = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  return (
    <div className={className}>
      <Title text='Filters' size='sm' className='mb-5 font-bold' />

      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Customizable' value='1' />
        <FilterCheckbox text='New' value='2' />
      </div>

      <div className='mt-5 border-y-neutral-200 py-6 pb-7'>
        <p className='mb-3 font-bold'>Price from and to:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            min={0}
            max={25}
            defaultValue={0}
            placeholder='0'
          />
          <Input type='number' min={0} max={25} placeholder='0' />
        </div>

        <RangeSlider min={0} max={25} step={1} value={[0, 25]} />
      </div>

      <CheckboxFiltersGroup
        className='mt-5'
        name='ingredients'
        title='Ingredients'
        limit={5}
        defaultItems={ingredientsItems.slice(0, 5)}
        items={ingredientsItems}
        loading={loading}
        onClickCheckbox={onToggleId}
        selectedId={selectedId}
      />
    </div>
  );
};
