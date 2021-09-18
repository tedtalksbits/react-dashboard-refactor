import React from 'react'
import { ContentHeader, MainContent, MainContentWrapper } from '../Components/mainContent'

const Tables = ({ textColor, glass }) => {
   return (
      <>
         <ContentHeader headerBg={glass}>

            <h1 style={{ color: textColor }}>Tables</h1>
         </ContentHeader>
         <MainContentWrapper color={textColor}>

            <MainContent id="main_content" className='main_content'>


               <h1>ehllo</h1>



            </MainContent>
         </MainContentWrapper>
      </>
   )
}

export default Tables
