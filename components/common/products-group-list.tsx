'use client';

import { useEffect, useRef } from "react";
import { useIntersection } from 'react-use';

import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { Title } from "./title";
import { useCategoryStore } from "@/store/category";

interface Props {
  className?: string;
  title: string;
  products: any[];
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
  className,
  listClassName,
  title,
  products,
  categoryId
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
