import React from 'react'
import { ContentHeader, MainContent, MainContentWrapper } from '../Components/mainContent'
import { Table, TBody, TData, THead, THeader, TRow } from '../Components/tableComponents'
import { tables_data } from '../Components/tableData'

const Tables = ({ textColor, glass, secondary }) => {
   return (
      <>
         <ContentHeader headerBg={glass}>

            <h1 style={{ color: textColor, }}>Tables</h1>
         </ContentHeader>
         <MainContentWrapper color={textColor}>

            <MainContent id="main_content" className='main_content'>


               <Table >
                  <THead>
                     <TRow>
                        <THeader tableBg={secondary} >ID</THeader>
                        <THeader tableBg={secondary} >Favorite City</THeader>
                        <THeader tableBg={secondary} >Country</THeader>
                        <THeader tableBg={secondary} >Country Code</THeader>
                        <THeader tableBg={secondary} >Visted</THeader>
                     </TRow>
                  </THead>
                  <TBody>
                     {tables_data.map(data => (
                        <TRow>
                           <TData>{data.id}</TData>
                           <TData>{data.favCity}</TData>
                           <TData>{data.Country}</TData>
                           <TData>{data.countryCode}</TData>
                           <TData>{data.Visited}</TData>
                        </TRow>
                     ))}
                  </TBody>
               </Table>


            </MainContent>
         </MainContentWrapper>
      </>
   )
}

export default Tables
