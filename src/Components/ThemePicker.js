import React from 'react'
import styled from 'styled-components'

const ColorBox = styled.div`
   background: ${props => props.bg};
   height: 3rem;
   width: 3rem;
   position: absolute;
   right: 0;
   border-radius: 50%;
   cursor: pointer;
`
const ThemePicker = ({ primary, secondary, accent, black, grey, clickFunc }) => {
   return (
      <ColorBox bg={secondary} onClick={clickFunc}>

      </ColorBox>
   )
}

export default ThemePicker
