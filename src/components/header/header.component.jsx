import {  Person2Outlined, SearchOutlined,  ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  height: 100px;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 30px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.div`
  text-transform: uppercase;
`;

const Center = styled.div`
  flex: 1;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #3bb77e;
  border-radius: 8px;
  padding: 10px;
`;

const CategorySelect = styled.select`
  outline: none;
  border: none;
  font-size: 14px;
  padding: 5px;
  color: #253d4e;
  min-width: 150px;
`;

const CategoryOption = styled.option`
  font-size: 16px;
  font-weight: 300;
`;

const SearchDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Input = styled.input`
  outline: none;
  border: none;
`;

const SearchIcon = styled(SearchOutlined)`
  color: gray;
  cursor: pointer;

  &:hover {
    transform: scale(1.4);
    transition: all 0.5s ease;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
`;

const CartContainer = styled.div`
  
`;

const CartIcon = styled(ShoppingCartOutlined)`
 
  cursor: pointer;
`

const UserContainer = styled.div``;

const UserIcon = styled(Person2Outlined)`
  
`

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Almas.</Logo>
        </Left>
        <Center>
          <SearchWrapper>
            <CategorySelect>
              <CategoryOption disabled>Select Category</CategoryOption>
              <CategoryOption>Laptops</CategoryOption>
              <CategoryOption>Smartphone</CategoryOption>
              <CategoryOption>Women Dresses</CategoryOption>
            </CategorySelect>
            <SearchDiv>
              <Input placeholder="Search the Items" />
              <SearchIcon />
            </SearchDiv>
          </SearchWrapper>
        </Center>
        <Right>
          <CartContainer>
            <Badge
              overlap="rectangular"
              badgeContent="0"
              color="primary"
            >
              <CartIcon/>
            </Badge>
          </CartContainer>
          <UserContainer>
          <UserIcon/>
          </UserContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
