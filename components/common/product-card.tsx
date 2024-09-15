import Link from 'next/link';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface Props {
  className?: string;
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const ProductCard: React.FC<Props> = ({
  className,
  id,
  name,
  price,
  imageUrl,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
          <img className='w-[215px] h-[215px]' src={imageUrl} alt={name} />
        </div>

        <Title className='mb-1 mt-3 font-bold' text={name} size='sm' />

        <p className='text-sm text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptas.
        </p>

        <div className='flex justify-between items-center mt-4'>
          <span className='text-[20px] text-nowrap'>
            from <b>{price} $</b>
          </span>

          <Button variant='secondary' className='text-base font-bold'>
            <Plus size={20} className='mr-1' />
            Add to cart
          </Button>
        </div>
      </Link>
    </div>
  );
};
