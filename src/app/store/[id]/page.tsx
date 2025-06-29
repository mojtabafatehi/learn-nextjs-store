import AddtoCart from "@/components/AddtoCart";
import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";
import { formatNumberWithCammas } from "@/utils/number";

interface IProductProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ "" }>;
}

export default async function product({ params }: IProductProps) {
  const { id } = await params;

  const result = await fetch(`http://localhost:8001/products/${id}`);
  const data = (await result.json()) as IProductItemProps;

  console.log(id);

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
          <span className="font-bold">
            قیمت: {formatNumberWithCammas(data.price)} تومان
          </span>

          <AddtoCart id={id} />
        </div>
      </div>
    </Container>
  );
}
