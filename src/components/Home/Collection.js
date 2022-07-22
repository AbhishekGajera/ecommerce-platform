import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRight, Globe } from 'react-feather';

import boxFirstImg from '../../assets/images/boxfirstimg.jpg'
import boxsecondImg from '../../assets/images/boxsecondimg.webp'
import boxImgThird from '../../assets/images/boximgthird.webp'
import boxfourthimg from '../../assets/images/boxfourthimg.jpg'


const Collection = () => {
    return (
        <>
            <div className='collection-main-block'>
                <Container>
                    <div className='collection-inner-block'>
                        <div className='collection-main-title'>
                            <h2> Browse collections for more inspiration</h2>
                            <p> Based on your recent activity</p>
                        </div>
                        <Row>
                            <Col md={3}>
                                <div className='collection-inner-main-block'>
                                    <div className='collection-inner-main-box'>
                                        <div className='collection-title-block'>
                                            <div className='collection-title-inner-block'>
                                                <p>Wreaths </p>
                                                <ArrowRight style={{ marginLeft: '5px' }} />
                                            </div>
                                            <div className='collection-title-right-block'>
                                                <Globe size={15} />
                                                <p>8 items </p>
                                            </div>
                                        </div>
                                        <div className='collection-image-block'>
                                            <div className='collection-image-block-first-Rightrow'>
                                                <img src={boxFirstImg} alt="boxFirstImg" />
                                            </div>
                                            <div className='collection-image-block-first-row'>
                                                <img src={boxsecondImg} alt="boxFirstImg" />
                                            </div>
                                        </div>
                                        <div className='collection-image-block'>
                                            <div className='collection-image-block-first-Rightrow'>
                                                <img src={boxImgThird} alt="boxFirstImg" />
                                            </div>
                                            <div className='collection-image-block-first-row'>
                                                <img src={boxfourthimg} alt="boxFirstImg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='collection-inner-main-block'>
                                    <div className='collection-inner-main-box'>
                                        <div className='collection-title-block'>
                                            <div className='collection-title-inner-block'>
                                                <p>Wreaths </p>
                                                <ArrowRight style={{ marginLeft: '5px' }} />
                                            </div>
                                            <div className='collection-title-right-block'>
                                                <Globe size={15} />
                                                <p>8 items </p>
                                            </div>
                                        </div>
                                        <div className='collection-image-block'>
                                            <div className='collection-image-block-first-Rightrow'>
                                                <img src={boxFirstImg} alt="boxFirstImg" />
                                            </div>
                                            <div className='collection-image-block-first-row'>
                                                <img src={boxsecondImg} alt="boxFirstImg" />
                                            </div>
                                        </div>
                                        <div className='collection-image-block'>
                                            <div className='collection-image-block-first-Rightrow'>
                                                <img src={boxImgThird} alt="boxFirstImg" />
                                            </div>
                                            <div className='collection-image-block-first-row'>
                                                <img src={boxfourthimg} alt="boxFirstImg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='collection-inner-main-block'>
                                    <div className='collection-inner-main-box'>
                                        <div className='collection-title-block'>
                                            <div className='collection-title-inner-block'>
                                                <p>Wreaths </p>
                                                <ArrowRight style={{ marginLeft: '5px' }} />
                                            </div>
                                            <div className='collection-title-right-block'>
                                                <Globe size={15} />
                                                <p>8 items </p>
                                            </div>
                                        </div>
                                        <div className='collection-image-block'>
                                            <div className='collection-image-block-first-Rightrow'>
                                                <img src={boxFirstImg} alt="boxFirstImg" />
                                            </div>
                                            <div className='collection-image-block-first-row'>
                                                <img src={boxsecondImg} alt="boxFirstImg" />
                                            </div>
                                        </div>
                                        <div className='collection-image-block'>
                                            <div className='collection-image-block-first-Rightrow'>
                                                <img src={boxImgThird} alt="boxFirstImg" />
                                            </div>
                                            <div className='collection-image-block-first-row'>
                                                <img src={boxfourthimg} alt="boxFirstImg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='collection-inner-main-block'>
                                    <div className='collection-inner-main-box'>
                                        <div className='collection-title-block'>
                                            <div className='collection-title-inner-block'>
                                                <p>Wreaths </p>
                                                <ArrowRight style={{ marginLeft: '5px' }} />
                                            </div>
                                            <div className='collection-title-right-block'>
                                                <Globe size={15} />
                                                <p>8 items </p>
                                            </div>
                                        </div>
                                        <div className='collection-image-block'>
                                            <div className='collection-image-block-first-Rightrow'>
                                                <img src={boxFirstImg} alt="boxFirstImg" />
                                            </div>
                                            <div className='collection-image-block-first-row'>
                                                <img src={boxsecondImg} alt="boxFirstImg" />
                                            </div>
                                        </div>
                                        <div className='collection-image-block'>
                                            <div className='collection-image-block-first-Rightrow'>
                                                <img src={boxImgThird} alt="boxFirstImg" />
                                            </div>
                                            <div className='collection-image-block-first-row'>
                                                <img src={boxfourthimg} alt="boxFirstImg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </div>
            <div className='for-your-home-main-'>
                <Container>
                    <div className='for-your-home-main-block'>
                        <Row>
                            <Col md={3}>
                                <div className='for-your-home-inner-title-block'>
                                    <p>Editors’ Picks</p>
                                    <h1>For your home</h1>
                                    <h6 className='unique-finds'>Shop these unique finds <ArrowRight style={{ marginLeft: '5px' }} /></h6>
                                </div>
                            </Col>
                            <Col md={2}>
                                <img src={boxImgThird} alt="boxFirstImg" style={{width:'100%'}}/>
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
    )
}

export default Collection