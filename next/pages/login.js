import React, { Component, useState } from "react";
import Link from "next/link";
import NavbarThree from "../components/Layouts/NavbarThree";
import Otp from "../components/Otp/Otp";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Successfully LoggedIn",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const  Login = () => {

  const [validateEmail, setValidateEmail] = useState(false)

    return (
      <>
        <NavbarThree />
        <Otp validateEmail={validateEmail} alertContent={alertContent} setValidateEmail={setValidateEmail} />
        <section className="login-area">
          <div className="row m-0">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="login-image">
                <img src="/images/login-bg.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12 p-0">
              <div className="login-content">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="login-form">
                      <div className="logo">
                        <a href="/">
                          <img src="/images/logo.png" alt="image" />
                        </a>
                      </div>

                      <h3>Sign in</h3>
                      <p>
                        Access to your dashboard.
                        {/* <Link href="/signup"><a>Sign up</a></Link> */}
                      </p>

                      <form onSubmit={() =>  setValidateEmail(true)}>
                        <div className="form-group">
                          <input
                            type="email"
                            placeholder="Your email address"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            placeholder="Your password"
                            className="form-control"
                          />
                          <div className="forgot-password">
                            <Link href="#">
                              <a>Forgot Password?</a>
                            </Link>
                          </div>
                        </div>

                        <button type="submit" className="default-btn">
                          <i className="bx bxs-hot"></i>
                          Login
                          <span></span>
                        </button>
                        <p>
                          Don't have an account yet?
                          <Link href="/signup">
                            <a> Sign up</a>
                          </Link>
                        </p>

                        {/* Connect with social links */}
                        {/* <div className="connect-with-social">
                                                <a href="https://www.facebook.com/" className="facebook" target="_blank">
                                                    <i className='bx bxl-facebook'></i> 
                                                    Connect with Facebook
                                                </a>
                                                
                                                <a href="https://mail.google.com/" className="google" target="_blank">
                                                    <i className='bx bxl-google'></i> 
                                                    Connect with Google
                                                </a>
                                            </div> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Login;
