import React from 'react'
import LineChartOne from '../Charts/LineChartOne'
import { CardContainer, MediumCard } from '../Components/cardElements'
import IconBox from '../Components/IconBox'
import { MainContent, MainContentWrapper } from '../Components/mainContent'

const PageTwo = ({ secondary, main, textColor, shade, primary, background }) => {
   return (
      <MainContentWrapper background={background} color={textColor}>
         <MainContent id="main_content" className='main_content wrapper'>
            <h1> Page Two</h1>
            <CardContainer >
               <MediumCard cardBg={primary}>
                  <h1>Card</h1>
               </MediumCard>
               <MediumCard cardBg={primary}>
                  <h3>Chart</h3>
                  <LineChartOne colorTheme={secondary} colorOutline={shade} />
               </MediumCard>
            </CardContainer>
            <LineChartOne colorTheme={secondary} colorOutline={shade} />
         </MainContent>
      </MainContentWrapper>

   )
}

export default PageTwo
