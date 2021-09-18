import styled from "styled-components";

export const NormalButton = styled.button`

   width: 100%;
   height: 4rem;
   background: ${props => props.buttonBg};
   border: 1px solid ${props => props.buttonBg};
   border-radius: ${({ rounded }) => (rounded ? '2rem' : '7px')};
   transition: background ease-in-out .8s;
   cursor: pointer;

   :hover{
       background: ${props => props.hoverBg};
    }

`

export const ButtonContainer = styled.div`
    margin: 5rem auto;
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: .875rem;
    grid-template-rows: 1fr 1fr 1fr 1fr; */
  
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));
    grid-gap: 1rem;
    max-width: 1000px;

    
    
`