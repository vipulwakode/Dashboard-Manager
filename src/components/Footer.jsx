import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.headerBackground};
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 1rem;
  height: 4.5rem;
`;

const FooterText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.bodyText};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2025 Dashboard Manager 📊 Developed with ❤️ by Vipul Wakode
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
