//styles
import { CartItem } from "../CartItem/CartItem";
import { CartItemType } from "../utils/types";
import { Wrapper } from "./cart.styles";

export type Props = {
  cartItem: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

export function Cart({ cartItem, addToCart, removeFromCart }: Props) {
    const calculateTotal = (items: CartItemType[]) =>
      items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <Wrapper>
      <h2>Your shopping Cart</h2>
      {cartItem.length === 0 ? <p>Cart empty</p> : null}
      {cartItem.map((item) => (
        <CartItem
          item={item}
          key={item.id}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItem).toFixed(2)}</h2>
    </Wrapper>
  );
}
