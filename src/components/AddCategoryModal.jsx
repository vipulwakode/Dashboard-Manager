import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import styled from "styled-components";
import { availableWidgets } from "../data/initialData";
import { addCategory } from "../store/dashboardSlice";
import { useDispatch } from "react-redux";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  background-color: #f7f7f7;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #eaeaea;
`;

const CloseIcon = styled(FiX)`
  cursor: pointer;
  color: #333;
  font-size: 1.5rem;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

const WidgetListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const WidgetListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: ${({ checked }) => (checked ? "#EDF5E3" : "white")};
  border: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    background-color: ${({ checked }) => (checked ? "#EDF5E3" : "#F7F7F7")};
  }
`;

const WidgetName = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const Checkbox = styled.input`
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &.confirm {
    background-color: #007bff;
    color: white;
  }

  &.cancel {
    background-color: #f5f5f5;
    color: #333;
  }

  &:hover.confirm:not(:disabled) {
    background-color: #0056b3;
  }

  &:hover.cancel {
    background-color: #e0e0e0;
  }

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`;

const AddCategoryModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [selectedWidgets, setSelectedWidgets] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const handleToggleWidget = (widget) => {
    setSelectedWidgets((prev) => {
      const isSelected = prev.find((selected) => selected.id === widget.id);
      if (isSelected) {
        return prev.filter((selected) => selected.id !== widget.id);
      } else {
        return [...prev, widget];
      }
    });
  };

  const isWidgetChecked = (widget) => {
    return selectedWidgets.some((selected) => selected.id === widget.id);
  };

  const handleAddCategory = () => {
    dispatch(addCategory({ categoryName, selectedWidgets }));
    onClose();
  };

  return (
    <Modal>
      <ModalWrapper>
        <ModalHeader>
          <h2>Add new category</h2>
          <CloseIcon onClick={onClose} />
        </ModalHeader>
        <ModalContent>
          <Input
            type="text"
            placeholder="Enter category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <h3>Select from available widgets</h3>
          <WidgetListContainer>
            {availableWidgets.map((widget) => (
              <WidgetListItem
                key={widget.id}
                onClick={() => handleToggleWidget(widget)}
                checked={isWidgetChecked(widget)}
              >
                <Checkbox
                  type="checkbox"
                  id={widget.id}
                  checked={isWidgetChecked(widget)}
                  readOnly
                />
                <WidgetName>{widget.name}</WidgetName>
              </WidgetListItem>
            ))}
          </WidgetListContainer>
          <ButtonGroup>
            <Button
              type="submit"
              className="confirm"
              onClick={handleAddCategory}
              disabled={!categoryName}
            >
              Confirm
            </Button>
            <Button type="button" className="cancel" onClick={onClose}>
              Cancel
            </Button>
          </ButtonGroup>
        </ModalContent>
      </ModalWrapper>
    </Modal>
  );
};

export default AddCategoryModal;
