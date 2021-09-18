import React from 'react'
import styled from 'styled-components'

const OuterBox = styled.div`
   width: 10rem;
   height: 10rem;
   background: ${props => props.outerBg};
   border-radius: 8px;
   display: grid;
   place-items: center;

`
const InnerBox = styled.div`
   width: 4rem;
   height: 4rem;
   background: ${props => props.innerBg};
   border-radius: 1rem;
   display: grid;
   place-items: center;
   border: 1px solid ${props => props.innerBg};

`
const Icon = styled.div`
   i {

     
      
   }
`
const IconBox = ({ icon, innerBg, outerBg }) => {
   return (
      <OuterBox outerBg={outerBg}>
         <InnerBox innerBg={innerBg}>
            <Icon >
               {icon}
            </Icon>
         </InnerBox>
      </OuterBox >
   )
}

export default IconBox
