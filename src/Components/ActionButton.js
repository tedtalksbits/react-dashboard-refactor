import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   background: ${props => props.col};
   /* width: 5.5rem;
   height: 4rem;
   border-radius: 45%; */
   height: 90px;
   width: 45px;
   border-bottom-right-radius: 90px;
   border-top-right-radius: 90px;
   padding: .2rem;
   display: grid;
   place-items: center;
   color: white;
   position: absolute;
   right: -45px;
   top: 10rem;
   cursor: pointer;
   
`

const ActionButton = ({ clickFunc, icon, col }) => {
   return (
      <Container onClick={clickFunc} col={col}>
         {icon}
      </Container>
   )
}
export default ActionButton
