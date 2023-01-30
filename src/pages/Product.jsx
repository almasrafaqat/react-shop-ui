import { Add, AtmOutlined, MenuSharp, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const Title = styled.span`
  font-size: 40px;
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.div`
  font-size: 40px;
  font-weight: 100;
`;

const InfoContainer = styled.div`
  flex: 1;
  margin: 0px 20px;
`;

const FilterContainer = styled.div`
  margin: 10px 0px;
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 100;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0px 5px;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;

const FilterSize = styled.select`
    padding: 10px;
    margin-left: 10px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-top: 40px;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    
`;
const Amount = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid teal;
    padding: 10px;
    margin: 0px 10px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: white;
    border: 1px solid teal;
    cursor: pointer;
    
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 45</Price>
          <FilterContainer>
            <Filter>
              <FilterText>Color</FilterText>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterText>Size</FilterText>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>    
            <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add/>
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newletter />

      <Footer />
    </Container>
  );
};

export default Product;
