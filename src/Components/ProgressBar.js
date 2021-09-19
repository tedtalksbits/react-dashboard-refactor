import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   width: 100%;
`

const Bar = styled.div`
   width: ${props => props.percentage};
   background-color: ${props => props.col};
   box-shadow: 0px 0px 5px 0px ${props => props.col};
   height: 12px;
   border-radius: 20px 0 0 20px;
   transition: ease-in-out all .3s;
   margin: .375rem 0 1.5rem;

`
const BarContainer = styled.div`

   background: aliceblue;
`
const TechInfoContainer = styled.div`

   display: flex;
   justify-content: space-between;
   align-items: center;
`

const ProgressBar = ({ percentage, col, tech }) => {
   return (
      <>
         <Container>

            <TechInfoContainer>
               <div>
                  {tech}
               </div>
               <div className="percentage">
                  {percentage}
               </div>
            </TechInfoContainer>


            <BarContainer className="bar_div">

               <Bar percentage={percentage} col={col} >
               </Bar>
            </BarContainer>


         </Container>

      </>
   )
}

export default ProgressBar
