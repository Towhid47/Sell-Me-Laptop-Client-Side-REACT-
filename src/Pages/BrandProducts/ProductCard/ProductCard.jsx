import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({productCard}) => {

    const {product_name, picture, brand, location, resale_price, original_price, years_of_use, seller_name, seller_email, _id} = productCard;

  return (
    <div className="container mt-5">
      <Card className="w-100 h-100 bg-dark text-light">
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title className="fs-2">{product_name}</Card.Title>
          <Card.Text>
                <div>
                        <p className="fs-4 ">Brand : {brand}</p>
                        <p className="fs-4 bg-success text-light">Resale price : {resale_price}$</p>
                        <p className="fs-4">Original price : {original_price}$</p>
                        <p className="fs-5">{years_of_use}</p>
                        <p className="fs-5 fw-semibold">Seller Name : {seller_name}</p>
                        <p className="fs-5 fw-semibold">Seller Email : {seller_email}</p>
                        <p className="fs-5">Location : {location}</p>
                </div>
          </Card.Text>
          <Button variant="primary" className="w-100 fs-4">Order Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
