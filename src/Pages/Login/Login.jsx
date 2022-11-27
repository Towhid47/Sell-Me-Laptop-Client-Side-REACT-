import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import AnimationLogin from "../../assets/animations/login.json";
import google from '../../assets/images/google.png';

const Login = () => {
  return (
    <div>
      <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center container">
        <div className="w-100 w-lg-50">
          <Lottie animationData={AnimationLogin}></Lottie>
        </div>

        {/* //////////////////////////Login Form/////////////////// */}
        <div className="w-100 w-lg-50">
          <div>
            <h1 className="text-center fw-bold">Login</h1>
          </div>
          <Form className="mt-4 form-style text-start">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-semibold fs-3">
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="border border-dark border-2"
                name="email"
                required
              />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-semibold fs-3">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password"
                className="border border-dark border-2"
                required
              />
            </Form.Group>

            <input
              type="submit"
              className="w-100 btn btn-primary"
              value="Sign In"
            ></input>

            <p className="my-2 fw-semibold">
              New to this website ?{" "}
              <span>
                <Link to="../register" className="text-decoration-none fw-bold">
                  {" "}
                  Create A new Account{" "}
                </Link>
              </span>
            </p>

            <hr />

            <div className="my-4 text-center">
              <p className="fw-semibold">----Signin with social Accounts----</p>
              <Button  className="btn btn-light" title="SignIn with Google">
                <img src={google} className="" alt="" />
              </Button>{" "}
              {"  "}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
