import React from "react"
import styled from "styled-components"

const Error = props => {
  return (
    <StyledDiv>
      <h1>{props.message}</h1>
      <StyledSpan className="emoticon" role="img" aria-label="Girl Emoticon">
        🤦‍♀️
      </StyledSpan>
    </StyledDiv>
  )
}

Error.defaultProps = {
  message: "An error has occured..."
}

const StyledDiv = styled.div`
  text-align: center;
`

const StyledSpan = styled.span`
  font-size: calc(1.7rem + 1vmin);
`

export default Error
