import { Container, Filters, ProductsGroupList, Title, TopBar } from "@/components/common";

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='All pizzas' size='lg' className='font-extrabold' />
      </Container>

      <TopBar />

      <Container className='pb-14 mt-10'>
        <div className='flex gap-[60px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Pizza'
                products={[
                  {
                    id: 1,
                    name: 'Diablo',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 3.95,
                    items: [{price: 3.95}]
                  },
                  {
                    id: 2,
                    name: 'Diablo',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 3.95,
                    items: [{price: 3.95}]
                  },
                  {
                    id: 3,
                    name: 'Diablo',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 3.95,
                    items: [{price: 3.95}]
                  },
                  {
                    id: 4,
                    name: 'Diablo',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 3.95,
                    items: [{price: 3.95}]
                  },
                  {
                    id: 5,
                    name: 'Diablo',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 3.95,
                    items: [{price: 3.95}]
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title='Snacks'
                products={[
                  {
                    id: 1,
                    name: 'Diablo',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 3.95,
                    items: [{price: 3.95}]
                  },
                  {
                    id: 2,
                    name: 'Diablo',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 3.95,
                    items: [{price: 3.95}]
                  },
                  {
                    id: 3,
                    name: 'Diablo',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 3.95,
                    items: [{price: 3.95}]
                  },
                  {
                    id: 4,
                    name: 'Diablo',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 3.95,
                    items: [{price: 3.95}]
                  },
                  {
                    id: 5,
                    name: 'Diablo',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 3.95,
                    items: [{price: 3.95}]
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
