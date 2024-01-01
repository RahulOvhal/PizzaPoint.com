import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PromotionImage from "../../assets/promotion/pro.png";

const Section4 = () => {
  return (
    <>
      <section className='promotion_section'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} className='text-center mb-5 mb-lg-0'>
                    <img src={PromotionImage} alt='Promotion-img' className='img-fluid'></img>
                </Col>

                <Col lg={6} className='px-5'>
                    <h2>
                        Nothing brings people together like a good Pizza
                    </h2>
                    <p>
                    We believe that pizza is a personal expression, a culinary canvas upon which your taste buds can paint their desires.
                    </p>
                    <ul>
                        <li>
                            <p>
                            Discover the timeless allure of our Margherita pizza, a harmonious blend of fresh tomatoes, mozzarella cheese, and fragrant basil. 
                            </p>
                        </li>
                        <li>
                            <p>
                            Our vibrant marinara sauce, simmered to a symphony of flavors, forms the foundation for a culinary masterpiece.
                            </p>
                        </li>
                        <li>
                            <p>
                            Indulge in a symphony of flavors, meticulously orchestrated on a canvas of hand-tossed dough, risen to golden perfection.
                            </p>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
      </section>

      {/* BG Parallex Scroll  */}
      <section className='bg_parallax_scroll'>
        
      </section>
    </>
  )
}

export default Section4
