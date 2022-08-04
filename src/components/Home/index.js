import React from 'react'
import { Container } from 'react-bootstrap';
import ShopSelection from '../shopSelection';
import SubHeader from '../SubHeader';
import Collection from './Collection';
import JwellaryShop from './JwellaryShop';
const Home = () => {
  return (
    <div>
      <SubHeader/>
      <Container>
          <Collection />
          <JwellaryShop/>
          <ShopSelection/>
      </Container>
  
    </div>
  )
}

export default Home;