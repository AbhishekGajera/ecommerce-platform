import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Heart, Search, ShoppingBag,Gift } from "react-feather";
import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-main-block">
      <Container className="header-lg">
        <div className="header-inner-block">
          <Navbar bg="#fff" variant="light">
            <Container>
              <Navbar.Brand href="#home" className="col-md-1 col-sm-2 app-logo">
                ESTY
              </Navbar.Brand>
            
              <Nav className="col-12 search-bar search-mobile">
                <InputGroup className="col-12 searchbox">
                  <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <Button className="btn-search">
                    <Search style={{ color: "black" }} />
                  </Button>
                </InputGroup>
              </Nav>
              <div className="col-md-4 col-sm-4 header-icon-block">
                <Nav.Link href="login" className="nav-sign-in">
                  Sign In
                </Nav.Link>
                <Heart
                  size={18}
                  style={{ color: "#000", marginLeft: "35px" }}
                />
                <ShoppingBag
                  size={18}
                  style={{ color: "#000", marginLeft: "35px" }}
                />
              </div>
            </Container>
          </Navbar>
        </div>
        <div>
          <ul className="cat-list">
            <li>jewellery &Accessories</li>
            <li>Clothing & Shoes</li>
            <li>Home & Living</li>
            <li>Wedding & Party</li>
            <li>Toys & Entertainment</li>
            <li>Art & Collectibles</li>
            <li>Craft Supplies</li>
            <li>Vintage</li>
            <li>
              {" "}
              <Gift className="gift-icon" />
              Gifts
            </li>
          </ul>
        </div>
      </Container>

      <Container className="header-sm">
        <div className="header-inner-block">
          <Navbar bg="#fff" variant="light">
           
              <div className="header-mobile-block">
                <Navbar.Brand href="#home" className="col-3 app-logo">
                  ESTY
                </Navbar.Brand>

                <div className="col-9 header-icon-block">
                  <Nav.Link href="login" className="nav-sign-in">
                    Sign In
                  </Nav.Link>
                  <Heart
                    size={18}
                    style={{ color: "#000", marginLeft: "35px" }}
                  />
                  <ShoppingBag
                    size={18}
                    style={{ color: "#000", marginLeft: "35px" }}
                  />
                </div>
               
              </div>
           
          </Navbar>
        </div>
        <div className="header-mobile">
        <Navbar.Brand href="#home" className="col-2 app-logo">
        <ShoppingBag
                  size={18}
                  style={{ color: "#000", marginLeft: "35px" }}
                />
              </Navbar.Brand>
            
              <Nav className="col-10 search-bar search-mobile">
                <InputGroup className="col-12 searchbox">
                  <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <Button className="btn-search">
                    <Search style={{ color: "black" }} />
                  </Button>
                </InputGroup>
              </Nav>
                </div>
      </Container>
    </div>
  );
};

export default Header;
