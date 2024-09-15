'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
  className?: string;
}

const categories = [
  { id: 1, name: 'Pizza' },
  { id: 2, name: 'Snacks' },
  { id: 3, name: 'Coctails' },
  { id: 4, name: 'Coffee' },
  { id: 5, name: 'Drinks' },
  { id: 6, name: 'Desserts' },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-100 p-1 rounded-2xl', className)}
    >
      {categories.map(({ id, name }) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id &&
              'bg-white shadow-md shadow-gray-300 text-primary'
          )}
          href={`/#${name}`}
          key={id}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
