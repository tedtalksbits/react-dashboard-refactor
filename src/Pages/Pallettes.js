import React from 'react'
import styled from 'styled-components'
import ColorItem from '../Components/ColorItem'
import { ContentHeader, MainContent, MainContentWrapper } from '../Components/mainContent'
import { paletteData } from '../pallettesData'

const ColorBoxGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
   grid-gap: 1rem;
   margin: 5rem 0;
   transition: all ease .4s;

   img {
   width: 100%;
   height: 200px;
   object-fit:cover;
   }
`


const Pallettes = ({ background, textColor, alpha, glass, primary }) => {

   return (
      <>
         <ContentHeader headerBg={glass}>

            <h1 style={{ color: textColor }}>Palettes</h1>
         </ContentHeader>
         <MainContentWrapper color={textColor}>

            <MainContent className="main_content wrapper" id="main_content">


               <ColorBoxGrid>
                  {paletteData.map((data, index) => (
                     <div key={index}>
                        <ColorItem bg={primary} swatchBg={data.darker} />
                        <ColorItem bg={primary} swatchBg={data.dark} />
                        <ColorItem bg={primary} swatchBg={data.main} />
                        <ColorItem bg={primary} swatchBg={data.light} />
                        <ColorItem bg={primary} swatchBg={data.lighter} />
                     </div>
                  ))}
               </ColorBoxGrid>



            </MainContent>
         </MainContentWrapper>
      </>
   )
}

export default Pallettes
