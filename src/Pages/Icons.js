import React from 'react'
import { GridContainer } from '../Components/gridElements'
import IconBox from '../Components/IconBox'
import { MainContent, MainContentWrapper, ContentHeader } from '../Components/mainContent'
import { icons_data } from '../icondData'



const Icons = ({ background, primary, alpha, accent, glass, textColor }) => {
   return (
      <>
         <ContentHeader headerBg={glass}>

            <h1 style={{ color: textColor }}>Icons</h1>
         </ContentHeader>
         <MainContentWrapper color={textColor}>

            <MainContent id="main_content" className='main_content'>



               <GridContainer>

                  {icons_data.map(icon => (
                     <IconBox icon={icon.icon} outerBg={primary} innerBg={alpha} accent={accent} />
                  ))}
               </GridContainer>



            </MainContent>
         </MainContentWrapper>
      </>

   )
}

export default Icons
