import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <StyledFooter>
      <FooterParagraph>
        Copyright &copy; Erik Claesson & Shrreya {new Date().getFullYear()}
      </FooterParagraph>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background: #333;
  min-height: var(--footer-height);
  display: flex;
  justify-content: center;
  align-items: center;
`

const FooterParagraph = styled.p`
  text-align: center;
  font-size: inherit;
  color: #fff;
`

export default Footer
