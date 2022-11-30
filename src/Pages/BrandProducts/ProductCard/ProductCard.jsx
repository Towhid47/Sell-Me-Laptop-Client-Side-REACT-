import React, { useContext, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthContext/auth.context";

const ProductCard = ({ productCard }) => {
  const {
    product_name,
    picture,
    brand,
    location,
    resale_price,
    original_price,
    years_of_use,
    seller_name,
    seller_email,
    _id,
  } = productCard;

  const { user } = useContext(AuthContext);

  const buyer_email = user.email;
  const buyer_name = user.displayName;

  ///////////////////////////////////////////////
  ///    Get the Current Date of Order
  //////////////////////////////////////////////
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;

  const order_date = today;

  /////////////////////////////////////////////
  ////     Handle Showing Modal
  ///////////////////////////////////////////
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  ///////////////////////////////////////////

  /////////////////////////////////////////////
  /////  Handle Order Form of a Modal
  ////////////////////////////////////////////
  const handlePlaceOrder = (event) => {
    event.preventDefault();

    const buyer_phone = event.target.phone.value;
    const buyer_location = event.target.location.value;

    const order = {
      buyer_phone,
      buyer_name,
      order_date,
      buyer_location,
      buyer_email,
      product_name,
      picture,
      brand,
      resale_price,
      seller_name,
      seller_email,
    };

    /////////// Sending The Order Data to the Server to store it in MongoDB Orders Collection /////////////////////////////////
    fetch("https://sell-me-laptop-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Placed order Successfully, Thank you so much",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="container mt-5">
      <Card className="w-100 h-100 bg-dark text-light">
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title className="fs-2">{product_name}</Card.Title>
          <Card.Text>
            <div>
              <p className="fs-4 ">Brand : {brand}</p>
              <p className="fs-4 bg-success text-light">
                Resale price : {resale_price}$
              </p>
              <p className="fs-4">Original price : {original_price}$</p>
              <p className="fs-5">{years_of_use}</p>
              <p className="fs-5 fw-semibold">Seller Name : {seller_name}</p>
              <p className="fs-5 fw-semibold">Seller Email : {seller_email}</p>
              <p className="fs-5">Location : {location}</p>
            </div>
          </Card.Text>
          <Button variant="primary" className="w-100 fs-4" onClick={handleShow}>
            Order Now
          </Button>
        </Card.Body>
      </Card>

      {/* importing Modal Here.... Modal will appear when clicking Order Now button */}
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Order Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <img src={picture} className="w-100" alt={product_name}></img>
            </div>
            <hr />
            <hr />
            <div className="d-flex justify-content-between mt-5">
              <div className="w-50">
                <p className="fs-4 fw-semibold">Product Name :</p>
                <p className="fs-5">{product_name}</p>
              </div>
              <div>
                <p className="fs-4 fw-semibold">Price : </p>{" "}
                <p className="fs-5">{resale_price}$</p>
              </div>
            </div>
            <div className="bg-dark text-light p-4">
              <h3 className="text-center">User Information:</h3>
              <div className="mt-4">
                <p className="fs-5">User Name: {user.displayName}</p>
                <p className="fs-5">User Email: {user.email}</p>

                <div className="mt-5">
                  <Form onSubmit={handlePlaceOrder}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="fs-5">Phone Number</Form.Label>
                      <Form.Control
                        name="phone"
                        className="bg-dark text-light"
                        type="text"
                        placeholder="Enter Phone Number"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="fs-5">Shipping Address</Form.Label>
                      <Form.Control
                        name="location"
                        className="bg-dark text-light"
                        type="text"
                        placeholder="Enter Shipping Address"
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      className="w-100 btn btn-primary fs-5"
                    >
                      Place Order
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default ProductCard;
