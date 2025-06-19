import Container from "@/components/Container";

export default function product() {
  return (
    <Container>
      <div className="grid grid-cols-12 shadow-md mt-8  rounded-t-2xl">
        <div className="col-span-3 m-2">
          <img
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg"
            className="rounded-md object-cover "
          />
        </div>
        <div className="col-span-9 p-4">
          <h1 className="font-bold text-2xl">نام محصول</h1>
          <p className="text-gray-400 my-4 font-stretch-75%">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ut
            magni possimus atque nulla in dicta officia incidunt est beatae
            laudantium ducimus repellat quas error, corrupti cupiditate facere
            dolorem doloremque?
          </p>
          <span className="font-bold">قیمت: 20000 تومان</span>

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
