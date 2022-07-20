import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Heart,ShoppingBag } from 'react-feather';


const Header = () => {
  return (
    <div className='header-main-block'>
      <Container>
        <div className='header-inner-block'>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <InputGroup className="col-12">
                  <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Search
                  </Button>
                </InputGroup>

              </Nav>
              <Button variant="outline-secondary" id="button-addon2">Sign In</Button>
              <Heart size={18} style={{color:'#fff',marginLeft:'7px'}}/>
              <ShoppingBag size={18} style={{color:'#fff',marginLeft:'7px'}} />
            </Container>
          </Navbar>
        </div>
      </Container>
    </div>
  )
}

export default Header