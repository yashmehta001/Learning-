//Styles
import { Wrapper } from "./item.styles";

//Types
import { CartItemType } from "../utils/types";
import { Button } from "@mui/material";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

export function Item({ item, handleAddToCart }: Props) {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
  );
}
