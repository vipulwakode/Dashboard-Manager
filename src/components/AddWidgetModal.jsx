import React from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addWidget } from "../store/dashboardSlice";

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
  background-color: ${({ theme }) => theme.modalBackground};
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
  color: ${({ theme }) => theme.closeIconColor};
  font-size: 1.5rem;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.bodyText};
  outline: none;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.inputBackground};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.bodyText};
  resize: none;
  outline: none;
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

  &:hover.confirm {
    background-color: #0056b3;
  }

  &:hover.cancel {
    background-color: #e0e0e0;
  }
`;

const AddWidgetModal = ({ categoryId, onClose }) => {
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();
  const category = categories.find((cat) => cat.id === categoryId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const widgetName = e.target.elements.widgetName.value;
    const widgetContent = e.target.elements.widgetContent.value;

    dispatch({
      type: addWidget,
      payload: { categoryId, widgetName, widgetContent },
    });

    e.target.elements.widgetName.value = "";
    e.target.elements.widgetContent.value = "";
    onClose();
  };

  return (
    <Modal>
      <ModalWrapper>
        <ModalHeader>
          <h2>Add Widget to {category.name} </h2>
          <CloseIcon onClick={onClose} />
        </ModalHeader>
        <ModalContent>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="widgetName"
              placeholder="Enter widget name"
              required
            />
            <TextArea
              name="widgetContent"
              rows="4"
              placeholder="Enter widget content"
              required
            />
            <ButtonGroup>
              <Button type="submit" className="confirm">
                Confirm
              </Button>
              <Button type="button" className="cancel" onClick={onClose}>
                Cancel
              </Button>
            </ButtonGroup>
          </Form>
        </ModalContent>
      </ModalWrapper>
    </Modal>
  );
};

export default AddWidgetModal;
