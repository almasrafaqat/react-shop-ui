import { useEffect } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";
import Products from "../components/Products";
import ShopProducts from "../components/ShopProducts";
import { useFilterContext } from "../context/filtercontext";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
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
  text-transform: uppercase;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const {
    sorting,
    all_products,
    updateFilterValue,
    filters: { category, brand, rating, price },
  } = useFilterContext();

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => curElem[attr]);
    return (newVal = ["all", ...new Set(newVal)]);
  };

  const getCategoryData = getUniqueData(all_products, "category");
  const getBrandData = getUniqueData(all_products, "brand");
  const getRatingData = getUniqueData(all_products, "rating");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Shop</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="category" onChange={updateFilterValue}>
            <Option disabled>Category</Option>
            {getCategoryData.map((category, index) => (
              <Option key={index} value={category}>
                {category}
              </Option>
            ))}
          </Select>
          <Select name="brand" onChange={updateFilterValue}>
            <Option disabled>Brand</Option>
            {getBrandData.map((brand, index) => (
              <Option key={index} value={brand}>
                {brand}
              </Option>
            ))}
          </Select>
          <Select name="rating" onChange={updateFilterValue}>
            <Option disabled>Rating</Option>
            {getRatingData.map((rating, index) => (
              <Option key={index} value={rating}>
                {rating}
              </Option>
            ))}
          </Select>
        </Filter>
        <Filter>12 Products Available </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onClick={sorting}>
            <Option value="lowest">Price (Lowest)</Option>
            <Option value="highest">Price (Highest)</Option>
            <Option value="a-z">Product (Asc)</Option>
            <Option value="z-a">Product (Desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Filter>
        <input
          type="range"
          name="price"
          min="0"
          max="100"
          onChange={updateFilterValue}
        />
      </Filter>
      <ShopProducts />
      <Newletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
