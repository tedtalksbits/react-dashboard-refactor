import React from 'react'
import { MainContent, MainContentWrapper } from '../Components/mainContent'



const PageOne = ({ background, lightText, textColor }) => {
   return (
      <MainContentWrapper background={background} color={textColor}>

         <MainContent id="main_content" className='main_content'>
            <h1>Page One</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minus aliquid facilis libero incidunt quasi labore quae, ipsa perferendis et? </h2>

         </MainContent>
      </MainContentWrapper>

   )
}

export default PageOne
