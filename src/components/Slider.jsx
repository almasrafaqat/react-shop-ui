import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { useProductContext } from "../context/productcontext";
import { mobile } from "../responsive";
import PlaceholderLoading from "react-placeholder-loading";
import { Link } from "../GlobalStyle";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  background-color: coral;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  // background-color: transparent;
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
const Slider = () => {
  const { products, isLoading } = useProductContext();

  const shuffle = (products) => [...products].sort(() => Math.random() - 0.5);
  const ShuffleProducts = shuffle(products);

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2); // 2 > 0 ? 2 - 1 = 1 => -200wv - 100vw = -100vw; 1 > 0 ? 1 -1 = 0 => -0vw;
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0); // 0 < 2 ? 0 + 1 = 1 => -100vw; 1 < 2 ? 1 + 1 = 2 => 200-vw;
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {isLoading ? (
          <PlaceholderLoading shape="rect" width={"99vw"} height={"100vh"} />
        ) : (
          products.slice(0, 3)?.map((item) => {
            return (
              <Slide key={item.id} bg="lightgray">
                <ImageContainer>
                  <Image src={item.thumbnail} />
                </ImageContainer>
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Desc>{item.description}</Desc>
                  <Button>
                    {" "}
                    <Link to={`/singleproduct/${item.id}`}>Buy Now! </Link>
                  </Button>
                </InfoContainer>
              </Slide>
            );
          })
        )}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
