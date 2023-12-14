//Styles
import { Wrapper } from "./App.styles";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

function App() {
  return <>Start</>;
}

export default App;
