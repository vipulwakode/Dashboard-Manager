import React from "react";
import { FiX } from "react-icons/fi";
import styled from "styled-components";
import { removeWidget } from "../store/dashboardSlice";
import { useDispatch } from "react-redux";

const WidgetCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.widgetBackground};
  border-radius: 1rem;
  padding: 1rem;
  z-index: 10;
  height: 10rem;
  box-shadow: 0 2px 4px ${({ theme }) => theme.widgetBoxShadow};
`;

const WidgetName = styled.h2`
  color: ${({ theme }) => theme.bodyText};
  font-size: 1.5rem;
  margin: 0;
`;
const WidgetDescription = styled.p`
  font-size: 1rem;
  color: gray;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CloseIcon = styled(FiX)`
  cursor: pointer;
  color: ${({ theme }) => theme.closeIconColor};
  font-size: 1.5rem;
`;

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({
      type: removeWidget,
      payload: { categoryId, widgetId: widget.id },
    });
  };
  return (
    <WidgetCard>
      <Header>
        <WidgetName>{widget.name}</WidgetName>
        <CloseIcon onClick={handleClose} />
      </Header>
      <WidgetDescription>{widget.content}</WidgetDescription>
    </WidgetCard>
  );
};

export default Widget;
