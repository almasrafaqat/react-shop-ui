import styled from "styled-components";
import { useCategoryContext } from "../context/categorycontext";
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

const FiltersCategory = () => {
  const {
    sorting,
    all_products,
    updateFilterValue,
    filter_products,
    clearFilters,
  } = useFilterContext();

  const {
    Sorting,
    categoryFilterProducts,
    categoryWiseProduct,
    getFilterCatValue,
    clearCategoryFilters,
    filters: {  brand, rating, price, minPrice, maxPrice },
  } = useCategoryContext();
  // console.log('categoryFilterProducts: ', categoryFilterProducts);

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => curElem[attr]);
    return (newVal = ["all", ...new Set(newVal)]);
  };
  const getBrandData = getUniqueData(categoryWiseProduct, "brand");
  const getRatingData = getUniqueData(categoryWiseProduct, "rating");
  return (
    <>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="brand" value={brand} onChange={getFilterCatValue}>
            <Option disabled>Brand</Option>
            {getBrandData.map((curBrand, index) => (
              <Option key={index} value={curBrand}>
                {curBrand}
              </Option>
            ))}
          </Select>
          <Select name="rating" value={rating} onChange={getFilterCatValue}>
            <Option disabled>Rating</Option>
            {getRatingData.map((curRating, index) => (
              <Option key={index} value={curRating}>
                {curRating}
              </Option>
            ))}
          </Select>
        </Filter>
        <Filter>{categoryFilterProducts.length} Products Available </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onClick={Sorting}>
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
            onChange={getFilterCatValue}
          />
        </Filter>
        <Filter>
          <Button onClick={clearCategoryFilters}>Clear Filters</Button>
        </Filter>
      </FilterContainer>
    </>
  );
};

export default FiltersCategory;
