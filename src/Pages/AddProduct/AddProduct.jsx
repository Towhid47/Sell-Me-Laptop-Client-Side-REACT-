import React from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = (event) =>{
        event.preventDefault();

        const product_name = event.target.product_name.value;
        const brand = event.target.brand.value;  
        const picture = event.target.image.value; 
        const resale_price = event.target.resale_price.value;
        const original_price = event.target.original_price.value;
        const seller_name = event.target.seller_name.value;
        const mobile_number = event.target.mobile.value;
        const seller_email = event.target.email.value;
        const description = event.target.description.value;
        const location = event.target.location.value;
        const year_of_purchased = event.target.year_of_purchase.value;
        const condition = event.target.select.value;
        
        const product = {product_name, seller_name , original_price , brand, location,  year_of_purchased, condition , picture, resale_price,mobile_number, seller_email, description,  }
   
        fetch('http://localhost:4000/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data =>{
            event.target.reset();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Product Added Successfully',
                showConfirmButton: false,
                timer: 1500
              })
              
        })
    }





  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="container shadow-lg p-3 mb-5 bg-body rounded">
          <h1 className="text-primary">Add Product</h1>
          <Form onSubmit={handleAddProduct} className="text-start">
            <Form.Group className="mb-3">
              <Form.Label className="text-color fs-4 fw-semibold">
                Product Name
              </Form.Label>
              <Form.Control name="product_name" type="text" placeholder="Product Name" />
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
               Resale Price
              </Form.Label>
              <Form.Control
                name="resale_price"
                type="text"
                placeholder="Enter product resale price"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-color fs-4 fw-semibold">
               Original Price
              </Form.Label>
              <Form.Control
                name="original_price"
                type="text"
                placeholder="Enter product's Original price"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-color fs-4 fw-semibold">
                Your Name
              </Form.Label>
              <Form.Control
                name="seller_name"
                type="text"
                placeholder="Enter Your Name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-color fs-4 fw-semibold">
                Mobile Number
              </Form.Label>
              <Form.Control
                name="mobile"
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
            <div className="text-center my-3">
              <Button className="w-50 p-3 btn-light fs-4" type="reset">
                Reset Product Info
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
