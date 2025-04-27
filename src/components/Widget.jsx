import React from "react";
import styled from "styled-components";

const WidgetCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  z-index: 10;
  height: 10rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const WidgetName = styled.h2`
  font-size: 1.5rem;
`;
const WidgetDescription = styled.p`
  font-size: 1rem;
  color: gray;
`;

const widget = ({ widget }) => {
  return (
    <WidgetCard>
      <WidgetName>{widget.name}</WidgetName>
      <WidgetDescription>{widget.content}</WidgetDescription>
    </WidgetCard>
  );
};

export default widget;
