import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1``;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div``;

const FilterText = styled.div``;

const Select = styled.select``;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Samsung</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option>

            </Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option>
                
            </Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
