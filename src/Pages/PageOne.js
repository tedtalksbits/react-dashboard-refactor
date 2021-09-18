import React from 'react'
import { GridContainer, GridWrapper } from '../Components/gridElements'
import IconBox from '../Components/IconBox'
import { MainContent, MainContentWrapper, ContentHeader } from '../Components/mainContent'
import { icons_data } from '../icondData'



const PageOne = ({ background, primary, textColor, alpha, accent }) => {
   return (
      <>
         <ContentHeader headerBg={alpha}>

            <h1>Icons</h1>
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

export default PageOne
