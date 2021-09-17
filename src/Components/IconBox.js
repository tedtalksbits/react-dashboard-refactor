import React from 'react'
import styled from 'styled-components'

const OuterBox = styled.div`
   width: 10rem;
   height: 10rem;
   background: #2b313f;
   border-radius: 5px;
   display: grid;
   place-items: center;

`
const InnerBox = styled.div`
   width: 4rem;
   height: 4rem;
   background: rgba(233,30,99,.4);
   border-radius: 1rem;
   display: grid;
   place-items: center;
   border: 1px solid rgba(233, 30, 99,.3);

`
const Icon = styled.div`
   * > {

      color: blue;
   }
`
const IconBox = () => {
   return (
      <OuterBox>
         <InnerBox>
            <Icon >
               <i class='bx bxs-network-chart' />
            </Icon>
         </InnerBox>
      </OuterBox>
   )
}

export default IconBox
