import React from 'react'
import { basic_buttons_data, rounded_buttons_data } from '../buttonsData'
import { ButtonContainer, NormalButton } from '../Components/buttonElements'
import { ContentHeader, MainContent, MainContentWrapper } from '../Components/mainContent'

const Buttons = ({ glass, textColor, accent, alpha, secondary }) => {
   return (
      <>
         <ContentHeader headerBg={glass}>

            <h1 style={{ color: textColor }}>Buttons</h1>
         </ContentHeader>
         <MainContentWrapper color={textColor}>

            <MainContent id="main_content" className='main_content'>

               <ButtonContainer>
                  {basic_buttons_data.map(button => (
                     <NormalButton buttonBg={alpha} rounded={button.rounded} hoverBg={secondary} style={{ color: textColor }} >
                        {button.label}
                     </NormalButton>
                  ))}
                  {rounded_buttons_data.map(r_button => (
                     <NormalButton buttonBg={accent} rounded={r_button.rounded} hoverBg={secondary} style={{ color: textColor }}>
                        {r_button.label}
                     </NormalButton>
                  ))}
               </ButtonContainer>



            </MainContent>
         </MainContentWrapper>
      </>
   )
}

export default Buttons
