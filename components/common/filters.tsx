import { Input } from "../ui"
import { CheckboxFiltersGroup } from "./checkbox-filters-group"
import { FilterCheckbox } from "./filter-checkbox"
import { RangeSlider } from "./range-slider"
import { Title } from "./title"

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({className}) => {
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
        title='Ingredients'
        limit={5}
        defaultItems={[
          {
            text: 'Cheese sauce',
            value: '1',
          },
          {
            text: 'Mozzarella',
            value: '2',
          },
          {
            text: 'Garlic',
            value: '3',
          },
          {
            text: 'Pickles',
            value: '4',
          },
          {
            text: 'Tomatoes',
            value: '5',
          },
        ]}
        items={[
          {
            text: 'Cheese sauce',
            value: '1',
          },
          {
            text: 'Mozzarella',
            value: '2',
          },
          {
            text: 'Garlic',
            value: '3',
          },
          {
            text: 'Pickles',
            value: '4',
          },
          {
            text: 'Tomatoes',
            value: '5',
          },
          {
            text: 'Cheese sauce',
            value: '1',
          },
          {
            text: 'Mozzarella',
            value: '2',
          },
          {
            text: 'Garlic',
            value: '3',
          },
          {
            text: 'Pickles',
            value: '4',
          }
        ]}
      />
    </div>
  );
}