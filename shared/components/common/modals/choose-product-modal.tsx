'use client';

import { Dialog } from '@/shared/components/ui';
import { DialogContent } from '@/shared/components/ui/dialog';
import { cn } from '@/shared/lib/utils';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../choose-product-form';
import { ProductWithRelations } from '@/@types/product';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { useCartStore } from '@/shared/store';
import toast from 'react-hot-toast';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const addCartItem = useCartStore((state) => state.addCartItem);
  const loading = useCartStore((state) => state.loading);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({
        productItemId: itemId,
        ingredients,
      });

      toast.success(product.name + ' added to cart');
      router.back();
    } catch (error) {
      toast.error('Failed to add product to cart');
      console.error(error);
    }
  }

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            onSubmit={onSubmit}
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            onSubmit={onSubmit}
            imageUrl={product.imageUrl}
            name={product.name}
            price={firstItem.price}
            description={product.description}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
