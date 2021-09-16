import React, { useState } from 'react'
import styled from 'styled-components'
import ActionButton from './ActionButton'
import { link_data } from '../linkData'
import { Link } from 'react-router-dom'

const MainContainer = styled.nav`
   /* background: ${props => props.bGround || '#212121'}; */
   background: ${props => `linear-gradient(180deg, ${props.bGround} 0%, ${props.bGround2} 100%)`};
   transition: all cubic-bezier(0.18, 0.89, 0.32, 1.28) 400ms;
   position: absolute;
   z-index: 999;
   width: ${({ open }) => (open ? '355px' : '0')};
   height: 100vh;
   margin-right: 2rem;
   position: fixed;
      
`
const InnerContainer = styled.div`
   display: flex;
   align-items: center;
   height: 100%;
   justify-content: center;
   color: white;
   overflow: hidden;
`
const LinkContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction: column;
   height: 40%;
   
`
const SideBarLink = styled(Link)`
   cursor: pointer;
   position: relative;
   display: grid;
   place-items: center;
   width: 100px;
   font-size: 1.5rem;
   font-weight: bold;
   color: white;
   text-decoration: none;
   font-weight: 400;
  

   :hover{
     
      ::after{
         content: '';
         position: absolute;
         background: rgba(255,255,255,0.1);
         height: 3rem;
         width: 17rem;
         z-index: -1;
         transition: all ease-in-out .3s;
         opacity: .5;
         
      }
      
   }
   & ::after{
      background: red;
   }
  
`


const SideBar = ({ bGround, primary, secondary, accent, black, grey, width, shade }) => {
   let [isOpen, setIsOpen] = useState(false);

   const handleIsOpen = () => {
      const mainContent = document.getElementById('main_content');
      setIsOpen(!isOpen);
      // console.log(!isOpen);

      if (isOpen !== true) {

         mainContent.classList.add('open');
      }
      else {

         mainContent.classList.remove('open');
      }

   }

   const closeSideBar = () => {
      if (isOpen === true) {
         setIsOpen(false);
         document.getElementById('main_content').classList.remove('open');
      }
   }



   return (
      <>
         <MainContainer bGround={secondary} bGround2={shade} open={isOpen} onClick={closeSideBar}  >


            <InnerContainer >
               <LinkContainer>

                  {link_data.map(data => (

                     isOpen === true ?
                        <SideBarLink to={data.link}>
                           {data.title}
                        </SideBarLink>

                        :

                        <SideBarLink to={data.link}>
                           {data.icon}
                        </SideBarLink>

                  ))}
               </LinkContainer>
            </InnerContainer>

            {isOpen === true ? <ActionButton clickFunc={handleIsOpen} icon={<i class='bx bx-align-right toggler'></i>} col={secondary} /> : <ActionButton clickFunc={handleIsOpen} icon={<i class='bx bx-align-left toggler'></i>} col={secondary} />}




         </MainContainer>

      </>

   )

}
export default SideBar
