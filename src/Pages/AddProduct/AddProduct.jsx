import React from "react";
import { Button, Form } from "react-bootstrap";

const AddProduct = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="container shadow-lg p-3 mb-5 bg-body rounded">
          <h1 className="text-primary">Add Product</h1>
          <Form className="text-start">
            <Form.Group className="mb-3">
              <Form.Label className="text-color fs-4 fw-semibold">
                Product Name
              </Form.Label>
              <Form.Control name="name" type="text" placeholder="Product Name" />
            </Form.Group>

            <Form.Group className="mb-3">
               <Form.Label className="fw-semibold fs-3">Brand</Form.Label>
               <Form.Select name="brand" aria-label="Default select example">
                    <option value="asus">Asus</option>
                    <option value="dell">Dell</option>
                    <option value="hp">HP</option>
               </Form.Select> 
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-color fs-4 fw-semibold">
               Product Image
              </Form.Label>
              <Form.Control
                name="image"
                type="text"
                placeholder="Enter image url to show the picture of the product"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-color fs-4 fw-semibold">
                Price
              </Form.Label>
              <Form.Control
                name="price"
                type="text"
                placeholder="Enter the product price"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-color fs-4 fw-semibold">
                Mobile Number
              </Form.Label>
              <Form.Control
                name="Mobile"
                type="text"
                placeholder="Enter your Contact Number"
              />
              </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-color fs-4 fw-semibold">
                Email Address
              </Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter your Email as a Seller"
              />
              </Form.Group>
              

            <Form.Group className="mb-3">
              <Form.Label className="text-color fs-4 fw-semibold">
                Description
              </Form.Label>
              <Form.Control
                name="description"
                type="text"
                className="p-5"
                placeholder="Enter Description of this Product"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-color fs-4 fw-semibold">
                Enter Current Location
              </Form.Label>
              <Form.Control
                name="location"
                type="text"
                placeholder="Enter current location"
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label className="text-color fs-4 fw-semibold">
                Enter When you purchased this product
              </Form.Label>
              <Form.Control
                name="year_of_purchase"
                type="text"
                placeholder="Year of Purchase"
              />
            </Form.Group>

            <Form.Group className="mb-3">
               <Form.Label className="fw-semibold fs-3">Product Condition Type</Form.Label>
               <Form.Select name="select" aria-label="Default select example">
                    <option value="fair">Fair</option>
                    <option value="good">Good</option>
                    <option value="excellent">Excellent</option>
               </Form.Select> 
            </Form.Group>


            <div className="text-center">
              <Button className="w-50 p-3 fs-4" type="submit">
                Add Product
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
