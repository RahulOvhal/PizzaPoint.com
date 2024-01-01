import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import User1 from "../../assets/blog/review-author-1.jpg"
import User2 from "../../assets/blog/review-author-2.jpg"
import User3 from "../../assets/blog/review-author-3.jpg"
import User4 from "../../assets/blog/review-author-5.jpg"

const Section6 = () => {
  return (
    <>
        <section className='blog_section'>
            <Container>
                <Row>
                <Carousel>
                        <Carousel.Item>
                            
                            <Carousel.Caption>
                                <div className='user_img'> 
                                    <img src={User1} alt='User-1' className='img-fluid'/>
                                </div>
                                <p>
                                "Perspiciatis neque nostrum consectetur vel, incidunt quidem aperiam consequatur? Dolores molestiae nostrum id quisquam qui consequatur nisi dignissimos enim fugit."
                                </p>
                                <div className='item_rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <h5>
                                    BY JOHN WOKER
                                </h5>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            
                            <Carousel.Caption>
                                <div className='user_img'> 
                                    <img src={User2} alt='User-2' className='img-fluid'/>
                                </div>
                                <p>
                                "Perspiciatis neque nostrum consectetur vel, incidunt quidem aperiam consequatur? Dolores molestiae nostrum id quisquam qui consequatur nisi dignissimos enim fugit."
                                </p>
                                <div className='item_rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <h5>
                                    BY ALEXA LIGHT
                                </h5>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            
                            <Carousel.Caption>
                                <div className='user_img'> 
                                    <img src={User3} alt='User-3' className='img-fluid'/>
                                </div>
                                <p>
                                "Perspiciatis neque nostrum consectetur vel, incidunt quidem aperiam consequatur? Dolores molestiae nostrum id quisquam qui consequatur nisi dignissimos enim fugit."
                                </p>
                                <div className='item_rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <h5>
                                    BY ROMAN REIGNS
                                </h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            
                            <Carousel.Caption>
                                <div className='user_img'> 
                                    <img src={User4} alt='User-4' className='img-fluid'/>
                                </div>
                                <p>
                                "Perspiciatis neque nostrum consectetur vel, incidunt quidem aperiam consequatur? Dolores molestiae nostrum id quisquam qui consequatur nisi dignissimos enim fugit."
                                </p>
                                <div className='item_rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <h5>
                                    BY MARIEA
                                </h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Section6
