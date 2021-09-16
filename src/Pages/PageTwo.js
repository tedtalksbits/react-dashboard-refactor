import React from 'react'
import LineChartOne from '../Charts/LineChartOne'
import { CardContainer, MediumCard } from '../Components/cardElements'
import { MainContent, MainContentWrapper } from '../Components/mainContent'

const PageTwo = ({ secondary, main, darker }) => {
   return (
      <MainContentWrapper>
         <MainContent id="main_content" className='main_content wrapper'>
            <h1> Page Two</h1>
            <CardContainer >
               <MediumCard >
                  <h1>Card</h1>
               </MediumCard>
               <MediumCard >
                  <h1>Card</h1>
               </MediumCard>
               <MediumCard >
                  <h1>Card</h1>
               </MediumCard>
               <MediumCard >
                  <h3>Chart</h3>
                  <LineChartOne colorTheme={secondary} colorOutline={darker} />
               </MediumCard>
            </CardContainer>
            <LineChartOne colorTheme={secondary} colorOutline='black' />
         </MainContent>
      </MainContentWrapper>

   )
}

export default PageTwo
