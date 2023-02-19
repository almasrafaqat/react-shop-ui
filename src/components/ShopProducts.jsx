import styled from "styled-components";
import { useFilterContext } from "../context/filtercontext";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 300;
  padding: 50px;
`;

const ShopProducts = () => {
  const { filter_products } = useFilterContext();

  return (
    <>
      <Title>Shop Products</Title>
      <Container>
        {filter_products.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default ShopProducts;