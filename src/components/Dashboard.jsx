import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Category from "./Category";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import AddCategoryModal from "./AddCategoryModal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100vh;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-content: center;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  width: 10rem;
  margin-left: 1rem;
  &:hover {
    background-color: #0056b3;
  }
`;

const Dashboard = () => {
  const categories = useSelector((state) => state.dashboard.categories);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);

  return (
    <Container>
      <Header />
      <ButtonWrapper>
        <AddButton onClick={() => setShowAddCategoryModal(true)}>
          <FaPlus /> Add Category
        </AddButton>
      </ButtonWrapper>
      <CategoryContainer>
        {categories.map((category) => (
          <Category category={category} />
        ))}
      </CategoryContainer>
      {showAddCategoryModal && (
        <AddCategoryModal onClose={() => setShowAddCategoryModal(false)} />
      )}
      <Footer />
    </Container>
  );
};

export default Dashboard;
