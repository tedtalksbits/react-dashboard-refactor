
import styled from 'styled-components'

export const MainContentWrapper = styled.div`
   display: grid;
   grid-template-columns: 1fr min(200ch, 100%) 1fr;
   padding: 1.5rem 1.5rem 1rem 0;

   & > *{
   grid-column: 2;
   }
   .full-bleed {
   width:100%;
   grid-column: 1 / 4;
   }

`
export const MainContent = styled.div`
   background: ${props => props.bg};
   /* height: 100vh; */
   /* overflow-y: auto;
   scroll-snap-type: y mandatory;
   scroll-behavior: smooth;
   -webkit-overflow-scrolling: touch; */

   


`

