import styled from 'styled-components'
import { useProductContext } from '../context/productcontext';
import { mobile } from '../responsive';
import CategoryItem from './CategoryItem';

const Container = styled.div`
    display : flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({padding: "0px", flexDirection: "column"})}

`;

const Categories = () => {
    
    const {products, categories} = useProductContext();

   

    console.log("categories", categories);
    
    return (
        <Container>
            {
                products?.slice(0,3).map((item) => <CategoryItem categories={categories} item={item} key={item.id} />)
            }
        </Container>
    )
}

export default Categories