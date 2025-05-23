import React, { useState } from "react";
import styled from "styled-components";
import Widget from "./Widget";
import { FaPlus } from "react-icons/fa";
import AddWidgetModal from "./AddWidgetModal";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryContainer = styled.div`
  padding: 0 2rem;
`;

const CategoryTitle = styled.h2`
  color: ${({ theme }) => theme.bodyText};
  margin-bottom: 1rem;
`;

const WidgetCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.widgetBackground};
  border-radius: 1rem;
  padding: 1rem;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  height: 10rem;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

const Category = ({ category }) => {
  const [showAddWidgetModal, setShowAddWidgetModal] = useState(false);

  return (
    <>
      <CategoryContainer>
        <CategoryTitle>{category.name}</CategoryTitle>
        <Container>
          {category.widgets.map((widget) => (
            <Widget key={widget.id} widget={widget} categoryId={category.id} />
          ))}
          <WidgetCard>
            <AddButton onClick={() => setShowAddWidgetModal(true)}>
              <FaPlus />
              Add Widget
            </AddButton>
          </WidgetCard>
        </Container>
        {showAddWidgetModal && (
          <AddWidgetModal
            categoryId={category.id}
            onClose={() => setShowAddWidgetModal(false)}
          />
        )}
      </CategoryContainer>
    </>
  );
};

export default Category;
