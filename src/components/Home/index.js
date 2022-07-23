import React from 'react'
import { Container } from 'react-bootstrap';
import SubHeader from '../SubHeader';
import Collection from './Collection';

const Home = () => {
  return (
    <div>
      <SubHeader/>
      <Container>
          <Collection />
      </Container>
  
    </div>
  )
}

export default Home;