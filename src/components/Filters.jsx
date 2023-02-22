import styled from "styled-components";
import { useFilterContext } from "../context/filtercontext";
import FormatPrice from "../helper/FormatPrice";
import { mobile } from "../responsive";

const FilterContainer = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.type !== "range-price" && "space-between"};
  flex-direction: ${(props) => props.type === "range-price" && "column"};
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

const Input = styled.input`
  cursor: pointer;
`;

const Button = styled.button`
  padding: 12px;
  color: white;
  background-color: teal;
  cursor: pointer;
  border: none;
`;

const Filters = () => {
  const {
    sorting,
    all_products,
    updateFilterValue,
    filter_products,
    clearFilters,
    filters: { category, brand, rating, price, minPrice, maxPrice },
  } = useFilterContext();

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => curElem[attr]);
    return (newVal = ["all", ...new Set(newVal)]);
  };

  const getCategoryData = getUniqueData(all_products, "category");
  const getBrandData = getUniqueData(all_products, "brand");
  const getRatingData = getUniqueData(all_products, "rating");
  return (
    <>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="category" value={category} onChange={updateFilterValue}>
            <Option disabled>Category</Option>
            {getCategoryData.map((curCategory, index) => (
              <Option key={index} value={curCategory}>
                {curCategory}
              </Option>
            ))}
          </Select>
          <Select name="brand" value={brand} onChange={updateFilterValue}>
            <Option disabled>Brand</Option>
            {getBrandData.map((curBrand, index) => (
              <Option key={index} value={curBrand}>
                {curBrand}
              </Option>
            ))}
          </Select>
          <Select name="rating" value={rating} onChange={updateFilterValue}>
            <Option disabled>Rating</Option>
            {getRatingData.map((curRating, index) => (
              <Option key={index} value={curRating}>
                {curRating}
              </Option>
            ))}
          </Select>
        </Filter>
        <Filter>{filter_products.length} Products Available </Filter>
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

      <FilterContainer type="range-price">
        <Filter>
          <FilterText>Price</FilterText>
          <FormatPrice price={price} />
        </Filter>
        <Filter>
          <Input
            type="range"
            name="price"
            value={price}
            min={minPrice}
            max={maxPrice}
            onChange={updateFilterValue}
          />
        </Filter>
        <Filter>
          <Button onClick={clearFilters}>Clear Filters</Button>
        </Filter>
      </FilterContainer>
    </>
  );
};

export default Filters;
