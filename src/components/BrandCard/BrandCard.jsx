import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BrandCard = ({brand}) => {

   const {brand_name, image, _id } = brand;

    return (
        <div>
        <Link to={`brand/${_id}`} className="text-decoration-none text-black">
        <Card className='border-0 shadow p-3 mb-5 bg-body rounded-4' style={{ width: "18rem" }}>
          <Card.Img  src={image} />
          <Card.Body>
            <Card.Title className='fs-3'>{brand_name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
        </div>
    );
};

export default BrandCard;