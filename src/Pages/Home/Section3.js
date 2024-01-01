import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image1 from "../../assets/menu/img-1.png"
import Image2 from "../../assets/menu/img-2.png"
import Image3 from "../../assets/menu/img-3.png"
import Image4 from "../../assets/menu/img-4.png"
import Image5 from "../../assets/menu/img-5.png"
import Image6 from "../../assets/menu/img-6.png"
import Image7 from "../../assets/menu/img-7.png"
import Image8 from "../../assets/menu/img-8.png"
import Cards from "../../Components/Layouts/Cards";


// Mock Data 
const mockData = [
    {
        id: "0001",
        image : Image1,
        title: "Original",
        paragraph: "Unforgettable pizza moments await.",
        rating: 4.5,
        price: 99.15

    },
    {
        id: "0002",
        image : Image2,
        title: "Original",
        paragraph: "Unforgettable pizza moments await.",
        rating: 4,
        price: 99.15

    },
    {
        id: "0003",
        image : Image3,
        title: "Original",
        paragraph: "Unforgettable pizza moments await.",
        rating: 5,
        price: 99.15

    },
    {
        id: "0004",
        image : Image4,
        title: "Original",
        paragraph: "Unforgettable pizza moments await.",
        rating: 4.5,
        price: 99.15

    },
    {
        id: "0005",
        image : Image5,
        title: "Original",
        paragraph: "Unforgettable pizza moments await.",
        rating: 4,
        price: 99.15

    },
    {
        id: "0006",
        image : Image6,
        title: "Original",
        paragraph: "Unforgettable pizza moments await.",
        rating: 3,
        price: 99.15

    },
    {
        id: "0007",
        image : Image7,
        title: "Original",
        paragraph: "Unforgettable pizza moments await.",
        rating: 3.5,
        price: 99.15

    },
    {
        id: "0008",
        image : Image8,
        title: "Original",
        paragraph: "Unforgettable pizza moments await.",
        rating: 0,
        price: 99.15

    },
    
]


// ================ Rating Faunction    ==============

    const randerRatingIcons = (rating)=>{
        const stars = [];

        for(let i = 0; i<5 ; i++){
            if(rating > 0.5){
                stars.push(<i key={i} className='bi bi-star-fill' ></i>);
                rating--;
            }else if(rating >0 && rating < 1){
                stars.push(<i key={"half"} className='bi bi-star-half' ></i>);
                rating--;
            }else{
                stars.push(<i key={`empty${i}`} className='bi bi-star' ></i>);
            }
        }
      
        return stars;
    }


const Section3 = () => {
  return (
    <section className='menu_section'>
      <Container>
        <Row className=''>
            <Col lg={{span:8, offset:2}} className='text-center mb-5'>
                <h2>Our Crazy Pizzas</h2>
                <p className='para'>
                At our pizza haven, we believe that pizza is a personal expression, a culinary canvas upon which your taste buds can paint their desires. 
                </p>
            </Col>
        </Row>

        <Row>
        {mockData.map((cardData, index) => (
            <Cards 
                key={index}
                image={cardData.image}
                rating={cardData.rating}
                title={cardData.title}
                paragraph={cardData.paragraph}
                price={cardData.price}
                randerRatingIcons = {randerRatingIcons}
            />
            ))}
        </Row>

        <Row className='pt-5'>
            <Col sm={6} lg={5}>
                <div className='ads_box ads_img1 mb-5 mb-md-0'>
                    <h4 className='mb-0'>
                        GET YOUR FREE
                    </h4>
                    <h5>
                        CHEESE FRIES
                    </h5>
                    <Link to="/" className="btn btn_red px-4 rounded-0">
                        Learn More
                    </Link>
                </div>
            </Col>
            <Col sm={6} lg={7}>
                <div className='ads_box ads_img2'>
                    <h4 className='mb-0'>
                        GET YOUR FREE
                    </h4>
                    <h5>
                        CHEESE BURGER
                    </h5>
                    <Link to="/" className="btn btn_red px-4 rounded-0">
                        Learn More
                    </Link>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Section3
