import React from 'react'
import styled from 'styled-components'
import { MainContent, MainContentWrapper } from '../Components/mainContent'
import { paletteData } from '../pallettesData'

const ColorBoxGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
   grid-gap: 1rem;
   margin: 2rem 0;

   img {
   width: 100%;
   height: 200px;
   object-fit:cover;
   }
`
const ColorBox = styled.div`
 border: 1px rgba(0, 0, 0, 0.1) solid;
   background : ${props => props.bg};
   /* width: 4rem;
   height: 4.5rem; */
   height: 200px;
   border-radius: 18px;
   transition: all ease .4s;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
   margin: 1em 0;
   cursor: pointer;
   :hover{

      box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.24) , 0px 1px 10px 0px rgba(0,0,0,0.17) , 0px 2px 4px -1px rgba(0,0,0,0.28) ;
   }
   
`

const Pallettes = ({ background, textColor }) => {
   return (
      <MainContentWrapper background={background} color={textColor}>

         <MainContent className="main_content wrapper" id="main_content">
            <h1>Page Three</h1>


            <ColorBoxGrid>
               {paletteData.map(data => (
                  <div className="me">
                     <ColorBox bg={data.darker} />
                     <ColorBox bg={data.dark} />
                     <ColorBox bg={data.main} />
                     <ColorBox bg={data.light} />
                     <ColorBox bg={data.lighter} />
                     <br />
                  </div>
               ))}
            </ColorBoxGrid>



         </MainContent>
      </MainContentWrapper>
   )
}

export default Pallettes
