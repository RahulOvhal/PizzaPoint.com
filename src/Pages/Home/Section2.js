import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data 
const mockData = [
    {
        image : Pizza,
        title: "Original",
        paragraph: "Unforgettable pizza moments await, where every bite is a journey of culinary delight, every slice a shared experience, and every meal a celebration of life's simple pleasures."
    },
    {
        image : Salad,
        title: "Quality Foods",
        paragraph: "Indulge in a symphony of flavors, meticulously orchestrated on a canvas of hand-tossed dough, risen to golden perfection."
    },
    {
        image : Delivery,
        title: "Fast Delivery",
        paragraph: "With our fast delivery service, you can savor the tantalizing flavors of your favorite dishes without ever stepping foot outside your home."
    },
]

const Section2 = () => {
  return (
    <> 
      <section className='about_section' id='about'>
        <Container>
          <Row>
            
            <Col lg={{span:8, offset:2}} className='text-center'>
                <h2 className='about_heading'>"Experience pizza perfection, where every bite is an explosion of flavors."</h2>

                <p className='about_para'>
                At our pizza haven, we believe that pizza is a personal expression, a culinary canvas upon which your taste buds can paint their desires. Customize your pizza to your heart's content, choosing from an array of toppings, sauces, and crusts to create a masterpiece that reflects your unique palate.
                </p>

                <Link to="/" className='btn order_now btn_red'>
                    Explore Full Menu
                </Link>
            </Col>

          </Row>
        </Container>
      </section>

      <section className='about_wrapper'>
        <Container>
            <Row className='justify-content-md-center'>
                {mockData.map((cardData,index)=>( 
                    <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>

                        <div className='about_box text-center'>

                            <div className='about_icon'>
                                <img src={cardData.image} alt='about-icon'  className='img-fluid' />
                            </div>
                            <h4>{cardData.title}</h4>
                            <p>{cardData.paragraph}</p>

                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Section2

