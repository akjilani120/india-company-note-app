import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
const CardMovie = ({data}) => {
    const {strMealThumb , strInstructions, strMeal    } = data
    return (
        <Col>
          <Card className='card-main'>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
              <Card.Title>Food name:  {strMeal}</Card.Title>
              <Card.Text>
              Food Details : {strInstructions.slice(0, 100)}
              </Card.Text>
             <div>
             <button className='d-block w-100 order-btn'> Order Now</button>
             </div>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default CardMovie;