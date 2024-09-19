'use client';

import { Title } from './title';
import { Input } from '../ui';
// import { FilterCheckbox } from './filter-checkbox';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilters, useIngredients, useQueryFilters } from '@/hooks';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const ingredientsItems = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  return (
    <div className={className}>
      <Title text='Filters' size='sm' className='mb-5 font-bold' />

      <CheckboxFiltersGroup
        className='mb-5'
        name='pizzaTypes'
        title='Pizza types'
        onClickCheckbox={filters.setPizzaTypes}
        selectedId={filters.pizzaTypes}
        items={[
          { text: 'Thin dough', value: '1' },
          { text: 'Traditional dough', value: '2' },
        ]}
      />

      <CheckboxFiltersGroup
        className='mb-5'
        name='sizes'
        title='Pizza sizes'
        onClickCheckbox={filters.setSizes}
        selectedId={filters.sizes}
        items={[
          { text: '20 cm', value: '20' },
          { text: '30 cm', value: '30' },
          { text: '40 cm', value: '40' },
        ]}
      />

      <div className='mt-5 border-y-neutral-200 py-6 pb-7'>
        <p className='mb-3 font-bold'>Price from and to:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            min={0}
            max={25}
            placeholder='0'
            value={String(filters.price.priceFrom)}
            onChange={(event) =>
              filters.setPrice('priceFrom', Number(event.target.value))
            }
          />
          <Input
            type='number'
            min={0}
            max={25}
            placeholder='0'
            value={String(filters.price.priceTo)}
            onChange={(event) =>
              filters.setPrice('priceTo', Number(event.target.value))
            }
          />
        </div>

        <RangeSlider
          min={0}
          max={25}
          step={1}
          value={[filters.price.priceFrom || 0, filters.price.priceTo || 25]}
          onValueChange={(prices: number[]) => {
            filters.setPrice('priceFrom', prices[0]);
            filters.setPrice('priceTo', prices[1]);
          }}
        />
      </div>

      <CheckboxFiltersGroup
        className='mt-5'
        name='ingredients'
        title='Ingredients'
        limit={5}
        defaultItems={ingredientsItems.slice(0, 5)}
        items={ingredientsItems}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selectedId={filters.selectedIngregients}
      />
    </div>
  );
};
