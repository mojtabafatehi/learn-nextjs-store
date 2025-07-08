import Container from "@/components/Container";
import Pagination from "@/components/Pagination";
import ProductItem, { IProductItems } from "@/components/ProductItem";
import Link from "next/link";

interface IStoreProps {
  params: promise<{}>;
  searchParams: promise<{ page: string; per_page: string }>;
}

export default async function Store({ searchParams }: IStoreProps) {
  console.log(searchParams);

  const page = (await searchParams).page || "1";
  const perPage = (await searchParams).per_page || "5";

  const result = await fetch(
    `http://localhost:8001/products?_page=${page}&_per_page=${perPage}`
  );
  const data = (await result.json()) as IProductItems;

  return (
    <Container>
      <h1>فروشگاه</h1>
      <div className="grid grid-cols-4 gap-4">
        {data.data.map((item) => (
          <Link key={item.id} href={`/store/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>

      <Pagination pageCount={data.pages} />
    </Container>
  );
}
