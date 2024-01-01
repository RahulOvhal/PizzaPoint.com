import React,{ useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Footer = () => {

  // scroll State 
  const[ isVisible, setIsVisible] = useState(false);
  
  const scrollTop = ()=>{
    window.scrollTo({
      top:0,
      behavior: "smooth",
    })
  };

  const listenToScroll = ()=>{

    let hightToHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > hightToHidden ? setIsVisible(true) :setIsVisible(false);
  }

  useEffect(()=>{
    window.addEventListener("scroll",listenToScroll);
  },[])


  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col lg={3} sm={6} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Location</h5>
                <p>Aperiam voluptas iusto ipsa nihil</p>
                <p>laborum, sint voluptate.</p>
                <p>Russia</p>
              </div>
            </Col>

            <Col lg={3} sm={6} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Working Hourse</h5>
                <p>Mon - Fri : 9.00 a.m - 10.00 p.m</p>
                <p>Saturday : 10.00 a.m - 08.30 p.m</p>
                <p>Sunday : 12.00 p.m - 05.00 p.m</p>
              </div>
            </Col>

            <Col lg={3} sm={6} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Order Now</h5>
                <p>Tempora nesciunt eos natus</p>
                <p>
                  <Link to="tell:999887777" className='calling'>
                    999-888-7777
                  </Link>
                  </p>
              </div>
            </Col>

            <Col lg={3} sm={6} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Follow Us</h5>
                <p>Tempora nesciunt eos natus</p>
                <ul className='list-unstyled text-center mt-2'>
                  <li>
                    <Link to="/">
                      <i class='bi bi-facebook'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class='bi bi-twitter'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class='bi bi-instagram'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class='bi bi-youtube'></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row className='copy_right'>
            <Col>
              <div>
                <ul className='list-unstyled text-center  mb-0'>
                  <li>
                    <Link to="/">
                      @2023 <span>Rahul Ovhal</span>. All Rights Reserved
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Scroll to Top  */}
      {
        isVisible && (<div className='scroll_top' onClick={scrollTop}>
          <i className='bi bi-arrow-up'></i>
          </div>)
      }
    </>
    
  )
}

export default Footer
