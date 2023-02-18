import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "60px" })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const Form = styled.form`
  width: 50%;
`;

const Inputcontainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Newletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <Form method="POST" action="https://formspree.io/f/myyawzvo">
        <Inputcontainer>
          <Input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <Button>
            <Send />
          </Button>
        </Inputcontainer>
      </Form>
    </Container>
  );
};

export default Newletter;
