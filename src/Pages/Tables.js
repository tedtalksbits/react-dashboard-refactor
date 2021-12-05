import React, { useState } from 'react'
import ProgressBar from '../Components/ProgressBar'
import { ContentHeader, MainContent, MainContentWrapper } from '../Components/mainContent'
import { Table, TableContainer, TableType, TBody, TData, THead, THeader, TRow } from '../Components/tableComponents'
import { tables_data, tables_data_2 } from '../tableData'

const Tables = ({ textColor, glass, secondary }) => {
   const [percentage, setPercentage] = useState('30%')

   return (
      <>
         <ContentHeader headerBg={glass}>

            <h1 style={{ color: textColor, }}>Tables</h1>
         </ContentHeader>
         <MainContentWrapper color={textColor}>

            <MainContent id="main_content" className='main_content'>

               <TableContainer className="text" dualTone={true}>
                  <TableType dualTone={true}>Themed Table</TableType>
                  <Table dualTone={true}>
                     <THead>
                        <TRow gradientBg={secondary}>
                           <THeader tableBg={secondary} dualTone={true}>ID</THeader>
                           <THeader tableBg={secondary} dualTone={true}>Favorite City</THeader>
                           <THeader tableBg={secondary} dualTone={true}>Country</THeader>
                           <THeader tableBg={secondary} dualTone={true}>Country Code</THeader>
                           <THeader tableBg={secondary} dualTone={true}>Visted</THeader>
                        </TRow>
                     </THead>
                     <TBody>
                        {tables_data.map(data => (
                           <TRow dualTone={true}>
                              <TData>{data.id}</TData>
                              <TData>{data.favCity}</TData>
                              <TData>{data.Country}</TData>
                              <TData>{data.countryCode}</TData>
                              <TData>{data.Visited}</TData>
                           </TRow>
                        ))}
                     </TBody>
                  </Table>
               </TableContainer>
               <TableContainer className="text">
                  <TableType>Normal Table</TableType>
                  <Table >
                     <THead>
                        <TRow>
                           <THeader >ID</THeader>
                           <THeader >Skill</THeader>
                           <THeader >Start Date</THeader>
                           <THeader >Master</THeader>
                           <THeader >Percentage</THeader>
                        </TRow>
                     </THead>
                     <TBody>
                        {tables_data_2.map(data => (
                           <TRow dualTone={false}>
                              <TData>{data.id}</TData>
                              <TData>{data.skill}</TData>
                              <TData>{data.startDate}</TData>
                              <TData>{data.mastered}</TData>
                              <TData><ProgressBar percentage={data.percentage} col={secondary} /></TData>
                           </TRow>
                        ))}
                        <TRow>
                           <TData contentEditable>99</TData>
                           <TData>State</TData>
                           <TData>1 / 1 / 2022</TData>
                           <TData>True</TData>
                           <TData >
                              <ProgressBar percentage={percentage + "%"} col='green' />
                              <input onChange={(e) => setPercentage(e.target.value)} type="range" value={percentage} />
                              {percentage}
                           </TData>
                        </TRow>
                     </TBody>
                  </Table>
               </TableContainer>


            </MainContent>
         </MainContentWrapper>
      </>
   )
}

export default Tables
