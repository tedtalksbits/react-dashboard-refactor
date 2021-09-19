import styled from "styled-components";
import React from 'react'

export const TableContainer = styled.div`

   background: ${({ dualTone }) => (dualTone ? '' : 'white')};
   border-radius: ${({ dualTone }) => (dualTone ? '' : '6px')};
   padding: ${({ dualTone }) => (dualTone ? '' : '1rem')};
   margin: ${({ dualTone }) => (dualTone ? '' : '4rem 0')};

`
export const TableType = styled.h3`
   font-weight: 500;
   margin: ${({ dualTone }) => (dualTone ? '1.5rem 0' : '1.5rem 1rem')};;
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
`

export const THead = styled.thead`

`
export const TBody = styled.tbody`
   color: #212121a2;

`

export const TRow = styled.tr`
   border-bottom: 1px lightgrey solid;
   text-transform: uppercase;

   :nth-child(odd){
      background: ${({ dualTone }) => (dualTone ? '#eeeeee' : '')};
   }
`

export const THeader = styled.th`
   background: ${props => props.tableBg};
   padding: 10px 15px;
   height: 5rem;

`

export const TData = styled.td`
   padding: 10px 15px;

`
