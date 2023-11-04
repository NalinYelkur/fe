import React, { Component } from 'react';
import Link from 'next/link';

class BlogGrid extends Component {
  render() {
    return (
      <section className='blog-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                  <Link href='/chat'>
                    <a>
                      <img src='/images/blog/blog1.jpg' alt='image' />
                    </a>
                  </Link>

                  <div className='date'>
                    <i className='bx bx-calendar'></i> Feb 14, 2020
                  </div>
                </div>

                <div className='post-content'>
                  <h3 style={{ marginBottom: 35 }}>
                    <Link href='/chat'>
                      <a>Chat API and Uses of Chat API</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                  <Link href='/whatsapp-remote'>
                    <a>
                      <img src='/images/blog/blog2.jpg' alt='image' />
                    </a>
                  </Link>

                  <div className='date'>
                    <i className='bx bx-calendar'></i> Feb 16, 2020
                  </div>
                </div>

                <div className='post-content'>
                  <h3>
                    <Link href='/whatsapp-remote'>
                      <a>
                        Reasons why to use the WhatsApp Business API for Remote
                        Work
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                  <Link href='/health-care'>
                    <a>
                      <img src='/images/blog/blog3.jpg' alt='image' />
                    </a>
                  </Link>

                  <div className='date'>
                    <i className='bx bx-calendar'></i> Feb 18, 2020
                  </div>
                </div>

                <div className='post-content'>
                  <h3>
                    <Link href='/health-care'>
                      <a>Role and Importance of Healthcare APIs</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                  <Link href='/SaaS'>
                    <a>
                      <img src='/images/blog/blog4.jpg' alt='image' />
                    </a>
                  </Link>

                  <div className='date'>
                    <i className='bx bx-calendar'></i> Sep 21, 2020
                  </div>
                </div>

                <div className='post-content'>
                  <h3>
                    <Link href='/SaaS'>
                      <a>Pros and Cons of SaaS</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                  <Link href='/Custom-messaging-apps'>
                    <a>
                      <img src='/images/blog/blog5.jpg' alt='image' />
                    </a>
                  </Link>

                  <div className='date'>
                    <i className='bx bx-calendar'></i> Sep 24, 2020
                  </div>
                </div>

                <div className='post-content'>
                  <h3>
                    <Link href='/Custom-messaging-apps'>
                      <a>Significance of Chat API for Custom Messaging Apps</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                  <Link href='/top-use-cases'>
                    <a>
                      <img src='/images/blog/blog6.jpg' alt='image' />
                    </a>
                  </Link>

                  <div className='date'>
                    <i className='bx bx-calendar'></i> Sep 31, 2020
                  </div>
                </div>

                <div className='post-content'>
                  <h3>
                    <Link href='/top-use-cases'>
                      <a>Top Use Cases for Chat API & Instant Messaging SDK</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                  <Link href='/need-chat-api'>
                    <a>
                      <img src='/images/blog/blog7.jpg' alt='image' />
                    </a>
                  </Link>

                  <div className='date'>
                    <i className='bx bx-calendar'></i> Oct 10, 2020
                  </div>
                </div>

                <div className='post-content'>
                  <h3>
                    <Link href='/need-chat-api'>
                      <a>Why do you Need a Chat API For Your Business?</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            {/* start from here */}
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                  <Link href='/ai-ecommerce'>
                    <a>
                      <img src='/images/blog/blog8.jpg' alt='image' />
                    </a>
                  </Link>

                  <div className='date'>
                    <i className='bx bx-calendar'></i> May 7, 2022
                  </div>
                </div>

                <div className='post-content'>
                  <h3 style={{ marginBottom: 35 }}>
                    <Link href='/ai-ecommerce'>
                      <a>How is conversational AI shaping up eCommerce?</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* start from here */}
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                  <Link href='/skyrocket'>
                    <a>
                      <img src='/images/blog/blog9.jpg' alt='image' />
                    </a>
                  </Link>

                  <div className='date'>
                    <i className='bx bx-calendar'></i> Jun 9, 2022
                  </div>
                </div>

                <div className='post-content'>
                  <h3 style={{ marginBottom: 35 }}>
                    <Link href='/skyrocket'>
                      <a>
                        How to skyrocket the ROI of your buisness using live
                        chat plugins using PTC?
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* start from here */}

            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                  <Link href='/chat-api-sdks'>
                    <a>
                      <img src='/images/blog/blog10.jpg' alt='image' />
                    </a>
                  </Link>

                  <div className='date'>
                    <i className='bx bx-calendar'></i> Jul 12 , 2022
                  </div>
                </div>

                <div className='post-content'>
                  <h3 style={{ marginBottom: 35 }}>
                    <Link href='/chat-api-sdks'>
                      <a>Who Benefits the most from Chat API and SDKs?</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* start from here */}
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                  <Link href='/sass-covid-era'>
                    <a>
                      <img src='/images/blog/blog11.jpg' alt='image' />
                    </a>
                  </Link>

                  <div className='date'>
                    <i className='bx bx-calendar'></i> Oct 2, 2022
                  </div>
                </div>

                <div className='post-content'>
                  <h3 style={{ marginBottom: 35 }}>
                    <Link href='/sass-covid-era'>
                      <a>
                        WHy has the SaaS industry been on the rise in post covid
                        era?
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* start from here */}
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <div className='post-image'>
                  <Link href='/plugtochat-api-sdks'>
                    <a>
                      <img src='/images/blog/blog12.jpg' alt='image' />
                    </a>
                  </Link>

                  <div className='date'>
                    <i className='bx bx-calendar'></i>Nov 7, 2022
                  </div>
                </div>

                <div className='post-content'>
                  <h3 style={{ marginBottom: 35 }}>
                    <Link href='/plugtochat-api-sdks'>
                      <a>
                        Why Should You Use PlugtoChat APIs and SDks in your
                        Application?
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BlogGrid;
