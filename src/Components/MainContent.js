
import styled from 'styled-components'

export const MainContentWrapper = styled.div`

   display: grid;
   grid-template-columns: 1fr min(200ch, 100%) 1fr;
   background: ${props => props.background};
   color: ${props => props.color};
   transition: .3s all;
   width: 100%;
   padding: 1rem;

   > * input{
      color: ${props => props.color};
   }
   > * {
   grid-column: 2;
   }
   > * .full-bleed {
   width:100%;
   grid-column: 1 / 4;
   }

   @media screen and (min-width: 768px){
      height: 100%;
   }

   

`
export const MainContent = styled.div`
   /* background: ${props => props.bg};
   height: 100vh;
   padding: 1.5rem; */

   /* overflow-y: auto;
   scroll-snap-type: y mandatory;
   scroll-behavior: smooth;
   -webkit-overflow-scrolling: touch; */

   


`
export const ContentHeader = styled.div`
   background: ${prop => prop.headerBg};
   padding: .875rem;
   position: fixed;
   width: 100%;
   z-index: 0;
   backdrop-filter: blur(5px);

`

