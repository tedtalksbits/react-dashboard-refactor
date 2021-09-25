import styled from "styled-components";
import React from 'react'

export const TableContainer = styled.div`

   background: ${({ dualTone }) => (dualTone ? '' : 'white')};
   border-radius: ${({ dualTone }) => (dualTone ? '' : '6px')};
   padding: ${({ dualTone }) => (dualTone ? '' : '1rem')};
   margin: ${({ dualTone }) => (dualTone ? '' : '4rem 0')};
   /* min-width: 600px; */
   overflow-x: auto;
   scroll-snap-type: x mandatory;
   scroll-behavior: smooth;
   -webkit-overflow-scrolling: touch;
   

`
export const TableType = styled.h3`
   font-weight: 500;
   margin: ${({ dualTone }) => (dualTone ? '1.5rem 0' : '1.5rem 1rem')};
   color: ${({ dualTone }) => (dualTone ? '' : '#202020')};
`
export const Table = styled.table`
   background: white;
   width: 100%;
   margin: auto;
   border-collapse: collapse;
   text-align: center;
   border-radius: 12px;
   overflow: hidden;
   border-spacing: 0;
   /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
   box-shadow: ${({ dualTone }) => (dualTone ? 'rgba(0, 0, 0, 0.1) 0px 4px 12px' : '')};
   /* margin-top: 5rem; */
  
   /* display: block;
   & > *, table tr, table td, table th {
    display: block;
   }
   & thead {
    display: none;
   } */
   
   
`

export const THead = styled.thead`

`
export const TBody = styled.tbody`
   color: #212121a2;

`

export const TRow = styled.tr`
   border-bottom: 1px lightgrey solid;
   text-transform: uppercase;
   cursor: pointer;
   transition: all .4s;

   :hover{
      background: linear-gradient(90deg, #ffffff12 0% ,#f2f2f2 40%, #ffffff12 62%);
      box-shadow: 0px 20px 25px -5px rgba(0,0,0,0.1) , 0px 10px 10px -5px rgba(0,0,0,0.04) ;
   }
   :nth-child(odd){
      background: ${({ dualTone }) => (dualTone ? '#f5f5f5' : '')};
   }
`

export const THeader = styled.th`
   background: ${props => props.tableBg};
   padding: 10px 15px;
   height: 5rem;
   color: ${({ dualTone }) => (dualTone ? 'white' : '#212121ad')};
`

export const TData = styled.td`
   padding: 10px 15px;

`
