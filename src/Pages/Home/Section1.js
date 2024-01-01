import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Pizza from "../../assets/hero/hero-front.png"
import { Link } from 'react-router-dom'

const Section1 = () => {
  return (
    <section className='hero_section'>
      <Container>
         <Row>
            <Col lg={7} className=' mb-5 mb-lg-0 '>
                <div className='position-relative hero_img'>
                    {/* Images */}
                    <img src={Pizza} className='img-fluid' alt='hero_image' />

                    {/* Price Badge  */}
                    <div className='price_badge'>
                        <div className='badge_text'>
                            <h4 className='h4_only'>Only</h4>
                            <h4 className='h4_price'>$6.99</h4>
                        </div>
                    </div>
                </div>
                
            </Col>   

            <Col lg={5}>
                <div className='hero_text text-center'>
                    <h1 className='text-white'>Delicious Pizza</h1>
                    <h2 className='text-white'>With New Variety</h2>
                    <p className='text-white pt-2 pb-4'>
                    Our pizza haven extends beyond the realm of pies, offering a delectable selection of appetizers, salads, and desserts to complement your pizza feast.
                    </p>
                    <Link to="/" className='btn order_now'>
                        Order Now
                    </Link>
                </div>
            </Col>

         </Row>
      </Container>
    </section>
  )
}

export default Section1
