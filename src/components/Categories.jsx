import styled from "styled-components";
import { useCategoryContext } from "../context/categorycontext";
import { useProductContext } from "../context/productcontext";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import PlaceholderLoading from "react-placeholder-loading";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 300;
  padding: 50px;
`;

const Categories = () => {
 
  const { categories, productByCatLoading } = useCategoryContext();

  return (
    <>
      <Title>Shop by Category</Title>

      <Container>
        {productByCatLoading ? (
          <PlaceholderLoading shape="rect" width={"99vw"} height={"10vh"} />
        ) : (
          categories &&
          categories.map((item, index) => (
            <CategoryItem item={item} key={index} />
          ))
        )}
      </Container>
    </>
  );
};

export default Categories;
