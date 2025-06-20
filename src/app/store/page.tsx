import Container from "@/components/Container";
import ProductItem, { IProductItemProps } from "@/components/ProductItem";
import Link from "next/link";

export default async function Store() {
  const result = await fetch("http://localhost:8001/products");
  const data = (await result.json()) as IProductItemProps[];

  return (
    <Container>
      <h1>فروشگاه</h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <Link key={item.id} href={`/store/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
}
