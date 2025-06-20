import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";

interface IProductProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ "" }>;
}

export default async function product({ params }: IProductProps) {
  const { id } = await params;

  const result = await fetch(`http://localhost:8001/products/${id}`);
  const data = (await result.json()) as IProductItemProps;

  return (
    <Container>
      <div className="grid grid-cols-12 shadow-md mt-8  rounded-t-2xl">
        <div className="col-span-3 m-2">
          <img src={data.image} className="rounded-md object-cover" />
        </div>
        <div className="col-span-9 p-4">
          <h1 className="font-bold text-2xl">{data.title}</h1>
          <p className="text-gray-400 my-4 font-stretch-75%">
            {data.description}
          </p>
          <span className="font-bold">قیمت: {data.price} تومان</span>

          <div className="mt-4">
            <button className="text-green-600 bg-gray-50 px-4 py-1 rounded-3xl cursor-pointer">
              +
            </button>
            <span className="mx-2">2</span>
            <button className="text-red-600 bg-gray-50 px-4 py-1 rounded-3xl cursor-pointer">
              -
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
