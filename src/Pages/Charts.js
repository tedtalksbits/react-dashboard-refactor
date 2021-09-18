import React from 'react'
import LineChartOne from '../Charts/LineChartOne'
import { CardContainer, MediumCard } from '../Components/cardElements'
import IconBox from '../Components/IconBox'
import { ContentHeader, MainContent, MainContentWrapper } from '../Components/mainContent'

const Charts = ({ secondary, main, textColor, shade, primary, background, alpha, glass }) => {
   return (
      <>

         <ContentHeader headerBg={glass}>

            <h1 style={{ color: textColor }}>Charts</h1>
         </ContentHeader>
         <MainContentWrapper color={textColor}>
            <MainContent id="main_content" className='main_content wrapper'>
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
      </>

   )
}

export default Charts
