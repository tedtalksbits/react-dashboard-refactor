import styled from "styled-components"
export const CardContainer = styled.div`

   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   grid-gap: 1rem;
   img {
   width: 100%;
   height: 200px;
   object-fit:cover;
   }
   margin-top: 5rem;
`
export const MediumCard = styled.div`
   /* border: 1px rgba(0, 0, 0, 0.1) solid; */
   padding: 1.2rem;
   /* margin: 1rem; */
   /* height: 350px; */
   /* width: 450px; */
   border-radius: 18px;
   background: ${props => props.cardBg};
   transition: all ease .4s;
   /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
   :hover{

     /* box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; */
   }
`