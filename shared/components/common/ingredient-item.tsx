import { cn } from '@/shared/lib/utils';
import { CircleCheck } from 'lucide-react';

interface Props {
  className?: string;
  name: string;
  imageUrl: string;
  price: number;
  active?: boolean;
  onClick?: VoidFunction;
}

export const IngredientItem: React.FC<Props> = ({
  className,
  name,
  imageUrl,
  price,
  active,
  onClick,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white',
        { 'border border-primary': active },
        className
      )}
      onClick={onClick}
    >
      {active && <CircleCheck className='absolute top-2 right-2 text-primary'/>}
      <img width={110} height={110} src={imageUrl} alt={name} />
      <span className='text-xs mb-1'>{name}</span>
      <span className='font-bold'>{price} $</span>
    </div>
  );
};
