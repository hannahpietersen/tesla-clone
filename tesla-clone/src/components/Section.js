import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({title, description, leftBtn, rightBtn, backgroundImg}) {
  return (
    <Wrap bgImg ={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
       </ItemText>
     </Fade>
     <Buttons>
      <Fade bottom>
        <ButtonGroup>
          <LeftButton>
            {leftBtn}
          </LeftButton>
          { rightBtn && 
          <RightButton>
           {rightBtn}
          </RightButton>
          }
        </ButtonGroup>
     </Fade>
     <DownArrow src={"/images/down-arrow.svg"} />
     </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
   
   width: 100vw;
   height: 100vh;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   background-image: url('/images/model-s.jpg');
   @media only screen and (max-width: 480px) {
    width: 100%;
  }
   
   display: flex;
   flex-direction: column;
   justify-content: space-between; //vertical alignment
   align-items: center; //horizontal alignment
   background-image: ${props => `url("/images/${props.bgImg}")`}

   
   

   
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }

`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: fex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;


`

const RightButton = styled(LeftButton)`
 background-color: white;
 opacity: 0.65;
 color: black;
`

const DownArrow = styled.img`
   height: 40px;
   animation: animateDown infinite 1.5s;
   overflow-x: hidden;
`

const Buttons = styled.div`
  
`