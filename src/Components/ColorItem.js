import React, { useState } from 'react'
import styled from 'styled-components'


const ColorBox = styled.div`
   border: 1px rgba(0, 0, 0, 0.1) solid;
   background : ${props => props.bg};
   border-radius: 5px;
   transition: all ease .3s;
   box-shadow: rgb(0 0 0 / 20%) 1px 4px 12px;
   margin: 1em 0;
   cursor: pointer;
   overflow: hidden;
   position: relative;
   
   
   :hover{

      box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.24) , 0px 1px 10px 0px rgba(0,0,0,0.17) , 0px 2px 4px -1px rgba(0,0,0,0.28) ;
   }
   
`

const ColorSwatch = styled.div`
   height: 100px;
   width: 100%;
   background : ${props => props.swatchBg};
`
const ColorInfo = styled.div`
   margin: .75rem;
   text-align: center;
   background: ${props => props.bg};
   user-select: all;
`
const CopiedText = styled.small`
   display: ${({ copied }) => copied ? 'block' : 'none'};
   position: absolute;
   font-weight: 700;
   background: #15192573;
   padding: 3px;
   color: white;
   width: 100%;
   margin: auto;
   top: 0;
   left: 0;
   text-align: center;
`
const ColorItem = ({ bg, swatchBg }) => {

   const [copy, setCopy] = useState(false)
   const handleCopy = (el) => {

      document.execCommand("copy")
      setCopy(!copy)

      setTimeout(function () {
         setCopy(false)
      }, 800);
   }

   return (
      <ColorBox bg={bg}>
         <ColorSwatch className="swatch" swatchBg={swatchBg}></ColorSwatch>
         <ColorInfo className="info" onClick={handleCopy}>{swatchBg}</ColorInfo>
         <CopiedText copied={copy}>Copied!</CopiedText>
      </ColorBox>
   )
}

export default ColorItem
