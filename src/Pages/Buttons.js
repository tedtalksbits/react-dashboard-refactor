import React from 'react'
import { ContentHeader, MainContent, MainContentWrapper } from '../Components/mainContent'

const Buttons = ({ glass, textColor }) => {
   return (
      <>
         <ContentHeader headerBg={glass}>

            <h1 style={{ color: textColor }}>Buttons</h1>
         </ContentHeader>
         <MainContentWrapper color={textColor}>

            <MainContent id="main_content" className='main_content'>


               <h1>button</h1>



            </MainContent>
         </MainContentWrapper>
      </>
   )
}

export default Buttons
