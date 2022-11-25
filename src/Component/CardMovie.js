import React from 'react';

import Col from 'react-bootstrap/Col';
const CardMovie = ({data}) => {
    const {category , title, price , image  ,  description} = data
    return (
        <Col>
          <div className='card-main '>
            <img className='movie-img' src={image} alt="product img" />
            <div className="card-main-body">
              <div>
               
                <p className='d-inline bg-warning price-name'> <b>Price</b> : $ {price}</p>
                 <h6 className='mt-4'> <b>Name :</b> {category}</h6>
                <p><b>Title :</b> {title}</p>
                <p> <b>Description :</b> {description.slice(0, 120)}</p>
                <button className='btn btn-warning text-white btn-block w-75 order-btn'>Order Now</button>
              </div>
            </div>
          </div>
        </Col>
    );
};

export default CardMovie;