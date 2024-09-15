import { cn } from '@/lib/utils';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { ArrowRight, ShoppingCart, UserRound } from 'lucide-react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('border border-b', className)}>
      <Container className='flex items-center justify-between py-8'>
        <div className='flex items-center gap-2'>
          <Image src='/logo.png' alt='Logo' width={35} height={35} />
          <div>
            <h1 className='text-2xl uppercase font-black'>Viva La Pizza</h1>
            <p className='text-sm text-gray-400 leading-3'>
              where every bite is a fiesta!
            </p>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <Button className='flex items-center gap-1' variant='outline'>
            <UserRound size={16} />
            Sign in
          </Button>

          <div>
            <Button className='group relative'>
              <b>10 $</b>
              <span className='h-full w-[1px] bg-white/30 mx-3' />
              <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                <ShoppingCart className='relative' size={16} strokeWidth={2} />
                <b>0</b>
              </div>
              <ArrowRight className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' size={20}/>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
