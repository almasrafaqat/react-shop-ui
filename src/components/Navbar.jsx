import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    display: flex;
    padding: 5px 10px;
`

const Left = styled.div`
    flex: 1;

`;

const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
            <Left>
            LEft
            </Left>
            <Center>CEnter</Center>
            <Right>Right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar