import { useSearchParams } from 'next/navigation';
import { useSet } from 'react-use';
import { useState } from 'react';

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export interface Filters {
  pizzaTypes: Set<string>;
  sizes: Set<string>;
  price: PriceProps;
  selectedIngregients: Set<string>;
}

interface ReturnProps extends Filters {
  setPizzaTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setPrice: (name: keyof PriceProps, value: number) => void;
  setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams();

  const [selectedIngregients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get('ingredients')?.split(','))
  );

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.get('pizzaTypes')
        ? searchParams.get('pizzaTypes')?.split(',')
        : []
    )
  );

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.get('sizes') ? searchParams.get('sizes')?.split(',') : []
    )
  );

  const [price, setPrice] = useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    sizes,
    pizzaTypes,
    price,
    selectedIngregients,
    setSizes: toggleSizes,
    setPizzaTypes: togglePizzaTypes,
    setPrice: updatePrice,
    setSelectedIngredients: toggleIngredients,
  };
};
