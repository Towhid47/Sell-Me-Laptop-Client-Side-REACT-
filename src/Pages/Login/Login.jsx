import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { GoogleAuthProvider } from "firebase/auth";
import AnimationLogin from "../../assets/animations/login.json";
import google from '../../assets/images/google.png';
import { AuthContext } from "../../AuthContext/auth.context";
import Swal from "sweetalert2";

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const {signIn, googleSignUp} = useContext(AuthContext);

    const handleLogin = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;


        signIn(email,password)
        .then((result) =>{
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Sign In Successful",
                showConfirmButton: false,
                timer: 1500,
            });
            event.target.reset();
            navigate(from, {replace: true});
        })
        .catch((error)=> Swal.fire({
            position: "center",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 1500,
        }))
    }


    ////////// Google Sign In /////////////////
    const provideGoogle = new GoogleAuthProvider();

    const handleGoogleSignUp = () =>{
       googleSignUp(provideGoogle) 
       .then(result =>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Google Sign Up Successful',
            showConfirmButton: false,
            timer: 1500
          })
          navigate('/');
       })
       .catch(error => error.message);
    }


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
          <Form onSubmit={handleLogin} className="mt-4 form-style text-start">
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
              <Button onClick={handleGoogleSignUp} className="btn btn-light" title="SignIn with Google">
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
