export interface IProductItemProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

export default function ProductItem({
  title,
  image,
  price,
}: IProductItemProps) {
  return (
    <div className="shadow-md">
      <img src={image} className="w-full max-h-50 object-contain mb-4" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="text-lg font-semibold text-green-600">
          قیمت: {price} تومان
        </span>
      </div>
    </div>
  );
}
