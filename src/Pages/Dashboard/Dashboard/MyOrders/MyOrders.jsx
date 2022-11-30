import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { AuthContext } from "../../../../AuthContext/auth.context";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);

  const url = `https://sell-me-laptop-server.vercel.app/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  //////////// Handle Purchase /////////////////
  const [isPaid, setIsPaid] = useState(false);

  const handlePurchase = (isPaid) => {
    setIsPaid(!isPaid);
  };

  return (
    <>
      <div className="mt-5">
        <h1 className="text-primary">My Orders</h1>
      </div>
      <div className="mt-4 container">
        <Table striped bordered hover>
          <thead className="bg-secondary text-light">
            <tr>
              <th>Order No.</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Order Date</th>
              <th>Shipping Address</th>
              <th>Purchase</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td className="w-50">
                  <img
                    src={order.picture}
                    alt={order.product_name}
                    className="w-25"
                  ></img>
                </td>
                <td>{order.product_name}</td>
                <td>{order.resale_price}$</td>
                <td>{order.order_date}</td>
                <td>{order.buyer_location}</td>
                <td>
                  <div onClick={() => handlePurchase(isPaid)} role="button">
                    {isPaid ? (
                      <Button className="btn-success">Paid</Button>
                    ) : (
                      <Button className="btn-primary">Pay</Button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default MyOrders;
