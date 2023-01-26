import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    height: 70vh;
    margin: 3px;
    position: relative;

`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
      color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: none;
    color : gray;
    cursor: pointer;
    padding: 10px;
    font-weight: 600;
    background-color: white;
`;



const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem