import styled from "styled-components";
import { useProductContext } from "../context/productcontext";
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

const Products = () => {
  const {
    products,
    searchProduct,
    filters: { text },
  } = useProductContext();

  const shuffle = (products) => [...products].sort(() => Math.random() - 0.5);
  const ShuffleProducts = shuffle(products);

  const SearchProducts = searchProduct.map((item) => (
    <Product item={item} key={item.id} />
  ));
  const Products = ShuffleProducts.map((item) => (
    <Product item={item} key={item.id} />
  ));

  return (
    <>
      <Title>Shop By Products</Title>
      <Container>{text ? SearchProducts : Products}</Container>
    </>
  );
};

export default Products;
