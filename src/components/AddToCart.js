import styled from "styled-components";
import { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { Link } from "../GlobalStyle";
import { useCartContext } from "../context/cartcontext";

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const AddToCart = ({ product }) => {
  const { id, stock } = product;
  const { addToCart } = useCartContext();
  const [amount, setAmount] = useState(1);

  const setIncrease = () =>
    amount < stock ? setAmount(amount + 1) : setAmount(stock);

  const setDecrease = () => (amount > 1 ? setAmount(amount - 1) : setAmount(1));
  return (
    <>
      <CartAmountToggle
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />
      <Link to="/cart">
        <Button onClick={() => addToCart(id, amount, product)}>
          Add to Cart
        </Button>
      </Link>
    </>
  );
};

export default AddToCart;
