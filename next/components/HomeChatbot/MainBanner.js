import React from 'react';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import Link from 'next/link';
import { useState } from 'react';
import Otp from '../Otp/Otp';
// import emailjs from "@emailjs/browser";

const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: 'Congratulations!',
    text: 'Your account has been created.Please, Login to the dashboard.',
    icon: 'success',
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const MainBanner = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();

  const [validateEmail, setValidateEmail] = useState(false);

  const save = async (data) => {
    const signUpData = {
      companyName: data.companyName,
      companyWebsite: data.companyWebsite,
      email: data.email.toLowerCase(),
      name: data.name,
      password: data.password,
    };
    try {
      const url = `${baseUrl}/auth/register`;
      const response = await axios.post(url, signUpData);
      reset();
      setValidateEmail({ email: data?.email });
      alertContent();
    } catch (error) {
      if (error?.response?.status === 400) {
        setError(
          'email',
          {
            message: error?.response?.data?.message,
          },
          {
            shouldFocus: true,
          }
        );
      }
    }
  };
  // const triggerValidateEmail = async () => {
  //   console.log('des');
  // };
  return (
    <div className='main-banner chatbot-main-banner'>
      {/* <Otp
        triggerValidateEmail={triggerValidateEmail}
        validateEmail={validateEmail}
        alertContent={alertContent}
        setValidateEmail={setValidateEmail}
      /> */}
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-7 col-md-12'>
            <div className='main-banner-content'>
              <div className='d-table'>
                <div className='d-table-cell'>
                  <div className='content '>
                    <h1>
                    The Definitive Self-Hosted <span>Javascript</span>
                    <span>SDK and Chat API</span>  Solution of All Time.
                    </h1>
                    <p>
                    Rapidly engage with users through our secure, scalable Chat API and JavaScript SDK, 
                    drawing you nearer to your audience.
                      
                    </p>
                    {/* <div className="section-title">
                  <h2>
                    The Ultimate Self-hosted{" "}
                    <span>Javascript SDK & Chat API</span>Solution ever
                  </h2>
                  <p style={{ textAlign: "left", marginTop: "40px" }}>
                    Get closer to your users by integrating Chat with our
                    pre-build UI powered by building highly secure & scalable
                    Chat API & Javascript SDK in a trice.
                  </p>
                </div> */}
                    <h5 style={{ textAlign: 'center' }}>
                      Sign Up{' '}
                      <span style={{ color: '#ff612f' }}>Here</span>
                    </h5>

                    <div className='col-lg-12 col-md-12'>
                      <div className='contact-form'>
                        <h3></h3>

                        <form onSubmit={handleSubmit(save)}>
                          <div className='row'>
                            <div className='col-lg-6 col-md-6'>
                              <div className='form-group'>
                                <input
                                  type='text'
                                  className='form-control'
                                  {...register('name', {
                                    required: 'Required Input',
                                  })}
                                  placeholder='Your Name'
                                />
                                {errors?.name && (
                                  <small className='text-danger mt-3 ms-3'>
                                    {errors?.name?.message}
                                  </small>
                                )}
                              </div>
                            </div>
                            <div className='col-lg-6 col-md-6'>
                              <div className='form-group'>
                                <input
                                  type='text'
                                  {...register('companyName', {
                                    required: 'Required Input',
                                  })}
                                  className='form-control'
                                  placeholder='Company Name'
                                />
                                {errors?.companyName && (
                                  <small className='text-danger mt-3 ms-3'>
                                    {errors?.companyName?.message}
                                  </small>
                                )}
                              </div>
                            </div>
                            <div className='col-lg-6 col-md-6'>
                              <div className='form-group'>
                                <input
                                  type='text'
                                  {...register('companyWebsite')}
                                  className='form-control'
                                  placeholder='Company Website'
                                />
                              </div>
                            </div>
                            <div className='col-lg-6 col-md-6'>
                              <div className='form-group'>
                                <input
                                  type='text'
                                  {...register('email', {
                                    required: 'Required Input',
                                    pattern: {
                                      value:
                                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                      message: 'Invalid Email',
                                    },
                                  })}
                                  className='form-control'
                                  placeholder='name@address.com'
                                />
                                {errors?.email && (
                                  <small className='text-danger mt-3 ms-3'>
                                    {errors?.email?.message}
                                  </small>
                                )}
                              </div>
                            </div>

                            <div className='col-lg-12 col-md-12'>
                              <div className='form-group'>
                                <input
                                  {...register('password', {
                                    required: 'Required Input',
                                    minLength: {
                                      value: 8,
                                      message:
                                        'Minimum length of 8 characters required',
                                    },
                                  })}
                                  className='form-control'
                                  type={'password'}
                                  placeholder='Enter your password'
                                />

                                {errors?.password && (
                                  <small className='text-danger mt-3 ms-3'>
                                    {errors?.password?.message}
                                  </small>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-12 col-sm-12 text-center'>
                            <button className='default-btn'>
                              <i className='bx bxs-hot'></i>
                              Start your free trial
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    {/* <a className="default-btn" href="/signup">
                                                <i className="bx bxs-hot"></i>
                                                Try PlugtoChat
                                                <span></span>
                                            </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-5 col-md-12'>
            <div className='banner-image bg-2'>
              <div className='chat-wrapper'>
                <div className='chat'>
                  <div className='chat-container'>
                    <div className='chat-listcontainer'>
                      <ul className='chat-message-list'>
                        <li className='message-right ms1'>
                          <div className='messageinner-ms1'>
                            <img src='/images/author/author6.jpg' alt='Image' />
                            <span className='message-text'>
                              👋 Hi! How can i help you?
                              <span className='message-time'>19:58</span>
                            </span>
                          </div>
                        </li>

                        <li className='message-left ms2'>
                          <div className='messageinner-ms2'>
                            <img src='/images/author/author7.jpg' alt='Image' />

                            <span className='message-text'>
                              I am looking for a product?
                              <span className='message-time'>19:58</span>
                            </span>
                          </div>
                        </li>

                        <li className='message-right ms3'>
                          <div className='messageinner-ms3'>
                            <img src='/images/author/author6.jpg' alt='Image' />
                            <span className='message-text'>
                              What product you are searching for?
                              <span className='message-time'>19:58</span>
                            </span>
                          </div>
                        </li>

                        <li className='message-left ms4'>
                          <div className='messageinner-ms4'>
                            <img src='/images/author/author7.jpg' alt='Image' />
                            <span className='message-text'>
                              ASUS ROG Strix G17 Laptop
                              <span className='message-time'>19:58</span>
                            </span>
                          </div>
                        </li>

                        <li className='message-right ms5'>
                          <div className='messageinner-ms5'>
                            <img src='/images/author/author6.jpg' alt='Image' />
                            <span className='message-text'>
                              It's available, you can get it for $1224
                              <span className='message-time'>19:58</span>
                            </span>
                          </div>
                        </li>

                        <li className='message-left ms6'>
                          <div className='messageinner-ms6'>
                            <img src='/images/author/author7.jpg' alt='Image' />
                            <span className='message-text'>
                              What else do you offer? Any Discounts?
                              <span className='message-time'>19:58</span>
                            </span>
                          </div>
                        </li>

                        <li className='message-right ms7'>
                          <div className='messageinner-ms7'>
                            <img src='/images/author/author6.jpg' alt='Image' />
                            <span className='message-text'>
                              Yes, 10% Instant discount up to $122 on American
                              Express Credit Card.
                              <span className='message-time'>19:58</span>
                            </span>
                          </div>
                        </li>
                        <li className='message-left ms4'>
                          <div className='messageinner-ms4'>
                            <img src='/images/author/author7.jpg' alt='Image' />
                            <span className='message-text'>
                              Thanks for your support !❤️
                              <span className='message-time'>19:58</span>
                            </span>
                          </div>
                        </li>

                        <li className='message-right ms7'>
                          <div className='messageinner-ms7'>
                            <img src='/images/author/author6.jpg' alt='Image' />
                            <span className='message-text'>
                              Have a great day...
                              <span className='message-time'>19:58</span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <img src='/images/banner-img2.jpg' alt='image' />
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className='shape20'>
        <img src='/images/shape/shape19.png' alt='image' />
      </div>
      <div className='shape21'>
        <img src='/images/shape/shape20.png' alt='image' />
      </div>
      <div className='shape19'>
        <img src='/images/shape/shape18.png' alt='image' />
      </div>
      <div className='shape22'>
        <img src='/images/shape/shape21.png' alt='image' />
      </div>
      <div className='shape23'>
        <img src='/images/shape/shape22.svg' alt='image' />
      </div>
      <div className='shape24'>
        <img src='/images/shape/shape23.png' alt='image' />
      </div>
      <div className='shape26'>
        <img src='/images/shape/shape25.png' alt='image' />
      </div>
    </div>
  );
};

export default MainBanner;
