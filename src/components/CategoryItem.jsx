import styled from "styled-components"
import { Link } from "../GlobalStyle";
import { mobile } from "../responsive";


const Container = styled.div`
    min-width : 5vw;
    height : 10vh;
    border: 2px solid teal;
    padding: 0.5em;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5em;
    border-radius: 8px;
    cursor: pointer;
    text-transform: capitalize;
    border-block-end-width: thick; 
    writing-mode: horizontal-tb;
    

`;



const Title = styled.h6`
    font-size: 18px;
    font-weight: 500;
`

const CategoryItem = ({ item }) => {
    return (

        <Container>
            <Link to={`/category/${item}`}>
                <Title>{item}</Title>
            </Link>
        </Container>

    )
}

export default CategoryItem