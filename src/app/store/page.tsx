import Container from "@/components/Container";
import ProductItem from "@/components/ProductItem";

export default function Store() {
  // Sample data for products
  const date = [
    {
      id: "1",
      image:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
      title: "محصول 1",
      description: "توضیحات محصول 1",
      price: 100000,
    },
    {
      id: "2",
      image:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
      title: "محصول 2",
      description: "توضیحات محصول 2",
      price: 200000,
    },
    {
      id: "3",
      image:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
      title: "محصول 3",
      description: "توضیحات محصول 3",
      price: 300000,
    },
    {
      id: "4",
      image:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
      title: "محصول 4",
      description: "توضیحات محصول 4",
      price: 400000,
    },
    {
      id: "5",
      image:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
      title: "محصول 5",
      description: "توضیحات محصول 5",
      price: 500000,
    },
  ];

  return (
    <Container>
      <h1>فروشگاه</h1>
      <div className="grid grid-cols-4 gap-4">
        {date.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    </Container>
  );
}
