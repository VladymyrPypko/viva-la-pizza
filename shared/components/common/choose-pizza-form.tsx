'use client';

import { PizzaImage } from './pizza-image';
import { Title } from './title';
import { Button } from '../ui';
import { GroupVariants } from './group-variants';
import { PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants/pizza';
import { Ingredient, ProductItem } from '@prisma/client';
import { IngredientItem } from './ingredient-item';
import { cn } from '@/shared/lib/utils';
import { getPizzaDetails } from '@/shared/lib';
import { usePizzaOptions } from '@/shared/hooks';

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  onSubmit: (itemId: number, ingredients: number[]) => void;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  className,
  imageUrl,
  name,
  ingredients,
  items,
  onSubmit,
}) => {
  const {
    size,
    type,
    selectedIngedients,
    availableSizes,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  } = usePizzaOptions(items);

  const { textDetails, totalPrice } = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngedients
  );

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngedients));
    }
  };

  return (
    <div className={cn('flex flex-1', className)}>
      <PizzaImage imageUrl={imageUrl} size={size} name={name} />

      <div className='w-[490px] bg-[#f7f6f5] p-7'>
        <Title text={name} size='md' className='font-extrabold mb-1' />

        <p className='text-gray-400'>{textDetails}</p>

        <div className='flex flex-col gap-4 mt-4'>
          <GroupVariants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className='scrollbar overflow-auto bg-gray-100 p-5 rounded-md max-h-[360px] mt-4'>
          <div className='grid grid-cols-3 gap-3'>
            {ingredients?.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngedients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={handleClickAdd}
          className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
        >
          Add to cart for {totalPrice} $
        </Button>
      </div>
    </div>
  );
};
