'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import { Category } from '@prisma/client';

interface Props {
  categories: Category[];
  className?: string;
}

export const Categories: React.FC<Props> = ({ categories, className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-100 p-1 rounded-2xl', className)}
    >
      {categories.map(({ id, name }) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5 transition-all duration-100',
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
