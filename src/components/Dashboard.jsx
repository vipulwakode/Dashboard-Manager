import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Category from "./Category";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Dashboard = () => {
  const categories = useSelector((state) => state.dashboard.categories);

  return (
    <Container>
      <Header />
      <CategoryContainer>
        {" "}
        {categories.map((category) => (
          <Category category={category} />
        ))}
      </CategoryContainer>

      <Footer />
    </Container>
  );
};

export default Dashboard;
