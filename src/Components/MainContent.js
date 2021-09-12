import React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`

  display: grid;
  grid-template-columns: 1fr min(200ch, 100%) 1fr;
  margin-left: ${({ toggleMargin }) => (toggleMargin ? ' 450px' : '8.5rem')};

  & > *{
   grid-column: 2;
  }
  & .full-bleed {
   width:100%;
   grid-column: 1 / 4;
  }

`
const MainContent = ({ isOpen }) => {
   return (
      <ContentWrapper>
         <h1>page</h1>
      </ContentWrapper>
   )
}

export default MainContent
