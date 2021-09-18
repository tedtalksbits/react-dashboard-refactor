import styled from "styled-components";

export const Table = styled.table`
   background: white;
   width: 60%;
   margin: auto;
   border-collapse: collapse;
   text-align: center;
   border-radius: 12px;
   overflow: hidden;
   border-spacing: 0;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
   margin-top: 5rem;
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
      background: #eeeeee;
   }
`

export const THeader = styled.th`
   background: ${props => props.tableBg};
   color: white;
   padding: 10px 15px;

`

export const TData = styled.td`
   padding: 10px 15px;

`