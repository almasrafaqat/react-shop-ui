import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;



const Container = styled.div`
    flex: 1;
    min-width : 280px;
    height: 350px;
    margin: 5px;
    position: relative;
    background-color: #f5fbfd;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover ${Info}{
        opacity:1;
        
    } 
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;



const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Product = ({item}) => {
  return (
    <Container>
    <Circle />
        <Image src={item.img} alt={item.title} />
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product