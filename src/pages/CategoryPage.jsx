import { useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import FiltersCategory from "../components/FiltersCategory";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import { useCategoryContext } from "../context/categorycontext";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-transform: uppercase;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const API = "https://dummyjson.com/products/category";

const CategoryPage = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getProductByCategory(`${API}/${slug}`);
  }, [slug]);

  const { getProductByCategory, categoryFilterProducts, productByCatLoading } =
    useCategoryContext();

  console.log("categoryFilterProducts: ", categoryFilterProducts);

  if (productByCatLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{slug}</Title>
      <FiltersCategory />
      <ProductContainer>
        {categoryFilterProducts &&
          categoryFilterProducts.map((item) => (
            <Product key={item.id} item={item} />
          ))}
      </ProductContainer>
      <Newletter />
      <Footer />
    </Container>
  );
};

export default CategoryPage;
