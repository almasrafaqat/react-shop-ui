import { useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";
import Product from "../components/Product";
import Products from "../components/Products";
import Spinner from "../components/Spinner";
import { useCategoryContext } from "../context/categorycontext";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-transform: uppercase;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const CategoryPage = () => {
  const { slug } = useParams();
  const API = "https://dummyjson.com/products/category";
  const { getProductByCategory, categoryWiseProduct, productByCatLoading } =
    useCategoryContext();

  const { products } = categoryWiseProduct;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getProductByCategory(`${API}/${slug}`);
  }, []);

  if (productByCatLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{slug}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductContainer>
        {products &&
          products.map((item) => <Product key={item.id} item={item} />)}
      </ProductContainer>
      <Newletter />
      <Footer />
    </Container>
  );
};

export default CategoryPage;
