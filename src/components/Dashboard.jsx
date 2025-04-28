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
  overflow: hidden;
  background-color: ${({ theme }) => theme.bodyBackground};
  color: ${({ theme }) => theme.bodyText};
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }
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
  background-color: ${({ theme }) =>
    theme.buttonBackground}; /* Dynamic button background */
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  width: 10rem;
  margin-left: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

const NoCategoriesMessage = styled.div`
  text-align: center;
  color: #666;
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const Dashboard = () => {
  const categories = useSelector((state) => state.dashboard.categories);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const searchTerm = useSelector((state) => state.dashboard.searchTerm);

  const filteredCategories = searchTerm
    ? categories
        .map((category) => ({
          ...category,
          widgets: category.widgets.filter(
            (widget) =>
              widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              widget.content.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        }))
        .filter((category) => category.widgets.length > 0)
    : categories;

  return (
    <Container>
      <Header />
      <ButtonWrapper>
        <AddButton onClick={() => setShowAddCategoryModal(true)}>
          <FaPlus /> New Category
        </AddButton>
      </ButtonWrapper>
      <CategoryContainer>
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <Category key={category.id} category={category} />
          ))
        ) : searchTerm ? (
          <NoCategoriesMessage>No matching widgets found.</NoCategoriesMessage>
        ) : (
          <NoCategoriesMessage>No categories available.</NoCategoriesMessage>
        )}
      </CategoryContainer>
      {showAddCategoryModal && (
        <AddCategoryModal onClose={() => setShowAddCategoryModal(false)} />
      )}
      <Footer />
    </Container>
  );
};

export default Dashboard;
