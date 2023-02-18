import styled from "styled-components"
import { useProductContext } from "../context/productcontext";
import { popularProducts } from "../data";
import Product from "./Product";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Title = styled.h3`
    width: fit-content;
    font-size: 20px;
    font-weight: 300;
    padding: 30px;
`

const Products = () => {
    const { products } = useProductContext();

    return (
        <>
            <Title>Shop By Products</Title>
            <Container>
                {
                    products.map((item) => (
                        <Product item={item} key={item.id} />
                    ))
                }
            </Container>
        </>
    )
}

export default Products