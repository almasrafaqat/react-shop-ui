import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid teal;
  margin: 0px 5px;
`;

const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <AmountContainer>
      <Remove style={{ cursor: "pointer" }} onClick={setDecrease} />
      <Amount>{amount}</Amount>
      <Add style={{ cursor: "pointer" }} onClick={setIncrease} />
    </AmountContainer>
  );
};

export default CartAmountToggle;
