import React from 'react';
import { Card } from 'react-bootstrap';

const BrandCard = ({brand}) => {

   const {brand_name, image} = brand;

    return (
        <div>
             <div>
        <Card className='border-0 shadow p-3 mb-5 bg-body rounded-4' style={{ width: "18rem" }}>
          <Card.Img  src={image} />
          <Card.Body>
            <Card.Title>{brand_name}</Card.Title>
          </Card.Body>
        </Card>
      </div>
        </div>
    );
};

export default BrandCard;