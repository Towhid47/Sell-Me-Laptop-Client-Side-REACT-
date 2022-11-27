import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import google from '../../assets/images/google.png';
import Lottie from "lottie-react";
import registerAnimation from '../../assets/animations/register.json';
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../AuthContext/auth.context";
import Swal from "sweetalert2";

const Register = () => {

    const navigate = useNavigate();

    const {signUp} = useContext(AuthContext);



    const handleSubmit = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const photoURL = event.target.photoURL.value;
        const accountType = event.target.select.value;



        // Create A New Account
        signUp(email,password)
        .then(result =>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'SignUp Successful',
                showConfirmButton: false,
                timer: 1500
              })
              event.target.reset();
              navigate('/login')
        })
        .catch(error => Swal.fire({
            position: 'center',
            icon: 'error',
            title: "This User Email Already Exist",
            showConfirmButton: false,
            timer: 1500
          }))
        
    }



  return (
    <div>
      <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center container">
        <div className="w-100 me-5 w-lg-50">
          <Lottie animationData={registerAnimation}></Lottie>
        </div>

        {/* //////////////////////////Registration Form/////////////////// */}
        <div className="w-100 w-lg-50">
          <div>
            <h1 className="text-center mb-5 fw-bold">Create A New Account</h1>
          </div>
          <Form onSubmit={handleSubmit} className="text-start form-style">
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="fw-semibold fs-3">
                Enter Your Name
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Full Name"
                className="border border-dark border-2"
                required
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-semibold fs-3">
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                className="border border-dark border-2"
                required
              />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicProfilePic">
              <Form.Label className="fw-semibold fs-3">
                Profile Picture URL (optional)
              </Form.Label>
              <Form.Control
                type="text"
                name="photoURL"
                placeholder="Profile Picture Link"
                className="border border-dark border-2"
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

            <Form.Group className="mb-3">
               <Form.Label className="fw-semibold fs-3">Select Account Type</Form.Label>
               <Form.Select name="select" aria-label="Default select example">
                    <option value="buyer">default</option>
                    <option value="seller">seller</option>
               </Form.Select> 
            </Form.Group>

            <input
              type="submit"
              className="btn w-100 btn-primary"
              value="Sign Up"
            ></input>
            
            <p className="my-2 fw-semibold">
              Already Have an Account ?{" "}
              <span>
                <Link to="../login" className="text-decoration-none fw-bold">
                  {" "}
                  LOG IN{" "}
                </Link>
              </span>
            </p>

            <div className="my-4 text-center">
              <p className="fw-semibold">----Signup with social Accounts----</p>
              <Button
               
                className="btn btn-light"
                title="Signup with Google"
              >
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

export default Register;
