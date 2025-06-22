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
      </div>
    </Container>
  );
}
