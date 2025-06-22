import Container from "@/components/Container";
import ListCartItem from "@/components/ListCartItem";

export default function cart() {
  return (
    <Container>
      <div>
        <h3 className="my-4">سبد خرید</h3>
        <div>
          <ListCartItem />
        </div>
        <div>
          <h3>
            قیمت کل: <span>55</span>
          </h3>
          <h3>
            سود شما از این خرید: <span>22</span>
          </h3>
          <h3>
            قیمت نهایی: <span>77</span>
          </h3>
        </div>
      </div>
    </Container>
  );
}
