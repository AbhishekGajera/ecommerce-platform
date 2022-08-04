import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRight, Globe } from 'react-feather';

import boxFirstImg from '../../assets/images/boxfirstimg.jpg'
import boxsecondImg from '../../assets/images/boxsecondimg.webp'
import boxImgThird from '../../assets/images/boximgthird.webp'
import boxfourthimg from '../../assets/images/boxfourthimg.jpg'


const ShopSelection = () => {
    return (
        <>
            <div className='collection-main-block'>
                <Container>
                    <div className='collection-inner-block'>
                        <div className='collection-main-title'>
                            <h2> Shop our selections <ArrowRight style={{ marginLeft: '5px' }} /></h2>
                            <p>Curated collections hand-picked by Etsy editors </p>
                        </div>
                        <Row>
                            <Col md={3} sm={4}>
                                <div className='collection-inner-main-block'>
                                    <div className='collection-inner-main-box'>

                                    <div className='shop-selection-image-block'>
                                           
                                           <div className='collection-image-block-first-row'>
                                               <img src={'https://i.etsystatic.com/23796538/c/1535/1220/131/32/il/ec0e5c/3454663102/il_340x270.3454663102_9kzc.jpg'} alt="boxFirstImg" />
                                           </div>
                                       </div>
                                        <div className='shop-selection-title-block'>
                                            <div className='collection-title-inner-block'>
                                                <p>Women's fashion </p>
                                                
                                            </div>
                                           
                                        </div>
                                       
                                        
                                    </div>
                                </div>
                            </Col>

                            <Col md={3} sm={4}>
                                <div className='collection-inner-main-block'>
                                    <div className='collection-inner-main-box'>

                                    <div className='shop-selection-image-block'>
                                           
                                           <div className='collection-image-block-first-row'>
                                               <img src={'https://i.etsystatic.com/23796538/c/1535/1220/131/32/il/ec0e5c/3454663102/il_340x270.3454663102_9kzc.jpg'} alt="boxFirstImg" />
                                           </div>
                                       </div>
                                        <div className='shop-selection-title-block'>
                                            <div className='collection-title-inner-block'>
                                                <p>Men’s fashion </p>
                                                
                                            </div>
                                           
                                        </div>
                                       
                                        
                                    </div>
                                </div>
                            </Col>

                            <Col md={3}sm={4} >
                                <div className='collection-inner-main-block'>
                                    <div className='collection-inner-main-box'>

                                    <div className='shop-selection-image-block'>
                                           
                                           <div className='collection-image-block-first-row'>
                                               <img src={'https://i.etsystatic.com/23796538/c/1535/1220/131/32/il/ec0e5c/3454663102/il_340x270.3454663102_9kzc.jpg'} alt="boxFirstImg" />
                                           </div>
                                       </div>
                                        <div className='shop-selection-title-block'>
                                            <div className='collection-title-inner-block'>
                                                <p>Home decor & wall art </p>
                                                
                                            </div>
                                           
                                        </div>
                                       
                                        
                                    </div>
                                </div>
                            </Col>

                            <Col md={3} sm={4}>
                                <div className='collection-inner-main-block'>
                                    <div className='collection-inner-main-box'>

                                    <div className='shop-selection-image-block'>
                                           
                                           <div className='collection-image-block-first-row'>
                                               <img src={'https://i.etsystatic.com/23796538/c/1535/1220/131/32/il/ec0e5c/3454663102/il_340x270.3454663102_9kzc.jpg'} alt="boxFirstImg" />
                                           </div>
                                       </div>
                                        <div className='shop-selection-title-block'>
                                            <div className='collection-title-inner-block'>
                                                <p>Kitchen and dining</p>
                                                
                                            </div>
                                           
                                        </div>
                                       
                                        
                                    </div>
                                </div>
                            </Col>

                          
                           
                        </Row>
                    </div>

                </Container>
            </div>
           
        </>
    )
}

export default ShopSelection