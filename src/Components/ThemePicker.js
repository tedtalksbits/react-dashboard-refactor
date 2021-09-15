import React from 'react'
import styled from 'styled-components'


const ColorBox = styled.div`
   /* background: ${props => props.bg}; */
   background: #f8faff;
   height: 3rem;
   width: 6rem;
   /* position: absolute; */
   top:.375rem;
   right: .375rem;
   border-radius: 8px;
   cursor: pointer;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   border: 1px #e1e3e5 solid;
   display: grid;
   place-items: center;
   position: fixed;
`
const ColorItem = styled.div`
   background: ${props => props.bg};
   height: 2rem;
   width: 5rem;
   border-radius: 5px;
`
const ThemePicker = ({ primary, secondary, accent, black, grey, clickFunc }) => {
   return (
      <ColorBox onClick={clickFunc}>
         <ColorItem bg={secondary} />
      </ColorBox>
   )
}

export default ThemePicker
