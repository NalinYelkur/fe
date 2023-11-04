import React, { Component, useState } from 'react';
import Link from 'next/link';
import NavbarThree from '../components/Layouts/NavbarThree';
import ScrollAnimation from 'react-animate-on-scroll';

import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import ServiceLefttImageStyle from '../components/HomeChatbot/ServiceLeftImageStyle';
import ServiceRightImageStyle from '../components/HomeChatbot/ServiceRightImageStyle';
import ClientsFeedbackSlider from '../components/Common/ClientsFeedbackSlider';
import FreeTrialArea from '../components/HomeChatbot/FreeTrialArea';
import Footer from '../components/Layouts/Footer';
import { useForm } from 'react-hook-form';
import baseUrl from '../utils/baseUrl';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
import StickyButtons from '../components/HomeChatbot/Sticky';
import Otp from '../components/Otp/Otp';
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

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();

  const [validateEmail, setValidateEmail] = useState(false);

  const save = async (data) => {
    console.log('data', data);
    const signUpData = {
      companyName: data.companyName,
      companyWebsite: data.companyWebsite,
      email: data.email.toLowerCase(),
      name: data.name,
      password: data.password,
    };
    console.log(signUpData);

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
    <>
      <NavbarThree />
      {/* <Otp
        triggerValidateEmail={triggerValidateEmail}
        validateEmail={validateEmail}
        alertContent={alertContent}
        setValidateEmail={setValidateEmail}
      /> */}
      <section className='contact-area ptb-100'>
        <div className='container'>
          <div className='contact-inner'>
            <div className='row'>
              <div className='col-lg-6 col-md-12'>
                <div className='section-title contact-features-list'>
                  <h2>
                    The Ultimate Self-hosted{' '}
                    <span>Javascript SDK & Chat API</span>Solution ever
                  </h2>
                  <p style={{ textAlign: 'left', marginTop: '40px' }}>
                    Get closer to your users by integrating Chat with our
                    pre-build UI powered by building highly secure & scalable
                    Chat API & Javascript SDK in a trice.
                  </p>
                </div>
              </div>

              <div className='col-lg-6 col-md-12'>
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
                  <p style={{ textAlign: 'center', marginTop: 10 }}>
                    Already signed up?{' '}
                    <Link href='https://plugtochat.com:5001/auth/login'>
                      Log in
                    </Link>{' '}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            {/* <ContactInfo /> */}
          </div>
        </div>
      </section>

      {/* <section className='services-area bg-left-color bg-f4f6fc ptb-100 container'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='services-image'>
              <ScrollAnimation
                animateIn='fadeInLeft'
                delay={50}
                animateOnce={true}
              >
                <div className='image'>
                  <img
                    src='/images/signup/social _ communities.png'
                    alt='image'
                  />
                </div>
              </ScrollAnimation>
            </div>

            <div className='services-content'>
              <div className='content'>
                <div className='icon'>
                  <img src="/images/icon1.png" alt="image" />
                </div>

                <h2>
                  Drive more engagement and transactions by connecting buyers
                  with sellers and improving customer support.
                </h2>
                <p>
                  Drive more engagement and transactions by connecting buyers
                  with sellers and improving customer support. Make your
                  sessions immersive with 1-on-1 chat and chat rooms for
                  students and teachers. Integrate real-time conversations on
                  your social platform and improve retention on your social
                  network or online community with active user engagement.
                </p>

              
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <ServiceLefttImageStyle /> */}
      {/* <ServiceRightImageStyle /> */}
      {/* <section className='services-area bg-right-color ptb-100  container'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='services-content'>
              <div className='content left-content overview-content'>
                <div className='icon'>
                  <img src="/images/icon1.png" alt="image" />
                </div>

                <h2>
                  Quickly Build a reliable & Full-featured chat experience into
                  any mobile or web app
                </h2>
                <p>
                  Highly reliable chat infrastructure and feature-rich SDKs with
                  pre-built UI.
                </p>

                <ul>
                  <li>
                    <i className='bx bx-badge-check'></i>
                    Channels, groups & topics
                  </li>
                  <li>
                    <i className='bx bx-badge-check'></i>
                    Online presence indicators
                  </li>
                  <li>
                    <i className='bx bx-badge-check'></i>
                    In-conversation search
                  </li>
                  <li>
                    <i className='bx bx-badge-check'></i>
                    Real-time translation
                  </li>
                  <li>
                    <i className='bx bx-badge-check'></i>
                    Typing & read indicators
                  </li>
                  <li>
                    <i className='bx bx-badge-check'></i>
                    Unread messages badge
                  </li>
                </ul>

                <Link href='/features'>
                  <a className='default-btn'>
                    <i className='bx bxs-spreadsheet'></i>
                    Read More
                    <span></span>
                  </a>
                </Link>
              </div>
            </div>

            <div className='services-image'>
              <ScrollAnimation
                animateIn='fadeInRight'
                delay={50}
                animateOnce={true}
              >
                <div className='image'>
                  <img src='/images/signup/f2.svg' alt='image' />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className='features-area pt-100 pb-70 bg-f4f6fc '>
        <div className='container'>
          <div className='section-title'>
            <h2>
              Quickly build a Full Featured & Reliable & full-featured Chat
              experience into any Mobile or Web App
            </h2>
          </div>

          <div className='row'>
            <div className='col-lg-4 col-sm-6'>
              <ScrollAnimation animateIn='zoomIn' delay={50} animateOnce={true}>
                <div className='single-features-box'>
                  <div className='icon'>
                    <i className='bx bx-conversation'></i>
                  </div>
                  <h3>Marketplaces</h3>
                  <p>
                    PlugtoChat enables chat between buyers and sellers and
                    improves customer support with a pre-build customized live
                    chat API for marketplaces.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
            <div className='col-lg-4 col-sm-6'>
              <ScrollAnimation animateIn='zoomIn' delay={50} animateOnce={true}>
                <div className='single-features-box'>
                  <div className='icon'>
                    <i className='bx bx-conversation'></i>
                  </div>
                  <h3>Education</h3>
                  <p>
                    Connecting teachers with students with unparalleled options
                    in a collaborative and robust environment for distance
                    learning
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            <div className='col-lg-4 col-sm-6'>
              <ScrollAnimation
                animateIn='zoomIn'
                delay={100}
                animateOnce={true}
              >
                <div className='single-features-box'>
                  <div className='icon'>
                    <i className='bx bx-customize'></i>
                  </div>
                  <h3>Virtual events</h3>
                  <p>
                    Delight your attendees, exhibitors, and speakers with an
                    amazing messaging experience.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            <div className='col-lg-4 col-sm-6'>
              <ScrollAnimation
                animateIn='zoomIn'
                delay={150}
                animateOnce={true}
              >
                <div className='single-features-box'>
                  <div className='icon'>
                    <i className='bx bx-slider-alt'></i>
                  </div>
                  <h3>Social & communication</h3>
                  <p>
                    Build and maintain real-time social community platforms.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            <div className='col-lg-4 col-sm-6'>
              <ScrollAnimation
                animateIn='zoomIn'
                delay={200}
                animateOnce={true}
              >
                <div className='single-features-box'>
                  <div className='icon'>
                    <i className='bx bx-reset'></i>
                  </div>
                  <h3>Healthcare</h3>
                  <p>
                    Achieve better patient outcomes with Plugtochat in-app
                    communication features available anytime, anywhere.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            <div className='col-lg-4 col-sm-6'>
              <ScrollAnimation
                animateIn='zoomIn'
                delay={150}
                animateOnce={true}
              >
                <div className='single-features-box'>
                  <div className='icon'>
                    <i className='bx bx-bell'></i>
                  </div>
                  <h3>Hiring & job platforms</h3>
                  <p>
                    Get qualified applicants and source the right talent pools.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section> */}

      {/* <ClientsFeedbackSlider /> */}
      <FreeTrialArea />
      <StickyButtons />
      <Footer />
    </>
  );
};

export default Signup;
