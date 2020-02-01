import { Link } from "@reach/router"
import styled from "styled-components"

export default styled(Link)`
  display: block;
  width: ${props => (props.full ? "100%" : "fit-content")};
  margin: ${props => (props.marginauto ? "auto" : "unset")};
  font-size: calc(0.7rem + 1vmin);
  line-height: 3rem;
  border: 3px solid transparent;
  cursor: pointer;
  text-decoration: none;
  color: var(--mainWhite);
  background-color: var(--mainBlack);
  padding: 0 20px;
  border-radius: var(--borderRadius-1);
  outline: 0;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  -webkit-appearance: none;
  transition: transform 0.05s ease;
  &:active {
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
  }
  &:focus {
    box-shadow: 0 0 0 3px rgba(110, 58, 194, 0.5);
    -webkit-box-shadow: 0 0 0 3px rgba(110, 58, 194, 0.5);
    -webkit-appearance: none;
  }
`
