import { Container, Filters, ProductsGroupList, Title, TopBar } from "@/components/common";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true
        }
      }
    }
  });

  return (
    <>
      <Container className='mt-10'>
        <Title text='All pizzas' size='lg' className='font-extrabold' />
      </Container>

      <TopBar categories={categories.filter((category) => category.products.length)} />

      <Container className='pb-14 mt-10'>
        <div className='flex gap-[60px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              {
                categories.map((category) => (
                  category.products.length && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      products={category.products}
                      categoryId={category.id}
                    />
                  )
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
