import {
  Container,
  GroupVariants,
  PizzaImage,
  Title,
} from '@/shared/components/common';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });
  if (!product) return notFound();

  return (
    <Container className='flex flex-col my-10'>
      <div className='flex flex-1'>
        <PizzaImage imageUrl={product.imageUrl} name={product.name} size={40} />
        <div className='w-[490px] bg-gray-50 p-7'>
          <Title
            text={product.name}
            size='md'
            className='mb-1 font-extrabold'
          />
          <p className='text-gray-400'>{product.description}</p>
          <GroupVariants
            items={[
              {
                name: 'Small',
                value: '1',
              },
              {
                name: 'Medium',
                value: '2',
              },
              {
                name: 'Large',
                value: '3',
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
