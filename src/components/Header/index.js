import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Heart, Search, ShoppingBag, Gift,AlignLeft } from "react-feather";
import headerLogo from '../../assets/images/header-logo.png'

const Header = () => {
  return (
    <div className="header-main-block">
      <Container className="header-lg">
        <div className="header-inner-block">
          <div className="row">
            <div className="col-md-2 col-sm-2 app-logo">
              <img src={headerLogo} alt='headerLogo' />
            </div>
            <div className="col-md-7 col-sm-7 search-bar search-mobile">
              <InputGroup className="col-md-12 searchbox">
                <FormControl
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <Button className="btn-search">
                  <Search style={{ color: "black" }} />
                </Button>
              </InputGroup>
            </div>
            <div className="col-md-3 col-sm-3 header-icon-block">
              <Nav.Link href="login" className="nav-sign-in">
                Sign In
              </Nav.Link>
              <Heart
                size={18}
                style={{ color: "#FFFFFF", marginLeft: "35px" }}
              />
              <ShoppingBag
                size={18}
                style={{ color: "#FFFFFF", marginLeft: "35px" }}
              />
            </div>
          </div>
        </div>
        <div className="subcategory-header">
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
          <Navbar bg="#FFFFFF" variant="light">

            <div className="header-mobile-block">
            <div className="col-md-2 col-sm-2 app-logo">
              <img src={headerLogo} alt='headerLogo' />
            </div>

              <div className="col-9 header-icon-block">
                <Nav.Link href="login" className="nav-sign-in">
                  Sign In
                </Nav.Link>
                <Heart
                  size={18}
                  style={{ color: "#FFFFFF", marginLeft: "35px" }}
                />
                <ShoppingBag
                  size={18}
                  style={{ color: "#FFFFFF", marginLeft: "35px" }}
                />
              </div>

            </div>

          </Navbar>
        </div>
        <div className="header-mobile">
          <Navbar.Brand href="#home" className="app-small-categories-icon">
            <AlignLeft
              size={18}
              style={{ color: "#FFFFFF" }}
            />
          </Navbar.Brand>

          <Nav className="col-10 search-bar search-mobile">
            <InputGroup className=" searchbox">
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
