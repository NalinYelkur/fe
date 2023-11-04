import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1024: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
};

class ClientsFeedbackSlider extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      

      <section className='services-area ptb-100'>
      <div>
        

      {/* svg personlaised */}
     
          <div className="Main-div">

          
            <h2>
              What Our Clients Says About <span class ="color">PlugtoChat</span>
            </h2>
            <p> Discover how Plug To Chat can enhance the productivity, cultivate strong customer connections, 
            and significantly elevate the earnings.</p>

          </div>

          {this.state.display ? (
            <OwlCarousel
              className='feedback-slides owl-carousel owl-theme'
              {...options}
            >
              <div className='single-feedback-item'>
                {/* <img src="/images/feedback/feedback1.png" alt="image" /> */}

                <div className='feedback-desc'>
                  <p>
                    {' '}
                    "The best thing about PlugtoChat is how configurable and
                    user-friendly it is. We can provide a plug-and-play solution
                    for our customers, and the ability to customize the chat
                    widget to meet their specific requirements."
                  </p>

                  <div className='rating'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                  </div>

                  <div className='client-info'>
                    <h3> — Stuart Ernstsen</h3>
                    <span>Founder & CEO</span>
                  </div>
                </div>
              </div>

              <div className='single-feedback-item'>
                {/* <img src="/images/feedback/feedback2.png" alt="image" /> */}

                <div className='feedback-desc'>
                  <p>
                    “We’re delighted to have a chat solution on our marketplace
                    which is really simple to put up and looks and works great.”
                  </p>

                  <div className='rating'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                  </div>

                  <div className='client-info' style={{ marginTop: 70 }}>
                    <h3>— Devon Wigle </h3>
                    <span>Co-Founder</span>
                  </div>
                </div>
              </div>

              <div className='single-feedback-item'>
                {/* <img src="/images/feedback/feedback3.png" alt="image" /> */}

                <div className='feedback-desc'>
                  <p>
                    "By allowing our users to connect, we could minimize the
                    load on our services and enhance our conversion rate."
                  </p>

                  <div className='rating'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                  </div>

                  <div className='client-info' style={{ marginTop: 70 }}>
                    <h3>— Randall ByrdView</h3>
                    <span>CHIEF EXECUTIVE</span>
                  </div>
                </div>
              </div>
              <div className='single-feedback-item'>
                {/* <img src="/images/feedback/feedback3.png" alt="image" /> */}

                <div className='feedback-desc'>
                  <p>
                    "Since the beginning, PlugtoChat has been a vital element of
                    our user experience. We now manage thousands of discussions
                    and file shares straight within PlugtoChat, thanks to the
                    platform."
                  </p>

                  <div className='rating'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                  </div>

                  <div className='client-info' style={{ marginTop: 60 }}>
                    <h3>— Yusif Cavadli</h3>
                    <span>Creative Director</span>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ''
          )}
          
        </div>
      </section>
    );
  }
}

export default ClientsFeedbackSlider;