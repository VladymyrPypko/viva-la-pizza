import { Container, ProductImage } from "@/components/common";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) }})
  if (!product) return notFound();

  return (
    <Container className="flex flex-col my-10">
      <ProductImage imageUrl={product.imageUrl} name={product.name} size={20}/>
    </Container>
  );
}
