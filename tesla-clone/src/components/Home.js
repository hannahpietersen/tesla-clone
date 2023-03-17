import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section 
          title=  "Model S"
          description= "Order Online for Touchless Delivery"
          backgroundImg= "model-s.jpg"
          leftBtn= "custom order"
          rightBtn= "existing inventory"
      />
      <Section 
          title=  "Model Y"
          description= "Order Online for Touchless Delivery"
          backgroundImg= "model-y.jpg"
          leftBtn= "custom order"
          rightBtn= "existing inventory"
      />
      <Section 
          title=  "Model 3"
          description= "Order Online for Touchless Delivery"
          backgroundImg= "model-3.jpg"
          leftBtn= "custom order"
          rightBtn= "existing inventory"
      />
      <Section 
          title=  "Model X"
          description= "Order Online for Touchless Delivery"
          backgroundImg= "model-x.jpg"
          leftBtn= "custom order"
          rightBtn= "existing inventory"
      />
      <Section 
          title=  "Lowest Cost Solar Panels in America"
          description= "Money-back guarantee"
          backgroundImg= "solar-panel.jpg"
          leftBtn= "order now"
          rightBtn= "learn more"
      />
      <Section 
          title=  "Solar for New Roofs"
          description= "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg= "solar-roof.jpg"
          leftBtn= "order now"
          rightBtn= "learn more"
      />
      <Section 
          title=  "Accesories"
          description= ""
          backgroundImg= "accessories.jpg"
          leftBtn= "shop now"
          rightBtn= ""
      />
    </Container>
  )
}

export default Home
const Container = styled.div`
      height: 100vh;

`
