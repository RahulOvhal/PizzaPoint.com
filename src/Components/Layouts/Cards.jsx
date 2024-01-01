import React from 'react'
import {Col, Card} from "react-bootstrap"
import { Link } from 'react-router-dom'

function Cards({image,rating,title,paragraph,price, randerRatingIcons}){
  return (
    
      <Col sm={6} lg={4} xl={3} className="mb-4">
          <Card className='overflow-hidden'>
            <div className='overflow-hidden'>
             <Card.Img varient="top" src={image} />
            </div>

            <div className='d-flex justify-content-between align-items-center m-2'>
              <div className='item-rating'>
                {randerRatingIcons(rating)}
              </div>
              <div className='wishlist'>
              <i class="bi bi-heart-fill"></i>
              </div>
            </div>
             <Card.Body>
                 <Card.Title>{title}</Card.Title>
                 <Card.Text>
                     {paragraph}
                 </Card.Text>

                 <div className='d-flex justify-content-between align-items-center'>
                    <div className='menu_price'>
                      <h5 className='mb-0'>
                        ${price}
                      </h5>
                    </div>
                    <div className='add_to-cart'>
                        <Link to="/">
                        <i class="bi bi-bag-check-fill"></i>
                        Add to Cart
                        </Link>
                    </div>
                 </div>
             </Card.Body>
         </Card>
       </Col>
    
  )
}

export default Cards;


