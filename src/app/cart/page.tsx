import CartItem from "@/components/CartItem";
import Container from "@/components/Container";

export default function cart() {
  return (
    <Container>
      <div>
        <h3 className="my-4">سبد خرید</h3>
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    </Container>
  );
}
