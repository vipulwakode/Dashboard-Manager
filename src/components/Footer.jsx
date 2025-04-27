import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(18, 132, 189);
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 1rem;
  height: 5rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 Widget Board. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
