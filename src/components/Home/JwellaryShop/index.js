import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, Globe } from "react-feather";

import boxFirstImg from "../../../assets/images/boxfirstimg.jpg";
import boxsecondImg from "../../../assets/images/boxsecondimg.webp";
import boxImgThird from "../../../assets/images/boximgthird.webp";
import boxfourthimg from "../../../assets/images/boxfourthimg.jpg";

const JwellaryShop = () => {
  return (
    <>
      <div className="collection-main-block">
        <Container>
          <div className="collection-inner-block">
            <Row className="jwellary-rows">
              <Col md={4} sm={12}>
                <div className="collection-inner-main-block">
                  <div className="Jewellery-shop-inner-main-box">
                    <div className="jwellery-image-block">
                      <div className="collection-image-block">
                      
                        <div className="collection-main-title">
                          <h2>
                            {" "}
                            Jewellery shop{" "}
                            <ArrowRight style={{ marginLeft: "5px" }} />
                          </h2>
                          <p>
                            see More{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="collection-image-block">
                      <div className="Jewellery-shop-image-block-first-Rightrow">
                        <img src={boxImgThird} alt="boxFirstImg" />
                        <div>
                            <div>

                            </div>
                        </div>
                      </div>
                      <div className="Jewellery-shop-image-block-first-Rightrow">
                        <img src={boxfourthimg} alt="boxFirstImg" />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <div className="collection-inner-main-block">
                  <div className="Jewellery-shop-inner-main-box">
                    <div className="collection-image-block">
                      <div className="Jewellery-shop-image-block-first-Rightrow">
                        <img src={boxFirstImg} alt="boxFirstImg" />
                      </div>
                      <div className="Jewellery-shop-image-block-first-Rightrow">
                        <img src={boxsecondImg} alt="boxFirstImg" />
                      </div>
                    </div>
                    <div className="collection-image-block">
                      <div className="Jewellery-shop-image-block-first-Rightrow">
                        <img src={boxImgThird} alt="boxFirstImg" />
                      </div>
                      <div className="Jewellery-shop-image-block-first-Rightrow">
                        <img src={boxfourthimg} alt="boxFirstImg" />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4} sm={12} className="p-0">
                <div className="collection-inner-main-block">
                  <div className="Jewellery-shop-inner-main-box">
                   <img src="https://i.etsystatic.com/25912338/r/il/2a2c95/3015906028/il_570xN.3015906028_qz99.jpg"/>
                   
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="for-your-home-main-">
        <Container>
          <div className="for-your-home-main-block">
            <Row>
              <Col md={3}>
                <div className="for-your-home-inner-title-block">
                  <p>Editors’ Picks</p>
                  <h1>For your home</h1>
                  <h6 className="unique-finds">
                    Shop these unique finds{" "}
                    <ArrowRight style={{ marginLeft: "5px" }} />
                  </h6>
                </div>
              </Col>
              <Col md={2}>
                <img
                  src={boxImgThird}
                  alt="boxFirstImg"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col md={2}>
                <img src={boxImgThird} alt="boxFirstImg" />
              </Col>
              <Col md={2}>
                <img src={boxImgThird} alt="boxFirstImg" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default JwellaryShop;
