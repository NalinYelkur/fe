import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <footer className='footer-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <div className='logo'>
                  <a href='/'>
                    <img
                      src='/images/white-logo.png'
                      alt='image'
                      height='50px'
                      width='200px'
                    />
                  </a>
                </div>
                <p>
                  Get your Real-time communication platform powered by the
                  best-in- class Plugtochat API and SDKs. Now it&#39;s
                  remarkably simple to add real- time chat to your website and
                  apps.
                </p>
              </div>
            </div>

            <div className='col-lg-2 col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h3>Product</h3>

                <ul className='services-list'>
                  <li>
                    <Link href='/features'>
                      <a>Features</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <a>Live Demo</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/pricing'>
                      <a>Pricing</a>
                    </Link>
                  </li>
                  {/* <li>
                                        <Link href="/blog">
                                            <a>Latest News</a>
                                        </Link>
                                    </li> */}
                </ul>
              </div>
            </div>

            <div className='col-lg-2 col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h3>Support</h3>

                <ul className='support-list'>
                  <li>
                    <Link href='/faq'>
                      <a>FAQ's</a>
                    </Link>
                  </li>
                  {/* <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li> */}
                  <li>
                    <Link href='/assets/pdf/terms_condition.pdf'>
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/assets/pdf/privacy_policy.pdf'>
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/assets/pdf/refund_policy.pdf'>
                      <a>Refund Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact'>
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  {/* <li>
                                        <Link href="#">
                                            <a>Request Demo</a>
                                        </Link>
                                    </li> */}
                </ul>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h3>Contact Info</h3>

                <ul className='footer-contact-info'>
                  <li>
                    Email: <span>support@plugtochat.com</span>
                  </li>
                  <li>
                    Email: <span>info@plugtochat.com</span>
                  </li>
                </ul>

                <ul className='social'>
                  <li>
                    <a
                      href='https://www.facebook.com/ChatAPIandSDK/'
                      target='_blank'
                    >
                      <i className='bx bxl-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/plugtochat' target='_blank'>
                      <i className='bx bxl-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.linkedin.com/company/plugtochat/'
                      target='_blank'
                    >
                      <i className='bx bxl-linkedin'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.instagram.com/plugtochat/?hl=en'
                      target='_blank'
                    >
                      <i className='bx bxl-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='copyright-area'>
            {/* <p className='d-lg-block d-none'>
              Copyright &copy; {currentYear} PlugtoChat.&nbsp; | &nbsp;Design &
              Developed by{' '}
              <a href='http://vardhanworld.com/' target='_blank'>
                Vardhanworld{' '}
              </a>
            </p> */}
            <p className=''>
              &copy; {currentYear} PlugtoChat By{' '}
              <a href='http://vardhanworld.com/' target='_blank'>
                Vardhanworld.
              </a>{' '}
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
