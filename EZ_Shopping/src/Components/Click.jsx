import React from 'react'
import styled from "styled-components"


function Click() {
  return (
    <div>
      <StyledButton>Clear basket</StyledButton>
    </div>
  )
}

export default Click


const StyledButton = styled.button`
  background-color: #FFCA2C;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  outline: none;
  -webkit-user-select: none;
  text-decoration: none;
  cursor: pointer;
  border-style: none;
`